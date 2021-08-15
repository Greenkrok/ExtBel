/*jshint esversion: 6 */

// Переменные
const $btnProfile = document.getElementsByClassName('profile__container')[0];
const $modal = document.getElementsByClassName('modal')[0];
const $btnClose = document.getElementsByClassName('close')[0];
const $popapInputs = document.querySelectorAll('.popap__input');
const $btnLog = document.getElementsByClassName('log')[0];
const $btnSign = document.getElementsByClassName('sign')[0];

// Открытие окна
const openModal = () => $modal.classList.add('open');

$btnProfile.addEventListener('click', openModal);

// Закрытие окна
const closeModal = () => {
    
    // Обнуление полей для ввода
    for( let input of $popapInputs) {
        input.value = '';
    }
    
    $modal.classList.remove('open');
};

$btnClose.addEventListener('click', closeModal);


// Валидация формы
const submit = () => {
    const $form = document.querySelector('.popap__form');

    const errors = $form.querySelectorAll('.error');

    for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
    }

    for (let i = 0; i < $popapInputs.length; i++) {
        if (!$popapInputs[i].value) {
        const error = document.createElement('div');
        error.classList.add('error');
        error.innerHTML = 'Please fill in the field';
        $form[i].parentElement.insertBefore(error, $popapInputs[i]);
        }
    }
};

$btnLog.addEventListener('click', submit);
$btnSign.addEventListener('click', submit);
