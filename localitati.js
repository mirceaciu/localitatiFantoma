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




var slideshow = '<ul class="rslides"><li><img src="images/1.jpg" alt=""></li><li><img src="images/2.jpg" alt=""></li><li><img src="images/3.jpg" alt=""></li></ul>'

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
            document.getElementById("meta").innerHTML = slideshow;
            $(".rslides").responsiveSlides({
              auto: true,             // Boolean: Animate automatically, true or false
              speed: 500,            // Integer: Speed of the transition, in milliseconds
              timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
              pager: false,           // Boolean: Show pager, true or false
              nav: true,             // Boolean: Show navigation, true or false
              random: false,          // Boolean: Randomize the order of the slides, true or false
              pause: false,           // Boolean: Pause on hover, true or false
              pauseControls: true,    // Boolean: Pause when hovering controls, true or false
              prevText: "Previous",   // String: Text for the "previous" button
              nextText: "Next",       // String: Text for the "next" button
              maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
              navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
              manualControls: "",     // Selector: Declare custom pager navigation
              namespace: "rslides",   // String: Change the default namespace used
              before: function(){},   // Function: Before callback
              after: function(){}     // Function: After callback
            });
           
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
