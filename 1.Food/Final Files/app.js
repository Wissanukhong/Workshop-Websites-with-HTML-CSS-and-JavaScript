const icons = document.querySelectorAll('.section-1-icons i');

// variable
let i = 1;

setInterval(() => {
    // Pluss the value of i immediately
    i++

    // queryselector class
    const icon = document.querySelector('.section-1-icons .change');

    // remove class change from icon
    icon.classList.remove('change');

    // if else condition
    if (i > icons.length) {
        icons[0].classList.add('change');
        i = 1;
    } else {
        // Add change to nextElementSibling
        icon.nextElementSibling.classList.add('change');
    }

}, 4000);