const imgs = document.querySelectorAll('.img-card img');

let i = 1;

setInterval(() => {
    i++

    const img = document.querySelector('.img-card .change');

    // remove
    img.classList.remove('change');

    // if condition
    if (i > imgs.length) {
        imgs[0].classList.add('change');
        i = 1;
    } else {
        // nextElementSibling
        img.nextElementSibling.classList.add('change');
    }
}, 4000);