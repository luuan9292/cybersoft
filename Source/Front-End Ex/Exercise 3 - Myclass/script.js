//  Google Maps >
var myCenter = new google.maps.LatLng(10.7889343, 106.7040522);

function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 12,
        scrollwheel: false,
        draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var marker = new google.maps.Marker({
        position: myCenter
    });

    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

//Animation
$(document).ready(function() {

    $(window).scroll(function() {
        $('.slideanim').each(function() {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if(pos < winTop + 600) {
                $(this).addClass('slide');
            }
        });
    })
});