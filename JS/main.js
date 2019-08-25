$(document).ready(function() {
    $('js-section--about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('nav.lightgrey');
        } else {
            $('nav').removeClass('nav.lightgrey');
        }
    })
});

//Jquery Smooth Scroll
$('.navbar a[href*="#"]').on('click', function(e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
});



// mobile menu
$('.mobile-nav-icon').click(function() {
    const nav = $('.js--main--nav');

    nav.slideToggle(200);
});



//sticky nav bar effect 
$(window).on("scroll", function() {
    if ($(window).scrollTop() === 0) {
        $('nav').addClass('at-top');
    } else {
        $('nav').removeClass('at-top');
    }
});

$(window).trigger('scroll');