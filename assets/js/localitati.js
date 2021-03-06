
var bounds = new L.LatLngBounds(new L.LatLng(50.16282, 43.54980), new L.LatLng(40.39676, 15.40283));



var centruHarta = [45.706, 29.333];
var zoomRSP = 6 ;

if($(document).width()>1500) {
  var zoomRSP = 7 ;
  var centruHarta = [45.801, 29.223];
  var bounds = new L.LatLngBounds(new L.LatLng(49.48240, 39.77050), new L.LatLng(41.86137, 18.67675));
}

else if($(document).width()<=700) {
  var centruHarta = [42.642, 24.763];
  var bounds = new L.LatLngBounds(new L.LatLng(49.05227, 30.45410), new L.LatLng(35.49645, 19.07226));


}
else {
  var zoomRSP = 6 ;
  var centruHarta = [45.706, 29.333]
};


var map = L.map('map', {maxBounds: bounds}).setView(centruHarta, zoomRSP);


var  cuBaseMap  = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> &amp; <a href="http://geo-spatial.org">Geo-spatial.org</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>, Map by Mirceaciu',
    maxZoom: 17,
    minZoom: 6,
    id:'mirceaciu.6caff4a4', // cubasemap
    accessToken: 'pk.eyJ1IjoibWlyY2VhY2l1IiwiYSI6IjNkNGFiMTU5NjRlNGNkZTA1ZGExMDVkNjUxYzZmZDlhIn0.5E0fCQOJlyAJFjkEYX1NGg'
}).addTo(map),


 transparent =   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> &amp; <a href="http://geo-spatial.org">Geo-spatial.org</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>, Map by Mirceaciu',
    maxZoom: 17,
    minZoom: 6,
    id: 'mirceaciu.ml2704el', // transparent
    accessToken: 'pk.eyJ1IjoibWlyY2VhY2l1IiwiYSI6IjNkNGFiMTU5NjRlNGNkZTA1ZGExMDVkNjUxYzZmZDlhIn0.5E0fCQOJlyAJFjkEYX1NGg'
});



//var slideshow = '<ul class="rslides"><li><img src="images/1.jpg" alt=""></li><li><img src="images/2.jpg" alt=""></li><li><img src="images/3.jpg" alt=""></li></ul>'
//var hahaha = 'Conform informațiilor din cadrul Recensământului Populației și Locuințelor din anul 2011 localitatea nu avea niciun locuitor la data recensământului. Conform Planurilor Directoare de Tragere (1916 - 1959) se poate identifica faptul că localitatea este în momentul de față sub lacul Stânca Costești. Localitatea a fost acoperită de ape odată cu construirea barajului și formarea lacului de acumulare Stânca Costești.OpenStreet Map și WikiMapia indică poziționarea localității într-o zonă unde, pe imaginile satelitare recente, se pot observa doar clădiri dărâmate.ANCPI reprezintă pe harta Topro5 localitatea Bold, ca un poligon cu două corpuri, unul dintre ele pe un câmp gol și un altul cuprinzând ferma industrială de la „Stânca Ripiceni”, care aparține în realitate de localitatea Ripiceni. ANCPI poziționează Ripicenii Vechi pe un câmp gol în sudul localității Ripiceni. În conformitate cu informațiile statistice din anul 2013 ale Autorității Naționale Sanitar Veterinare și Pentru Siguranța Alimentelor localitatea figurează cu 7 bovine.'
//var backbutton = '<a href = "#" class="button" id="backbutton">inapoi la harta</a>'

    //map.dragging.disable();
    //map.touchZoom.disable();
    //map.doubleClickZoom.disable();
    //map.scrollWheelZoom.disable();
//if (map.tap) map.tap.disable();

var iconita = new L.icon({
    iconUrl: 'assets/images/gimmi-round.png',
    //iconRetinaUrl: 'my-icon@2x.png',
    iconSize: [16, 16],
   //iconAnchor: [0, 0],
   // popupAnchor: [-3, -76],
    //shadowUrl: 'my-icon-shadow.png',
    //shadowRetinaUrl: 'my-icon-shadow@2x.png',
    //shadowSize: [68, 95],
    //shadowAnchor: [2, 94]
});



