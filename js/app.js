
var map;
//Create array for all city markers
var markers = [];
function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.8282, lng: -98.5795},
    zoom: 4
  });

  var locations = [
    {title: 'Birmingham, Alabama', location: {lat: 33.543682, lng: -86.779633}},
    {title: 'Anchorage, Alaska', location: {lat: 	61.217381, lng: -149.863129}},
    {title: 'Phoenix, Arizona', location: {lat: 	33.448376, lng: 	-112.074036}},
    {title: 'Little Rock, Arkansas', location: {lat: 34.746483, lng: -92.289597}},
    {title: 'Los Angeles, California', location: {lat: 	34.052235, lng: -118.243683}},
    {title: 'Denver, Colorado', location: {lat: 39.742043, lng:	-104.991531}},
    {title: 'Bridgeport, Connecticut', location: {lat: 41.1865, lng: -73.1952}},
    {title: 'Wilmington, Delaware', location: {lat: 39.739071, lng: -75.539787}},
    {title: 'Jacksonville, Florida', location: {lat: 	30.332184, lng: -81.655647}},
    {title: 'Atlanta, Georgia', location: {lat: 	33.753746, lng: -84.386330}},
    {title: 'Honolulu, Hawaii', location: {lat: 	21.315603, lng: -157.858093}},
    {title: 'Boise, Idaho', location: {lat: 43.618881, lng: -116.215019}},
    {title: 'Chicago, Illinois', location: {lat: 41.881832, lng: -87.623177}},
    {title: 'Indianapolis, Indiana', location: {lat: 39.7684, lng: -86.1581}},
    {title: 'Des Moines, Iowa', location: {lat: 41.619549, lng: -93.598022}},
    {title: 'Wichita, Kansas', location: {lat: 37.697948, lng: -97.314835}},
    {title: 'Louisville, Kentucky', location: {lat: 38.328732, lng: -85.764771}},
    {title: 'New Orleans, Louisiana', location: {lat: 29.951065, lng: -90.071533}},
    {title: 'Portland, Maine', location: {lat: 43.6615, lng: -70.2553}},
    {title: 'Baltimore, Maryland', location: {lat: 39.299236, lng: -76.609383}},
    {title: 'Boston, Massachusetts', location: {lat: 42.361145, lng: -71.057083}},
    {title: 'Detroit, Michigan', location: {lat: 42.331429, lng: -83.045753}},
    {title: 'Minneapolis, Minnesota', location: {lat: 44.986656, lng: -93.258133}},
    {title: 'Jackson, Mississippi', location: {lat: 32.298756, lng: -90.184807}},
    {title: 'Kansas City, Missouri', location: {lat: 39.0997, lng: -94.5786}},
    {title: 'Billings, Montana', location: {lat: 45.787636, lng: -108.489304}},
    {title: 'Omaha, Nebraska', location: {lat: 	41.257160, lng: -95.995102}},
    {title: 'Las Vegas, Nevada', location: {lat: 36.114647, lng: -115.172813}},
    {title: 'Manchester, New Hampshire', location: {lat: 43.008663, lng: -71.454391}},
    {title: 'Newark, New Jersey', location: {lat: 40.735657, lng: -74.172363}},
    {title: 'Albuquerque, New Mexico', location: {lat: 	35.123280, lng: -106.587296}},
    {title: 'New York City, New York', location: {lat: 	40.730610, lng: -73.935242}},
    {title: 'Charlotte, North Carolina', location: {lat: 	35.227085, lng: -80.843124}},
    {title: 'Fargo, North Dakota', location: {lat: 46.8772, lng: -96.7898}},
    {title: 'Columbus, Ohio', location: {lat: 39.9612, lng: -82.9988}},
    {title: 'Oklahoma City, Oklahoma', location: {lat: 	35.481918, lng: -97.508469}},
    {title: 'Portland, Oregon', location: {lat: 45.523064, lng: -122.676483}},
    {title: 'Philadelphia, Pennsylvania', location: {lat: 39.952583, lng: -75.165222}},
    {title: 'Providence, Rhode Island', location: {lat: 41.8240, lng: -71.4128}},
    {title: 'Columbia, South Carolina', location: {lat: 34.0007, lng: -81.0348}},
    {title: 'Sioux Falls, South Dakota', location: {lat: 43.5446, lng: -96.7311}},
    {title: 'Memphis, Tennessee', location: {lat: 35.1495, lng: -90.0490}},
    {title: 'Houston, Texas', location: {lat: 29.7604, lng: -95.3698}},
    {title: 'Salt Lake City, Utah', location: {lat: 40.7608, lng: -111.8910}},
    {title: 'Burlington, Vermont', location: {lat: 44.4759, lng: -73.2121}},
    {title: 'Virginia Beach, Virginia', location: {lat: 36.8529, lng: -75.9780}},
    {title: 'Seattle, Washington', location: {lat: 47.6062, lng: -122.3321}},
    {title: 'Charleston, West Virginia', location: {lat: 38.3498, lng: -81.6326}},
    {title: 'Milwaukee, Wisconsin', location: {lat: 43.0389, lng: -87.9065}},
    {title: 'Cheyenne, Wyoming', location: {lat: 41.1400, lng: -104.8202}}
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
