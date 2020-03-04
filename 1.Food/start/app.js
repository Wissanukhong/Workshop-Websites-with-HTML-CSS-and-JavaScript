const icons = document.querySelectorAll('.section-1-icons i');

// create variable
let i = 1;

setInterval(() => {
    // interation loop
    i++

    // query selector 
    const icon = document.querySelector('.section-1-icons .change');

    // Removed classList
    icon.classList.remove('change');

    // condition
    if (i > icons.length) {
        icons[0].classList.add('change');
        i = 1;
    } else {
        // nextElementSibbling
        icon.nextElementSibling.classList.add('change');
    }
}, 4000);