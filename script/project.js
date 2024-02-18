const slider = document.querySelector('.slider');

function activate(e) {
    const items = document.querySelectorAll('.item');
    if (e.target.classList.contains('next')) {
        slider.append(items[0]);
    } else if (e.target.classList.contains('prev')) {
        slider.prepend(items[items.length - 1]);
    }
}

document.addEventListener('click', activate, false);
