$('.recently-placed-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots:true,
    items:4,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        991:{
            items:3
        },
        1199:{
            items:4
        }
    }
});

$('.upcoming-webinars-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    items:1,
    stagePadding: 100,
    responsive:{
        0:{
            stagePadding: 0,
        },
        768:{
            stagePadding: 100,
        }
    }
});


$('.student-reviews-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots:true,
    items:3,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        991:{
            items:3
        },
        1199:{
            items:3
        }
    }
});

$('.related-courses-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots:true,
    items:3,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        991:{
            items:3
        },
        1199:{
            items:3
        }
    }
});
  