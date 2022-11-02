// Add console.log to check to see if our code is working.
console.log("working");

// GeoJSON data is a FeatureCollection object that has properties and geometry for the San Francisco Airport.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Create the map object with a center and zoom level.
// Change the geographical center of the map to the geographical center of the Earth and set the zoom level as 2.
let map = L.map('mapid').setView([30, 30], 2);

// GeoJSON objects are added to the map through a GeoJSON layer, L.geoJSON().
// L.geoJSON(geojsonfeature).addTo(map);
L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  // pointToLayer: function(feature, latlng) {
  //   console.log(feature);
  //   return L.marker(latlng).bindPopup("<h2>" + feature.properties.name + "</h2>"+ "<hr>"
  //     + feature.properties.city + "," + feature.properties.country);
  // }
  onEachFeature: function (feature, layer) {
    console.log(feature);
    console.log(layer);
    return layer.bindPopup("<h3>Airport code: " + feature.properties.faa + "<hr>" + "Airport name: " + feature.properties.name + "</h3>");
  }
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// To change the map's style, change the map id using the list of Mapbox ids below:

// mapbox/streets-v11
// mapbox/outdoors-v11
// mapbox/light-v10
// mapbox/dark-v10
// mapbox/satellite-v9
// mapbox/satellite-streets-v11