const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const success = document.querySelector('#success');
const errorNodes = document.querySelectorAll('.error');

function validateForm() {
  let errorFlag = false;
  clearErrors();

  if (nameInput.value.length < 1) {
    errorNodes[0].innerHTML = 'Please enter your name';
    nameInput.classList.add('error-border');
    errorFlag = true;
  }
  if (!emailIsValid(email.value)) {
    errorNodes[1].innerHTML = 'invalid email adress';
    email.classList.add('error-border');
    errorFlag = true;
  }
  if (message.value.length < 1) {
    errorNodes[2].innerHTML = 'Please enter your message';
    message.classList.add('error-border');
    errorFlag = true;
  }
  onsubmit = () => {
    if (!errorFlag) {
      success.innerHTML = 'Your message has been sent';
    }
  };
}

function clearErrors() {
  errorNodes.forEach((node) => {
    node.innerHTML = '';
  });
  nameInput.classList.remove('error-border');
  email.classList.remove('error-border');
  message.classList.remove('error-border');
  success.innerHTML = '';
}

function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}
