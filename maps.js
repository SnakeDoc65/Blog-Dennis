// Initialize the map
var map = L.map('map').setView([47, 10], 4); // Centered around Europe with an appropriate zoom level

// Add tile layer (CartoDB Positron for English labels)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a> and <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Initialize marker cluster group
var markersCluster = L.markerClusterGroup();

// Add markers
var markers = [
  { lat: 35.2401, lng: 24.8093, popup: "Crete, Greece" },
  { lat: 56.9496, lng: 24.1059, popup: "Riga, Latvia" },
  { lat: 39.7109, lng: 3.5074, popup: "Mallorca, Spain" },
  { lat: 40.0026, lng: 4.2118, popup: "Menorca, Spain" },
  { lat: 43.7228, lng: 10.4017, popup: "Pisa, Italy" },
  { lat: 48.2082, lng: 16.3738, popup: "Vienna, Austria" },
  { lat: 52.5200, lng: 13.4050, popup: "Berlin, Germany" },
  { lat: 52.3676, lng: 4.9041, popup: "Amsterdam, Netherlands" },
  { lat: 51.5074, lng: -0.1278, popup: "London, United Kingdom" },
  { lat: 41.0082, lng: 28.9784, popup: "Istanbul, Turkey" },
  { lat: 37.9838, lng: 23.7275, popup: "Athens, Greece" },
  { lat: 53.5511, lng: 9.9937, popup: "Hamburg, Germany" },
  { lat: 48.1351, lng: 11.5820, popup: "Munich, Germany" },
  { lat: 45.8150, lng: 15.9819, popup: "Zagreb, Croatia" },
  { lat: 36.7820, lng: 31.3942, popup: "Side, Turkey" },
  { lat: 48.8566, lng: 2.3522, popup: "Paris, France" }
];

markers.forEach(function(marker) {
  var leafletMarker = L.marker([marker.lat, marker.lng])
    .bindPopup(marker.popup);
  markersCluster.addLayer(leafletMarker);
});

// Add cluster group to map
map.addLayer(markersCluster);
