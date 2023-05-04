const cart = document.querySelector('.catalog__aside').querySelector('.prod-list');
const cards = document.querySelectorAll('.checkbox-card');

window.addEventListener('load', e => {
    cards.forEach(el => {
        if (el.classList.contains('_checked')) {
            let title = el.querySelector('.checkbox-card__title').textContent;
            let price =  el.closest('.checkbox-card').querySelector('.checkbox-card__price').textContent;
            createElememt(title, price);
        }
    })
})

document.addEventListener('click', e => {
    
    if (e.target.classList.contains('checkbox-card') || e.target.closest('.checkbox-card')) {

        if (e.target.closest('.checkbox-card').classList.contains('_checked')) {
            e.target.closest('.checkbox-card').classList.remove('_checked');
            let menuItems = cart.querySelectorAll('.prod-list__row');
            menuItems.forEach(el => {
                if (e.target.closest('.checkbox-card').querySelector('.checkbox-card__title').innerHTML === el.querySelector('.prod-list__label').innerHTML) {
                    el.remove();
                }
            })
        } else {
            e.target.closest('.checkbox-card').classList.add('_checked');
            let title = e.target.closest('.checkbox-card').querySelector('.checkbox-card__title').textContent;
            let price =  e.target.closest('.checkbox-card').querySelector('.checkbox-card__price').textContent;
            createElememt(title, price);
        }
    }


    if (e.target.classList.contains('rm-purchase')) {
        let parent = e.target.closest('.prod-list__row');
        cards.forEach(el => {
            if (el.querySelector('.checkbox-card__title').innerHTML === parent.querySelector('.prod-list__label').innerHTML) {
                el.classList.remove('_checked');
            }
        })
        
        e.target.closest('.prod-list__row').remove();
    }
})



function createElememt(title, price) {
    let markdown = document.createElement('div');

    cart.appendChild(markdown);
    markdown.classList.add('prod-list__row');
    markdown.innerHTML = `<div class="rm-purchase"><img src="./img/icons/cross.png" alt=""></div> <span class="prod-list__label">${title}</span> <div class="prod-list__price">${price}</div>`;

}