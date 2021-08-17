if( window.innerWidth < 960 ) {
  const $header = document.querySelector('header');
  const $btnSearch = document.querySelector('.search-form__button-container');
  const $btnClose = document.getElementsByClassName('close')[1];
  const $inputSearch = document.querySelector('.search-form__input');

  $btnSearch.addEventListener('click', function() {
    $header.classList.add('mobile');
    $inputSearch.placeholder='Search';
  });


// Сlosing the window
const closeModal = () => {
  $header.classList.remove('mobile');
};

$btnClose.addEventListener('click', closeModal);
}
