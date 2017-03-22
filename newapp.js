var model = [{
  title: 'CenturyLink Field',
  location: {lat: 47.5952, lng: -122.3316},
  locationType: 'Stadium'
},{
  title: 'Starfire Sports',
  location: {lat:	47.470159, lng: -122.249129},
  locationType: 'Stadium'
},{
  title: 'Fuel Sports Bar',
  location: {lat:	47.601236, lng: -122.331833},
  locationType: 'Alcohol/Bars'
},{
  title: 'Occidental Square',
  location: {lat: 47.600318, lng: -122.333388},
  locationType: 'March gathering'
},{
  title: 'Fado Irish Pub',
  location: {lat: 47.604184, lng: -122.335175},
  locationType: 'Alcohol/Bars'
},{
  title: 'Memorial Stadium',
  location: {lat: 47.622815, lng:	-122.349530},
  locationType: 'Stadium'
},{
  title: 'The Atlantic Crossing',
  location: {lat: 47.478068, lng: -122.317433},
  locationType: 'Alcohol/Bars'
},{
  title: 'Altstadt',
  location: {lat: 47.600692, lng: -122.334571},
  locationType: 'Alcohol/Bars'
},{
  title: 'Flatstick Pub',
  location: {lat: 47.600337, lng: -122.331174},
  locationType: 'Alcohol/Bars'
},{
  title: 'The Hard Rock Cafe',
  location: {lat: 47.609460, lng: -122.339413},
  locationType: 'Restaurants'
},{
  title: 'Ozzie\'s',
  location: {lat: 47.624484, lng: -122.358046},
  locationType: 'Alcohol/Bars'
},{
  title: 'Rhein Haus',
  location: {lat: 47.611092, lng: -122.316614},
  locationType: 'Alcohol/Bars'
},{
  title: 'Shawn O\'Donnell\'s',
  location: {lat: 47.602167, lng: -122.331933},
  locationType: 'Alcohol/Bars'
},{
  title: 'Three Magnets Brewing Co.',
  location: {lat: 47.043318, lng: -122.898549},
  locationType: 'Alcohol/Bars'
},{
  title: 'The Westy',
  location: {lat: 47.531818, lng: -122.376339},
  locationType: 'Alcohol/Bars'
},{
  title: 'West Seattle Brewing Co.',
  location: {lat: 47.564591, lng: -122.377724},
  locationType: 'Alcohol/Bars'
}
];

var ViewModel = function() {
  var self = this;
  self.ecsList = ko.observableArray([]);
  self.filterOptions = ko.observableArray([
    'All', 'Restaurants', 'Alcohol/Bars', 'Stadium', 'March gathering'
  ]);
  self.selectedFilter = ko.observable();
  self.filteredList = ko.computed(function(){
    return self.ecsList().filter(function(listItem){
      return listItem.locationType() === self.selectedFilter();
    })
  });

  model.forEach(function(location) {
    self.ecsList.push(new Locations(location));
  });

  this.currentLocation = ko.observable(this.ecsList()[0]);
};

var Locations = function(data) {
  this.name = ko.observable(data.title);
  this.location = ko.observable(data.location);
  this.locationType = ko.observable(data.locationType);
};

var map;
var markers = [];
function initMap() {
  var styles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
];
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.537559, lng: -122.281480},
    zoom: 11,
    styles: styles
  });

  for (var i = 0; i < model.length; i++) {
    var mapPosition = model[i].location;
    var title = model[i].title;
    //Create each marker for marker array
    var marker = new google.maps.Marker({
      position: mapPosition,
      title: title,
      // icon: defaultIcon,
      animation: google.maps.Animation.DROP,
      id: i
    });

    // markers.push(marker);
    marker.setMap(map);
  };
};

ko.applyBindings(new ViewModel());
