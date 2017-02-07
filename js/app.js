
var map;
//Create array for all city markers
var markers = [];
function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.537559, lng: -122.281480},
    zoom: 11
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
      animation: google.maps.Animation.DROP,
      id: i
    });

    markers.push(marker);
  };
  document.getElementById('showCities').addEventListener('click', showCities);
};

function showCities() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  };
};
