document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.container1');
    const navbarHeight = navbar.offsetHeight;
    document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);

    // const slides = document.querySelectorAll('.slide');
    // let currentSlide = 0;

    // function nextSlide() {
    //     slides[currentSlide].style.opacity = 0;
    //     currentSlide = (currentSlide + 1) % slides.length;
    //     slides[currentSlide].style.opacity = 1;
    // }

    // // Set the first slide to be visible
    // slides[0].style.opacity = 1;

    // // Change slide every 5 seconds
    // setInterval(nextSlide, 5000);

    // for an interesting sim on the hero section, could remove it 
    function changeWords() {
        const words = document.querySelectorAll('.word');
        words.forEach(word => {
            const translations = JSON.parse(word.getAttribute('data-translations'));
            const currentText = word.textContent;
            const randomIndex = Math.floor(Math.random() * translations.length);
            const newText = translations[randomIndex];

            // Only apply transition if the text is going to change
            if (currentText !== newText) {
                word.style.opacity = 0;
                setTimeout(() => {
                    word.textContent = newText;
                    word.style.opacity = 1;
                }, 500); // Duration matches the CSS transition time (0.5s)
            }
        });
    }

    setInterval(changeWords, 2000); // Change words every 2 seconds (2000ms)
});