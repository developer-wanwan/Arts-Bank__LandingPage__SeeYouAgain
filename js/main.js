//MenuBtn
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

//Animation
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('main.section-1 #slide1 .top-topic, main.section-2 #slide1 .top-topic', { 
    y: -200, opacity: 0, 
}, {
    y: 0, opacity: 1, 
    duration: 1, ease: "bounce.out",
})
gsap.fromTo('img.car', { 
    x: 200, opacity: 0
}, {
    x: 0, opacity: 1, delay: .75,
    duration: 1, ease: "bounce.out",
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
    opacity: 0,
},{
    opacity: 1, duration: 1, 
    stagger: .5, delay: 1.85,
})
gsap.fromTo('button.to-bottom', { 
    y: -20
},{
    y: 0, duration: 1, repeat: -1, 
    yoyo: true, ease: Power2.easeInOut,
    delay: 2.2,
})
gsap.fromTo('button.to-top', { 
    y: 0
},{
    y: -20, duration: 1, repeat: -1, 
    yoyo: true, ease: Power2.easeInOut,
    delay: 1,
})

//=== Section-1 ===//
gsap.fromTo('main.section-1 #slide1 .text-frame', { 
    y: 200, opacity: 0
}, {
    y: 0, opacity: 1, 
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: 'main.section-1 #slide1 .text-frame',
        start: 'top 80%'
    }
})
gsap.fromTo('main.section-1 #slide1 .closing-details .each-detail:first-child', { 
    y: 200, opacity: 0
}, {
    y: 0, opacity: 1, 
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: 'main.section-1 #slide1 .closing-details',
        start: 'top 60%'
    }
})
gsap.fromTo('main.section-1 #slide1 .closing-details .each-detail:nth-child(2)', { 
    y: 200, opacity: 0
}, {
    y: 0, opacity: 1, delay: .5,
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: 'main.section-1 #slide1 .closing-details',
        start: 'top 60%'
    }
})
gsap.fromTo('main.section-1 #slide2 .vip-invition h2', { 
    y: -100, opacity: 0
}, {
    y: 0, opacity: 1,
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: 'main.section-1 #slide2 .vip-invition',
        start: 'top 50%'
    }
})
gsap.fromTo('main.section-1 #slide2 .vip-invition .remind', { 
    y: -50, opacity: 0
}, {
    y: 0, opacity: 1, delay: .5,
    duration: 1, ease: "power2.out",
    scrollTrigger:{
        trigger: 'main.section-1 #slide2 .vip-invition .remind',
        start: 'top 50%'
    }
})
gsap.fromTo('main.section-1 #slide2 .carousel, main.section-1 #slide2 .steps', { 
    y: 100, opacity: 0
}, {
    y: 0, opacity: 1,
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: 'main.section-1 #slide2 .carousel, main.section-1 #slide2 .steps',
        start: 'top 60%'
    }
})
gsap.fromTo('main.section-1 #slide2 p.remind, main.section-1 #slide2 button.icons-1', { 
    y: 50, opacity: 0
}, {
    y: 0, opacity: 1, delay: .5,
    duration: 1, ease: "power2.out",
    scrollTrigger:{
        trigger: 'main.section-1 #slide2 .carousel, main.section-1 #slide2 .steps',
        start: 'top 50%'
    }
})
gsap.fromTo('main.section-1 #slide2 .cultural-coin .section-1 img', { 
    x: 50, opacity: 0
}, {
    x: 0, opacity: 1,
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: 'main.section-1 #slide2 .cultural-coin .section-1',
        start: 'top 50%'
    }
})
gsap.fromTo('main.section-1 #slide2 .cultural-coin .section-1 .frame', { 
    x: 30, opacity: 0
}, {
    x: 0, opacity: 1, delay: 1,
    duration: 1, ease: "power2.out",
    scrollTrigger:{
        trigger: 'main.section-1 #slide2 .cultural-coin .section-1',
        start: 'top 50%'
    }
})
gsap.fromTo('main.section-1 #slide2 .cultural-coin .section-2 img', { 
    x: -80, opacity: 0
}, {
    x: 0, opacity: 1, delay: 1.5,
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: 'main.section-1 #slide2 .cultural-coin .section-1',
        start: 'top 50%'
    }
})
gsap.fromTo('main.section-1 #slide2 .cultural-coin .section-2 .frame', { 
    x: -20, opacity: 0
}, {
    x: 0, opacity: 1, delay: 2,
    duration: 1, ease: "power2.out",
    scrollTrigger:{
        trigger: 'main.section-1 #slide2 .cultural-coin .section-1',
        start: 'top 50%'
    }
})
gsap.fromTo('main.section-1 #slide2 footer .reward', { 
    y: 50, opacity: 0
}, {
    y: 0, opacity: 1, 
    duration: 1, ease: "power2.out",
    scrollTrigger:{
        trigger: 'main.section-1 #slide2 footer',
        start: 'top 70%'
    }
})
gsap.fromTo('main.section-1 #slide2 footer article', { 
    y: 100, opacity: 0
}, {
    y: 0, opacity: 1, delay: .75,
    duration: 1, ease: "power2.out",
    scrollTrigger:{
        trigger: 'main.section-1 #slide2 footer',
        start: 'top 60%'
    }
})

