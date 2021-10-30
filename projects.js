window.addEventListener('resize', function(event) {
    if (this.innerWidth > 760) {
        const nav = document.querySelector('.nav-links');
        nav.classList.remove('nav-active');
        nav.classList.remove('nav-disabled');
        const smallAbout = document.querySelector('.small-about');
        const largeAbout = document.querySelector('.large-about');
        smallAbout.classList.add('hidden');
        largeAbout.classList.remove('hidden');
    }
    if (this.innerWidth <= 760) {
        const nav = document.querySelector('.nav-links');
        nav.classList.add('nav-disabled');
        nav.classList.remove('nav-active');
        const smallAbout = document.querySelector('.small-about');
        const largeAbout = document.querySelector('.large-about');
        smallAbout.classList.remove('hidden');
        largeAbout.classList.add('hidden');
    }
});

window.addEventListener('load', function(event) {
    if (this.innerWidth > 760) {
        const nav = document.querySelector('.nav-links');
        nav.classList.remove('nav-active');
        nav.classList.remove('nav-disabled');
        const smallAbout = document.querySelector('.small-about');
        const largeAbout = document.querySelector('.large-about');
        smallAbout.classList.add('hidden');
        largeAbout.classList.remove('hidden');
    }
    if (this.innerWidth <= 760) {
        const nav = document.querySelector('.nav-links');
        nav.classList.add('nav-disabled');
        nav.classList.remove('nav-active');
        const smallAbout = document.querySelector('.small-about');
        const largeAbout = document.querySelector('.large-about');
        smallAbout.classList.remove('hidden');
        largeAbout.classList.add('hidden');
    }
});