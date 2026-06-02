const reveals = document.querySelectorAll('.reveal');

function reveal() {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal();

window.addEventListener('scroll', () => {

    const nav = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10,10,10,.9)';
    } else {
        nav.style.background = 'rgba(15,15,15,.75)';
    }

});