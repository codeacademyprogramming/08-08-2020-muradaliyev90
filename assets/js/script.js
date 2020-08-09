$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1000,
        dots:true,
        dotsEach:true
    });
});

// var owl = $('.owl-carousel');
// owl.owlCarousel();
// owl.on('changed.owl.carousel', function(event) {
//     // console.log("test");
// })

// $("#my-slider .owl-dots button span").click(function(){
//     console.log(this);

// })
    // $("#slider-layer .owl-dots button")[0][0].click();