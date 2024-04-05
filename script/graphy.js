document.addEventListener('DOMContentLoaded', function() {
    const cols = 3;
    const main = document.getElementById('main');
    const photography = document.getElementById('photography');
    let parts = [];

    photography.addEventListener('mousemove', function(e) {
    const rect = photography.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});
    let images = [
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
    ];
    let current = 0;
    let playing = false;

    for (let i = 0; i < images.length; i++) {
        new Image().src = images[i];
    }

    for (let col = 0; col < cols; col++) {
        let part = document.createElement('div');
        part.className = 'part';
        let el = document.createElement('div');
        el.className = "section";
        let img = document.createElement('img');
        img.src = images[current];
        el.appendChild(img);
        part.style.setProperty('--x', -100/cols*col+'vw');
        part.appendChild(el);
        main.appendChild(part);
        parts.push(part);
    }

    let animOptions = {
        duration: 0.6,
        ease: "power2.inOut"
    };

    function go(dir) {
        if (!playing) {
            playing = true;
            current += dir;
            if (current < 0) current = images.length - 1;
            if (current >= images.length) current = 0;

            function down(part, next) {
                part.prepend(next);
                gsap.to(part, { duration: 0, y: -window.innerHeight });
                gsap.to(part, { ...animOptions, y: 0 }).then(function () {
                    part.children[1].remove();
                    playing = false;
                });
            }

            function up(part, next) {
                part.appendChild(next);
                gsap.to(part, { ...animOptions, y: window.innerHeight }).then(function () {
                    part.children[0].remove();
                    gsap.to(part, { duration: 0, y: 0 });
                    playing = false;
                });
            }

            for (let p = 0; p < parts.length; p++) {
                let part = parts[p];
                let next = document.createElement('div');
                next.className = 'section';
                let img = document.createElement('img');
                img.src = images[current];
                next.appendChild(img);

                if ((p - Math.max(0, dir)) % 2) {
                    down(part, next);
                } else {
                    up(part, next);
                }
            }
        }
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            go(1);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            go(-1);
        }
        
    });
});

$(document).ready(function() {
    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        var windowHeight = $(this).height();
        var docHeight = $(document).height();
        var scrollPercent = (scrollTop) / (docHeight - windowHeight) * 100;

        $('.section img').removeClass('active');

        if (scrollPercent < 33) {
        $('.left-img img').addClass('active');
        } else if (scrollPercent > 66) {
        $('.right-img img').addClass('active');
        } else {
        $('.center-img img').addClass('active');
        }
    });
});