var noImage = '<div class="containter-text" style = "text-align:center"> <p class="text-informatii" style = "text-align:center">nu există imagini. Dacă deţii informaţii contribuie</p> <a href="https://localitatifantoma.wordpress.com" class="button" style = "margin: 10px 0px">contact</a> </div>';
var localitatiPuncte = L.geoJson(localitati, {


    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name);
        layer.setIcon(iconita);

        layer.on('click', function (e) {
			  document.getElementById("info").innerHTML = 'Populatie ' +feature.properties.name +' : ' + feature.properties.populatie +' <br> Cărţi Funciare: '+ feature.properties.cartif +'<br> Animale: ' +feature.properties.animale+ '<br><a href = "#" class="button" id="paragraf">Afla mai multe<a/> <br><a href = "#" class="button" id="imagebutton">Vezi imagini<a/> ';
            //document.getElementById("info").innerHTML = "<p>aici vom scrie informatii despre " + feature.properties.name + ", iar mai jos imagini, daca exista</p>" + "<br>"+ "<p> pentru imagini se vor da credite autorului tot aici gen:</p><p><a href=''> Autor: Andrea Dumitrache</a><p/>"
            //document.getElementById("meta").innerHTML = feature.properties.pictures;

//***********************************************************
//  SLIDER IMAGINI
//***********************************************************

            $(".rslides").responsiveSlides({
              auto: false,             // Boolean: Animate automatically, true or false
              speed: 500,            // Integer: Speed of the transition, in milliseconds
              timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
              pager: false,           // Boolean: Show pager, true or false
              nav: true,             // Boolean: Show navigation, true or false
              //random: false,          // Boolean: Randomize the order of the slides, true or false
              //pause: false,           // Boolean: Pause on hover, true or false
              //pauseControls: true,    // Boolean: Pause when hovering controls, true or false
              //prevText: "Previous",   // String: Text for the "previous" button
              //nextText: "Next",       // String: Text for the "next" button
              //maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
              //navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
              //manualControls: "",     // Selector: Declare custom pager navigation
              namespace: "rslides",   // String: Change the default namespace used
              before: function(){},   // Function: Before callback
              after: function(){}     // Function: After callback
            });



//***********************************************************
//  ARATA/ASCUNDE TOATE INFORMATIILE
//***********************************************************


            $(function(){  // functia asta aduce sau ascunde informatiile suplimentare
            var hits = 0; //->numarator de clickuri

               $("#imagebutton").click(function(){
                    if  (hits % 2 == 0) //pentru hituri impare
                    {

              if (feature.properties.listimg){
                document.getElementById("meta").innerHTML = feature.properties.listimg;
              } else {
                 document.getElementById("meta").innerHTML = noImage;
              }
              document.getElementById("imagebutton").innerHTML = 'inapoi la harta';
              $("#meta").css("z-index", 1);
              $(".rslides").responsiveSlides({
              auto: false,             // Boolean: Animate automatically, true or false
              speed: 500,            // Integer: Speed of the transition, in milliseconds
              timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
              pager: false,           // Boolean: Show pager, true or false
              nav: true,             // Boolean: Show navigation, true or false
              //random: false,          // Boolean: Randomize the order of the slides, true or false
              //pause: false,           // Boolean: Pause on hover, true or false
              //pauseControls: true,    // Boolean: Pause when hovering controls, true or false
              //prevText: "Previous",   // String: Text for the "previous" button
              //nextText: "Next",       // String: Text for the "next" button
              //maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
              //navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
              //manualControls: "",     // Selector: Declare custom pager navigation
              namespace: "rslides",   // String: Change the default namespace used
              before: function(){},   // Function: Before callback
              after: function(){}     // Function: After callback
            });

                    }
                    else
                    { // pentru hituri pare
             document.getElementById("meta").innerHTML = '';
              document.getElementById("imagebutton").innerHTML = 'vezi imagini';
              $("#meta").css("z-index", 0);

                    }
                   hits++;
              return false;
              });
              });

//***********************************************************
//  ARATA/ASCUNDE TOATE INFORMATIILE
//***********************************************************
            $(function(){  // functia asta aduce sau ascunde informatiile suplimentare
            var hits = 0; //->numarator de clickuri

               $('#paragraf').click(function(){
                    if  (hits % 2 == 0) //pentru hituri impare
                    {
              document.getElementById("meta").innerHTML = '<div class="containter-text"> <p class="text-informatii">'+ feature.properties.obs + "</p></div>";
              document.getElementById("paragraf").innerHTML = 'inapoi la harta';
              $("#meta").css("z-index", 1);
                    }
                    else
                    { // pentru hituri pare
             document.getElementById("meta").innerHTML = '';
              document.getElementById("paragraf").innerHTML = 'afla mai multe';
              $("#meta").css("z-index", 0);
                    }
                   hits++;
              return false;
              });
              });





        });  // FINAL FEATURE
    }
}).addTo(map).bringToFront();





var JudetePoly = L.geoJson(judete, {
	//onEachFeature: puncteLocalitati

     style: function (feature) {
        return {
        //fillColor: '#D277C6',
        weight: 1.5,
        opacity: 1,
        color: '#ffffff',
        dashArray: '0',
        fillOpacity: 0}
    }

}).addTo(map);


var baseMaps = {
    "Base-map": transparent,
    "Satellite": cuBaseMap

};

var overlayMaps = {
    "Localitati": localitatiPuncte,
    "Judete" : JudetePoly
};

L.control.layers(baseMaps, overlayMaps, {position: 'topleft'}).addTo(map)
