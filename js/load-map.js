// This access token allows us to use Mapbox's API
L.mapbox.accessToken = 'pk.eyJ1Ijoid2lsbGlhbWNoaXR0ZXN0ZXIiLCJhIjoiMm5yRTJBayJ9.XNgbTn1Chewc4_158cPl4w';

// Set the maximum bounds so the map user doesn't pan too far from campus
var southWest = L.latLng(40.7643, -77.9043), // south-west corner of maximum view
    northEast = L.latLng(40.8844, -77.8064), // north-east corner of maximum view
    bounds = L.latLngBounds(southWest, northEast); // combine the two corners to set the bounds

// Add a basic slippy map to the webpage using Leaflet.js and save it as the variable map
var map = L.mapbox.map('map', 'williamchittester.y9gxecdi', { // Create a new map using the map tiles 'aarondennis.f6516522' in the map div
    maxBounds: bounds, // set the maximum pan boundaries to bounds
    maxZoom: 19, // set how far into the map you can zoom to level 19
    minZoom: 15  // set how far out from the map you can zoom to level 15
  }).setView([40.7967, -77.8619], 18); // set the map view to those coordinates and zoom level 18 (Old Main)

L.control.locate().addTo(map); // Adds the geolocate button to the map

var hash = L.hash(map); // Makes the webpage URL change so that the coordinates are included
