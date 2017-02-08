
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

  var largeInfowindow = new google.maps.InfoWindow();

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

    marker.addListener('click', function() {
      populateInfoWindow(this, largeInfowindow);
    });

    // var defaultIcon = makeMarkerIcon('#658d1b');
  };
  document.getElementById('showLocations').addEventListener('click', showLocations);
  document.getElementById('hideLocations').addEventListener('click', hideLocations);
};

// This function populates the infowindow when the marker is clicked. We'll only allow
// one infowindow which will open at the marker that is clicked, and populate based
// on that markers position.
function populateInfoWindow(marker, infowindow) {
  // Check to make sure the infowindow is not already opened on this marker.
  if (infowindow.marker != marker) {
    // Clear the infowindow content to give the streetview time to load.
    infowindow.marker = marker;
    infowindow.setContent('<div>' + marker.title + '</div>');
    infowindow.open(map, marker);
    // Make sure the marker property is cleared if the infowindow is closed.
    infowindow.addListener('closeclick', function() {
      infowindow.marker = null;
    });
  };
};

// This function takes in a COLOR, and then creates a new marker
// icon of that color. The icon will be 21 px wide by 34 high, have an origin
// of 0, 0 and be anchored at 10, 34).
// function makeMarkerIcon(markerColor) {
//   var markerImage = new google.maps.MarkerImage(
//     'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
//     '|40|_|%E2%80%A2',
//     new google.maps.Size(21, 34),
//     new google.maps.Point(0, 0),
//     new google.maps.Point(10, 34),
//     new google.maps.Size(21,34));
//   return markerImage;
// }

function showLocations() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  };
};

function hideLocations() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  };
};
