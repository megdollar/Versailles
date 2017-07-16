var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

var map, marker;

function initMap() {
        var versailles = {lat: 48.8049, lng: 2.1204};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: versailles,
          scrollwheel: false,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.BOTTOM_CENTER
        }
        });
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h2 id="infoHeading">Palace of Versailles</h2>'+
            '<div id="bodyContent">'+
            '<p><ul><li>The Palace is open every day except Mondays from 9.00 am, but the estate of Trianon and the Coach Gallery only open in the afternoon.</li> ' +
            '<li>The Park and Gardens are open every day. The access is free except during Musical Fountains Shows and Musical Gardens.</li> '+
            '<li> You can access the estate of Trianon through the Gardens or through the city. </li>'+
            '<li>There are three train stations in Versailles, the closest one of the Palace is Versailles Château Rive Gauche.  </li></p>'+
            '<p class="linktoSite"> <a href="http://en.chateauversailles.fr/"> Official Website</a> </p>'+
            '</div>'+
            '</div>';
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        var marker = new google.maps.Marker({
          map: map,
          draggable: false,
          animation: google.maps.Animation.DROP,
          position: versailles,
          
        });
        google.maps.event.addListener(marker, 'click', function() {
          if (marker.getAnimation() !== null) {
              marker.setAnimation(null);
              infowindow.close(map, marker);
          } else {
              marker.setAnimation(google.maps.Animation.BOUNCE);
              infowindow.open(map, marker);
          }
        });
      }




 function googleError(){
  alert("At this time we are unable to load Google Maps");
}