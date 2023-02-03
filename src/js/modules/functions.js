function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
        let className = support ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

const clickMenu = () => {
    const btn = document.querySelector('.main-nav__button');
    const menu = document.querySelector('.main-nav');

    const toggleMenu = (evt) => {
        if (menu.classList.contains('main-nav--opened')) {
            menu.classList.remove('main-nav--opened');
            menu.classList.add('main-nav--closed');
        } else {
            menu.classList.remove('main-nav--closed');
            menu.classList.add('main-nav--opened');
        }
    }

    btn.addEventListener('click', toggleMenu);
};

export { isWebp, clickMenu }