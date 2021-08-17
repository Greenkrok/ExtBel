// Variables
const $btnProfile = document.querySelector('.profile__container');
const $modal = document.querySelector('.modal');
const $btnClose = document.querySelector('.close');
const $popapInputs = document.querySelectorAll('.popap__input');
const $btnLog = document.querySelector('.log');
const $btnSign = document.querySelector('.sign');

// Opening the window
const openModal = () => $modal.classList.add('open');

$btnProfile.addEventListener('click', openModal);

// Сlosing the window
const closeModal = () => {
    
    // Resetting input fields
    for( let input of $popapInputs) {
        input.value = '';
    }
    
    $modal.classList.remove('open');
};

$btnClose.addEventListener('click', closeModal);


// Form validation
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
