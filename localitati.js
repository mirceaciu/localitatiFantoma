var map = L.map('map').setView([45.986, 24.785], 7);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> &amp; <a href="http://geo-spatial.org">Geo-spatial.org</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>, Map by Mirceaciu',
    zoomControl: false,
    maxZoom: 7,
    minZoom: 6,
    id: 'mirceaciu.6caff4a4',
    accessToken: 'pk.eyJ1IjoibWlyY2VhY2l1IiwiYSI6IjNkNGFiMTU5NjRlNGNkZTA1ZGExMDVkNjUxYzZmZDlhIn0.5E0fCQOJlyAJFjkEYX1NGg'
}).addTo(map);

    map.dragging.disable();
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
if (map.tap) map.tap.disable();

function puncteLocalitati(feature, layer){
	layer.bindPopup("Buuuuuu!")
};

L.geoJson(localitati, {
	onEachFeature: puncteLocalitati
}).addTo(map);