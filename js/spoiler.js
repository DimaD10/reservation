document.querySelectorAll('.catalog-select__title')
document.addEventListener('click', e => {
    if (e.target.classList.contains('catalog-select__title')) {
        e.target.closest('.catalog-select').classList.toggle('_opened');
    }
})