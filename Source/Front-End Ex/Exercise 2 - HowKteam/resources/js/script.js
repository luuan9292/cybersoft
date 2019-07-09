$(document).ready(function() {

    // Sticky Nav
    $('.about-section').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {offset: '600px'})

    //Scroll smooth when click anchor link
    $('a').click(function(event){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 700);
        event.preventDefault();
    });

    //mobile nav, an hien bars thanh x
    $(".mobile-nav-icon").click(function() {
        $(".main-nav").slideToggle(200);

        if($(".mobile-nav-icon").hasClass('fa-bars')) {
            $(".mobile-nav-icon").addClass('fa-times');
            $(".mobile-nav-icon").removeClass('fa-bars');
        } else {
            $(".mobile-nav-icon").addClass('fa-bars');
            $(".mobile-nav-icon").removeClass('fa-times');
        }
    })

})