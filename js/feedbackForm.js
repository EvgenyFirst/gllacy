"use strict";

// Форма обратной связи start

const mapFeedback = document.querySelector(".map-feedback");
const mapFormLink = document.querySelector(".map__form-link");
const validationUserName = document.querySelector( ".map-feedback__down-input-text");
const validationEmail = document.querySelector(".map-feedback__down-input-email");
const setFocusNameInput = document.querySelector(".map-feedback__down-input");
const mapFeedbackBtnClose = document.querySelector(".map-feedback__up-btn-close");

// --
// -- Проверка localSrorage на работоспособность,
// -- так как не все браузеры поддерживают работоспособность
// -- start
let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("userNameSurname");
} catch (err) {
  isStorageSupport = false;
}
// -- Проверка localSrorage на работоспособность,
// -- так как не все браузеры поддерживают работоспособность
// -- end
// --
// -- Форма обратной связи (открыть) start
mapFormLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapFeedback.classList.remove("map-feedback-hidden");

  if (storage) {
    validationUserName.value = storage;
    validationEmail.value = storage;
  } else {
    validationUserName.value = storage;
    validationEmail.value = storage;
    setFocusNameInput.focus(); // Установливает фокус при открытии модального окна в поле ввода логина
  }
});
// -- Форма обратной связи (открыть) end
// --
// -- Форма обратной связи (закрыть) start
mapFeedbackBtnClose.addEventListener("click", function () {
  mapFeedback.classList.add("map-feedback-hidden");
});
// -- Форма обратной связи (закрыть) end
// --
// -- Форма обратной связи (закрыть клавишей Esc) start
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    mapFeedback.classList.add("map-feedback-hidden");
  }
});
// -- Форма обратной связи (закрыть клавишей Esc) end
// --
// Форма обратной связи end
// --
