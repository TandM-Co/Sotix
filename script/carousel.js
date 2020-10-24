var owlCarousel = $('.owl-carousel').owlCarousel({
    items:1,
    margin:10,
    autoHeight:true,
    dots: false
});

$('.owl-dot').click(function (event) {
    var activeDot = $('.owl-dot').toArray().find(function (dot) {
        return dot.classList.contains('owl-dot--active');
    });
    activeDot.classList.remove('owl-dot--active');
    event.target.classList.add('owl-dot--active');
    owlCarousel.trigger('to.owl.carousel', [$(this).index(), 300]);
});
