$(document).ready(function(){
 
    $('.navbar .btn-1').click(function(e){
        e.preventDefault();
        $('main.section-1').addClass('active');
        $('main.section-2').removeClass('active');
        $('.navbar .btn-1').addClass('active');
        $('.navbar .btn-2').removeClass('active');
    });

    $('.navbar .btn-2').click(function(e){
        e.preventDefault();
        $('main.section-2').addClass('active');
        $('main.section-1').removeClass('active');
        $('.navbar .btn-2').addClass('active');
        $('.navbar .btn-1').removeClass('active');
    });
  
});

const menuBtn = document.querySelector('header .navbar-toggler');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
};

//Animation
gsap.registerPlugin(ScrollTrigger);

//=== Index-Slides Common Animation ===// 
gsap.fromTo('#index-slide1 img.bird, #index-slide4 img.transfer-bird', { 
    x: 0
},{
    x: 18, duration: .6,
    repeat: -1, delay: 3,
    yoyo: true, ease: Power2.easeInOut,
})
gsap.fromTo('img.car', { 
    x: 0
},{
    x: -25, duration: .6,
    repeat: -1, delay: 2.5,
    yoyo: true, ease: Power2.easeInOut,
})
gsap.fromTo('img.first-bird', { 
    x: 0
},{
    x: -10, duration: .6, scale: 1.1, 
    repeat: -1, yoyo: true, ease: Power2.easeInOut,
})
gsap.fromTo('img.original-bird, img.second-bird', { 
    x: 0
},{
    x: 10, duration: .6, scale: 1.1, 
    repeat: -1, yoyo: true, ease: Power2.easeInOut,
})
gsap.fromTo('button.to-bottom', { 
    y: -80, opacity: 0,
},{
    y: 0, opacity: 1, 
    duration: 1, ease: "bounce.out",
})
gsap.fromTo('button.to-top, button.to-bottom', { 
    y: 0
},{
    y: -20, duration: 1, repeat: -1, 
    yoyo: true, ease: Power2.easeInOut,
    delay: 1.75
})

//=== Index-Slides1 ===//
gsap.fromTo('#index-slide1 img.title', { 
    y: -200, opacity: 0,
},{
    y: 0, opacity: 1, 
    duration: 1, ease: "bounce.out",
})
gsap.fromTo('img.car', { 
    x: 200, opacity: 0
}, {
    x: 0, opacity: 1, delay: 1,
    duration: 1, ease: "bounce.out",
})
gsap.fromTo('#index-slide1 .points-container .points', { 
    y: 200, opacity: 0
}, {
    y: 0, opacity: 1, 
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: '#index-slide1',
        start: 'bottom 80%'
    }
})

//=== Index-Slides2 ===//
gsap.fromTo('#index-slide2 article .advise-container', { 
    y: 200, opacity: 0
}, {
    y: 0, opacity: 1,
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: '#index-slide2 article .advise-container',
    }
})
gsap.fromTo('#index-slide2 .carousel', { 
    y: 50, opacity: 0
}, {
    y: 0, opacity: 1, delay: 1,
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: '#index-slide2 .carousel',
    }
})

//=== Index-Slides3 ===//
gsap.fromTo('#index-slide3 img.left-bird', { 
    x: -150, opacity: 0
}, {
    x: 0, opacity: 1,
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: '#index-slide3',
        start: 'top 80%'
    }
})
gsap.fromTo('#index-slide3 img.right-bird', { 
    x: 150, opacity: 0
}, {
    x: 0, opacity: 1,
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: '#index-slide3',
        start: 'top 80%'
    }
})
gsap.fromTo('#index-slide3 .advantages-container .advantages', { 
    y: 200, opacity: 0
}, {
    y: 0, opacity: 1, delay: .5,
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: '#index-slide3 .advantages-container',
        start: 'top 70%'
    }
})
gsap.fromTo('#index-slide3 article button', { 
    y: 70, opacity: 0
}, {
    y: 0, opacity: 1, delay: 1,
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: '#index-slide3 .advantages-container',
        start: 'top 70%'
    }
})

//=== Index-Slides4 ===//
gsap.fromTo('#index-slide4 img.transfer-bird', { 
    x: 200, opacity: 0
}, {
    x: 0, opacity: 1,
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: '#index-slide4',
        start: 'top 50%'
    }
})

//=== Index-Slides5 ===//
gsap.fromTo('#index-slide5 img.payments-bird',{ 
    x: -200, opacity: 0
}, {
    x: 0, opacity: 1,
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: '#index-slide5 .payment-methods',
        start: 'top 90%'
    }
})
gsap.fromTo('#index-slide5 .payment-methods', { 
    y: 200, opacity: 0
}, {
    y: 0, opacity: 1, delay: .5,
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: '#index-slide5 .payment-methods',
        start: 'top 90%'
    }
})
gsap.fromTo('#index-slide5 .payment-methods button', { 
    y: 20, opacity: 0
}, {
    y: 0, opacity: 1, delay: 1,
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: '#index-slide5 .payment-methods',
        start: 'top 90%'
    }
})
