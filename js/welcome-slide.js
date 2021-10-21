new Swiper('.welcome',{

    navigation: {
        nextEl: '.slider-right',
        prevEl: '.slider-left'
    },

    pagination: {
        el: ".point-container",
        type: "bullets",
        bulletClass: "point",
        bulletActiveClass: "point-activ",
        clickable: !0
    },
    loop: !0,
    grabCursor: !0,

    
});
