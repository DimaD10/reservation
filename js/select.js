const selectHeaders = document.getElementsByClassName('select__header');
const selectItems = document.getElementsByClassName('select__el');

function selectToggle() {
  const activeSelects = document.getElementsByClassName('is-active');
  Array.from(activeSelects).forEach(el => {
    el.classList.remove('is-active');
    el.closest('.form__block').classList.remove('box-active');
  });

  const select = this.closest('.select');
  select.classList.toggle('is-active');

  if (select.closest('.form__block')) {
    select.closest('.form__block').classList.add('box-active');
  }
}

function selectChoose() {
  const text = this.innerHTML;
  const select = this.closest('.select');
  const currentText = select.querySelector('.select__current');
  currentText.innerHTML = text;
  select.classList.remove('is-active');

  const parent = this.closest('.select');
  const current = parent.querySelector('.select__current');
  if (select.closest('.form__block')) {
    select.closest('.form__block').classList.remove('box-active');
  }
  
  Array.from(parent.querySelectorAll('.select__el')).forEach(el => {
    el.classList.remove('_hide');

    if (current.innerHTML === el.innerHTML) {
      el.classList.add('_hide');
    }
  });
}

document.addEventListener('click', e => {
  if (!e.target.closest('.select') && !e.target.closest('.is-active')) {
    const activeSelects = document.getElementsByClassName('is-active');
    Array.from(activeSelects).forEach(el => {
      el.classList.remove('is-active');
      el.closest('.form__block').classList.remove('box-active');
    });

    Array.from(document.getElementsByClassName('select')).forEach(el => {
      el.classList.remove('is-active');
    });

    Array.from(document.getElementsByClassName('form__block')).forEach(el => {
      el.classList.remove('box-active');
    });
  }
});

Array.from(selectHeaders).forEach(header => {
  header.addEventListener('click', selectToggle);
});

Array.from(selectItems).forEach(item => {
  item.addEventListener('click', selectChoose);
});

Array.from(document.getElementsByClassName('select')).forEach(select => {
  const current = select.querySelector('.select__current');

  Array.from(select.querySelectorAll('.select__el')).forEach(el => {
    if (current.innerHTML === el.innerHTML) {
      el.classList.add('_hide');
    }
  });
});
