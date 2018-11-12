const panel = document.querySelectorAll('.panel');

const onToggle = (e) => {
    e.target.classList.toggle('open');
};

const toggleActive = (e) => {
    if (e.propertyName.includes('flex')) {
        e.target.classList.toggle('open-active');
    }
};

panel.forEach(item => item.addEventListener('click', onToggle));
panel.forEach(item => item.addEventListener('transitionend', toggleActive));





    