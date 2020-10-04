document.getElementById('click').addEventListener('click', () => {
    gsap.to('.intro_1 p', 1, {
        y: -280,
        opacity: 0
    })

    gsap.to('.intro_1 a', 1, {
        y: -180,
        opacity: 0
    })
    gsap.to('.intro_1', 1, {
        delay: .7,
        y: innerHeight * -1,
    })
    gsap.to('.intro_2', 1, {
        delay: 1,
        y: innerHeight * -1,
    })
    gsap.to('.intro', 1, {
        delay: 1.3,
        y: innerHeight * -1,
    })
    gsap.from('.details_part p', 1, {
        delay: 1.3,
        y: 280,
        opacity: 0
    })
    gsap.from('.details_part h1', 1, {
        delay: 1.4,
        y: 230,
        opacity: 0
    })
    gsap.from('.details_part span', 1, {
        delay: 1.5,
        y: 200,
        opacity: 0
    })
    gsap.from('.details_part a', 1, {
        delay: 1.6,
        y: 200,
        opacity: 0
    })
    gsap.from('.nav', 1, {
        delay: 1.444,
        x: 200,
        opacity: 0
    })
    gsap.timeline({
        scrollTrigger: {
            trigger: '.wrapper',
            start: 'top',
            end: '+=5000',
            scrub: true,
            pin: true,
            pinSpacing: true,
            ease: 'back',

        }
    }).to('.six', 5, {
        x: -2000,
        y: -2000,
        width: '40%',
        height: '300vh',
        opacity: 0
    })
        .to('.five', 5, {
            x: 2000,
            y: 2000,
            width: '200%',
            height: '200vh',
            opacity: 0
        })
        .to('.forth', 5, {
            x: -2000,
            y: -2000,
            width: '200%',
            height: '200vh',
            opacity: 0
        })
        .to('.three', 5, {
            x: 2000,
            y: 2000,
            width: '200%',
            height: '200vh',
            opacity: 0
        })
        .to('.two', 5, {
            x: -2000,
            y: -2000,
            width: '200%',
            height: '200vh',
            opacity: 0
        })
        .to('.details_part a::before', 1, {
            opacity: 1
        })

})

gsap.from('.log_in', 1, {
    delay: 12,
    y: innerWidth * -1
})

document.getElementById('cross').addEventListener('click', () => {
    gsap.to('.log_in', 1, {
        y: innerWidth * 1
    })
})

let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('a');

window.addEventListener('mousemove', cursor);
function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}
navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link_grow");
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link_grow");
    });
})