//=== Section-2 ===//
gsap.fromTo('main.section-2 #slide1 .text-frame', { 
    y: 200, opacity: 0
}, {
    y: 0, opacity: 1, 
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: 'main.section-2 .strength .school-info',
        start: 'top 90%'
    }
})
gsap.fromTo('main.section-2 .strength h2', { 
    y: -50, opacity: 0
}, {
    y: 0, opacity: 1, delay: 1,
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: 'main.section-2 .strength .school-info',
        start: 'top 80%'
    }
})
gsap.fromTo('main.section-2 .strength .school-info .each-info', { 
    y: 100, opacity: 0
}, {
    y: 0, opacity: 1, delay: 1.5,
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: 'main.section-2 .strength .school-info',
        start: 'top 80%'
    }
})
gsap.fromTo('main.section-2 .origin-of-love h2.topic', { 
    y: -100, opacity: 0
}, {
    y: 0, opacity: 1, 
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: 'main.section-2 .origin-of-love .inside-contents',
        start: 'top 70%'
    }
})
gsap.fromTo('main.section-2 .origin-of-love .inside-contents article h3', { 
    y: -30, opacity: 0
}, {
    y: 0, opacity: 1, delay: 1,
    duration: 1, ease: "power2.out",
    scrollTrigger:{
        trigger: 'main.section-2 .origin-of-love .inside-contents',
        start: 'top 70%'
    }
})
gsap.fromTo('main.section-2 .origin-of-love .inside-contents article p', { 
    y: -20, opacity: 0
}, {
    y: 0, opacity: 1, delay: 1.5,
    duration: 1, ease: "power2.out",
    scrollTrigger:{
        trigger: 'main.section-2 .origin-of-love .inside-contents',
        start: 'top 70%'
    }
})
gsap.fromTo('main.section-2 .origin-of-love .video-cover img', { 
    y: 100, opacity: 0
}, {
    y: 0, opacity: 1, delay: 1.6,
    duration: 1, ease: "power2.out",
    scrollTrigger:{
        trigger: 'main.section-2 .origin-of-love .inside-contents',
        start: 'top 70%'
    }
})
gsap.fromTo('main.section-2 .activity-memories h2', { 
    y: -100, opacity: 0
}, {
    y: 0, opacity: 1, 
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: 'main.section-2 .activity-memories',
        start: 'top 50%'
    }
})
gsap.fromTo('main.section-2 .activity-memories .marquee', { 
    opacity: 0
}, {
    opacity: 1, delay: 1,
    duration: 1, ease: "power2.out",
    scrollTrigger:{
        trigger: 'main.section-2 .activity-memories',
        start: 'top 50%'
    }
})
gsap.fromTo('main.section-2 #slide2 footer h2 .long-topic-circle', { 
    y: -100, opacity: 0
}, {
    y: 0, opacity: 1, 
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: 'main.section-2 #slide2 footer ',
        start: 'top 50%'
    }
})
gsap.fromTo('main.section-2 #slide2 footer article', { 
    y: -50, opacity: 0
}, {
    y: 0, opacity: 1, delay: 1,
    duration: 1, ease: "power2.out",
    scrollTrigger:{
        trigger: 'main.section-2 #slide2 footer ',
        start: 'top 50%'
    }
})
gsap.fromTo('main.section-2 #slide2 footer img', { 
    y: 80, opacity: 0
}, {
    y: 0, opacity: 1, delay: 1.6,
    duration: 1, ease: "power2.out",
    scrollTrigger:{
        trigger: 'main.section-2 #slide2 footer',
        start: 'top 50%'
    }
})
