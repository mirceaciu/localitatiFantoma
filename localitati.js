var map = L.map('map').setView([45.986, 24.785], 6);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> &amp; <a href="http://geo-spatial.org">Geo-spatial.org</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>, Map by Mirceaciu',
    zoomControl: false,
    maxZoom: 10,
    minZoom: 6,
    id: 'mirceaciu.ml2704el', // transparent
//  id:'mirceaciu.6caff4a4', // cubasemap
    accessToken: 'pk.eyJ1IjoibWlyY2VhY2l1IiwiYSI6IjNkNGFiMTU5NjRlNGNkZTA1ZGExMDVkNjUxYzZmZDlhIn0.5E0fCQOJlyAJFjkEYX1NGg'
}).addTo(map);




var slideshow = '<embed type="application/x-shockwave-flash" src="https://photos.gstatic.com/media/slideshow.swf"  width="100%" height="100%" flashvars="host=picasaweb.google.com&hl=en_GB&feat=flashalbum&RGB=0x68B89A&feed=https%3A%2F%2Fpicasaweb.google.com%2Fdata%2Ffeed%2Fapi%2Fuser%2F101308797789854061175%2Falbumid%2F6164681416049640049%3Falt%3Drss%26kind%3Dphoto%26hl%3Den_GB" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>'
    //map.dragging.disable();
    //map.touchZoom.disable();
    //map.doubleClickZoom.disable();
    //map.scrollWheelZoom.disable();
//if (map.tap) map.tap.disable();

var iconita = new L.icon({
    iconUrl: 'images/capF.png',
    //iconRetinaUrl: 'my-icon@2x.png',
    iconSize: [16, 16],
   //iconAnchor: [0, 0],
   // popupAnchor: [-3, -76],
    //shadowUrl: 'my-icon-shadow.png',
    //shadowRetinaUrl: 'my-icon-shadow@2x.png',
    //shadowSize: [68, 95],
    //shadowAnchor: [2, 94]
});




L.geoJson(localitati, {
	

    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name);
        layer.setIcon(iconita);

        layer.on('click', function (e) {
            document.getElementById("info").innerHTML = "<p>aici vom scrie informatii despre " + feature.properties.name + ", iar mai jos imagini, daca exista</p>" + "<br>"+ "<p> pentru imagini se vor da credite autorului tot aici gen:</p><p><a href=''> Autor: Andrea Dumitrache</a><p/>"  
            document.getElementById("meta").innerHTML = feature.properties.pictures;
           
           // $("#feature_infos").stop();
           // $("#feature_infos").fadeIn("fast");

            console.log(feature.properties.name);
           // $("#feature_infos").fadeOut(5000);
            // This is your click handler. 
            // Your feature is available here as e.target, and the 
            //featureInfo object we added is available as e.target.featureInfo 
        });
    }
}).addTo(map).bringToFront();





L.geoJson(judete, {
	//onEachFeature: puncteLocalitati

     style: function (feature) {
        return {
        fillColor: '#D277C6',
        weight: 1.5,
        opacity: 1,
        color: '#ffffff',
        dashArray: '0',
        fillOpacity: 0.2}
    }
    
}).addTo(map);
