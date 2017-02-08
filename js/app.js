
var map;
//Create array for all city markers
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
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.537559, lng: -122.281480},
    zoom: 11,
    styles: styles,
  });

  var locations = [
    {title: 'CenturyLink Field', location: {lat: 47.5952, lng: -122.3316}},
    {title: 'Starfire Sports', location: {lat: 	47.470159, lng: -122.249129}},
    {title: 'Fuel Sports Bar', location: {lat: 	47.601236, lng: 	-122.331833}},
    {title: 'Occidental Square', location: {lat: 47.600318, lng: -122.333388}},
    {title: 'Fado Irish Pub', location: {lat: 	47.604184, lng: -122.335175}},
    {title: 'Memorial Stadium', location: {lat: 47.622815, lng:	-122.349530}}
  ];

  // var largeInfowindow = new google.maps.Infowindow();

  //Create an array of markers using location array
  for (var i = 0; i < locations.length; i++) {
    var mapPosition = locations[i].location;
    var title = locations[i].title;
    //Create each marker for marker array
    var marker = new google.maps.Marker({
      position: mapPosition,
      title: title,
      // icon: defaultIcon,
      animation: google.maps.Animation.DROP,
      id: i
    });

    markers.push(marker);

  //   var defaultIcon = makeMarkerIcon('#658d1b');
  };
  document.getElementById('showCities').addEventListener('click', showCities);
};

// function makeMarkerIcon(markerColor) {
//
// }

function showCities() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  };
};
