const preventDefaultLinks = () => {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href="#"]');

        if (!link) return;
        e.preventDefault();
    });
};

const setSvgPathLength = () => {
    const paths = document.querySelectorAll('.svgAni path');

    paths.forEach((path) => {
        const totalLength = path.getTotalLength();

        path.style.strokeDasharray = totalLength;
    });
};

const menuOpen = () => {
    const openButton = document.querySelector('.menuOpen button.open');
    const menuWrap = document.querySelector('.menuOpen .menuWrap');
    const closeButtons = document.querySelectorAll('.menuOpen .menuWrap .close');

    if (!openButton || !menuWrap) return;

    openButton.addEventListener('click', () => {
        menuWrap.classList.add('on');
    });

    closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            menuWrap.classList.remove('on');
        });
    });
};

const scrollAnimation = () => {
    const animations = document.querySelectorAll('.animate');

    const animate = () => {
        const windowTop = window.scrollY;
        const windowBottom = windowTop + window.innerHeight;

        animations.forEach((item) => {
            const animationName = item.dataset.animate;
            const offset = Number(item.dataset.offset) || 0;
            const originalTop = item.getBoundingClientRect().top + windowTop;
            const itemTop = originalTop + offset;
            const itemBottom = originalTop + item.offsetHeight - offset;

            if (!animationName) return;

            if (itemBottom >= windowTop && itemTop <= windowBottom) {
                item.style.visibility = 'visible';
                item.classList.add(animationName, 'animated');
            } else {
                item.style.visibility = 'hidden';
                item.classList.remove(animationName, 'animated');
            }
        });
    };

    window.addEventListener('scroll', animate);
    window.addEventListener('resize', animate);
    animate();
};

const bgColor = () => {
    const changeColor = () => {
        const scrollTop = window.scrollY;

        if (scrollTop > 1400 && scrollTop <= 2700) {
            document.body.classList.add('on');
        } else {
            document.body.classList.remove('on');
        }
    };

    window.addEventListener('scroll', changeColor);
    window.addEventListener('resize', changeColor);
    changeColor();
};

(() => {
    preventDefaultLinks();
    setSvgPathLength();
    menuOpen();
    scrollAnimation();
    bgColor();
})();
