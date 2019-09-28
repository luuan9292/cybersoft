------------------------------------------------------------------------- JS SKILLS --------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

---------------------------------------------
----------------Scroll Smooth----------------
---------------------------------------------

    $('a').click(function(event){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 700);
        event.preventDefault();
    });

---------------------------------------------
----------------Hamberger to X---------------
---------------------------------------------
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

---------------------------------------------
----------------Located Scroll---------------
---------------------------------------------
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