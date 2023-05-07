const cart = document.querySelector('.catalog__aside').querySelector('.prod-list');
const cards = document.querySelectorAll('.checkbox-card');
const radioCards = document.querySelectorAll('.checkbox-card_radio');
const typeOne = document.querySelectorAll('.form__block_other');
const typeTwo = document.querySelectorAll('.form__block_loc');

window.addEventListener('load', e => {
    cards.forEach(el => {
        if (el.classList.contains('_checked')) {
            let title = el.querySelector('.checkbox-card__title').textContent;
            let price =  el.closest('.checkbox-card').querySelector('.checkbox-card__price').textContent;
            let text =  e.target.closest('.checkbox-card').querySelector('.checkbox-card__paragraph').textContent;
            let radio;
            if (el.classList.contains('checkbox-card_radio')) {
                radio = true;
            }
            createElememt(title, price, text, radio);
        }
    })
})

document.addEventListener('click', e => {
    
    if (e.target.classList.contains('checkbox-card') || e.target.closest('.checkbox-card')) {
        if (e.target.classList.contains('checkbox-card_radio') || e.target.closest('.checkbox-card_radio')) {
            radioCards.forEach(el => {
                el.classList.remove('_checked');

                window.setTimeout(() => {
                    el.style.display = 'flex';
                }, 1);
            })
            document.querySelectorAll('.prod-list__row_radio').forEach(el => {
                el.remove();
            })
        }
        if (e.target.closest('.checkbox-card').classList.contains('choose-other')) {
            typeOne.forEach(el => {
                el.style.display = "flex";
            })
            typeTwo.forEach(el => {
                el.style.display = 'none';
            })
        }
        if (e.target.closest('.checkbox-card').classList.contains('choose-loc')) {
            typeOne.forEach(el => {
                el.style.display = "none";
            })
            typeTwo.forEach(el => {
                el.style.display = 'flex';
            })
        }

        if (e.target.closest('.checkbox-card').classList.contains('_checked')) {
            let parent = e.target.closest('.checkbox-card'); 
            parent.classList.remove('_checked');
            let menuItems = cart.querySelectorAll('.prod-list__row');
            menuItems.forEach(el => {
                if (e.target.closest('.checkbox-card').querySelector('.checkbox-card__title').innerHTML === el.querySelector('.prod-list__label').innerHTML) {
                    el.remove();
                }
            })
        } else {
            let parent = e.target.closest('.checkbox-card'); 
            parent.classList.add('_checked');

            window.setTimeout(() => {
                parent.style.display = 'none';
            }, 300);
            let title = e.target.closest('.checkbox-card').querySelector('.checkbox-card__title').textContent;
            let price =  e.target.closest('.checkbox-card').querySelector('.checkbox-card__price').textContent;
            let text =  e.target.closest('.checkbox-card').querySelector('.checkbox-card__paragraph').textContent;
            let radio;
            if (e.target.closest('.checkbox-card').classList.contains('checkbox-card_radio')) {
                radio = true;
            }
            createElememt(title, price, text, radio);
        }
    }


    if (e.target.classList.contains('rm-purchase')) {
        let parent = e.target.closest('.prod-list__row');
        cards.forEach(el => {
            if (el.querySelector('.checkbox-card__title').innerHTML === parent.querySelector('.prod-list__label').innerHTML) {
                el.style.display = 'flex';
                window.setTimeout(() => {
                    el.classList.remove('_checked');
                }, 1);
            }
        })
        e.target.closest('.prod-list__row').classList.add('hide-row');
        window.setTimeout(() => {
            e.target.closest('.prod-list__row').remove();
        }, 300);

        if (e.target.closest('.prod-list__row_radio')) {
            typeOne.forEach(el => {
                el.style.display = "none";
            })
            typeTwo.forEach(el => {
                el.style.display = 'none';
            })
        }
    }

    if (e.target.classList.contains('prod-list__info')) {
        let popups = document.querySelectorAll('.prod-list__popup');
        popups.forEach(el => {
            el.classList.remove('_open');
            el.closest('.prod-list__row').classList.remove('parent-active')
        })

        e.target.closest('.prod-list__row').querySelector('.prod-list__popup').classList.toggle('_open');
        e.target.closest('.prod-list__row').classList.toggle('parent-active');
    }

    if (!e.target.classList.contains('prod-list__info')) {
        let popups = document.querySelectorAll('.prod-list__popup');
        popups.forEach(el =>  {
            el.classList.remove('_open');
            el.closest('.prod-list__row').classList.remove('parent-active')
        })
    }
})



function createElememt(title, price, text, radio) {
    let markdown = document.createElement('div');

    cart.appendChild(markdown);
    markdown.classList.add('prod-list__row');
    markdown.classList.add('animate-row');
    if (radio === true) {
        markdown.classList.add('prod-list__row_radio');
    }
    markdown.innerHTML = `<div class="rm-purchase"> <img src="./img/icons/cart.svg" alt=""> </div> <div class="prod-list__popup"><div class="checkbox-card__head"><h3 class="checkbox-card__title">${title}</h3><span class="checkbox-card__price">${price}</span></div> <p class="checkbox-card__paragraph">${text}</p> </div> <span class="prod-list__label">${title}</span> <img class="prod-list__info" src="./img/icons/info.svg" alt=""> <div class="prod-list__price">${price}</div>`;
}