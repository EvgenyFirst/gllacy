"use strict";

// Слайдер на главной странице start

const slideOneButton = document.querySelector(".main-content__option-radio-button-one");
const slideTwoButton = document.querySelector(".main-content__option-radio-button-two");
const slideThreeButton = document.querySelector(".main-content__option-radio-button-three");

const slideOne = document.querySelector(".main-content__option-slide-one");
const slideTwo = document.querySelector(".main-content__option-slide-two");
const slideThree = document.querySelector(".main-content__option-slide-three");

const sliderChangeBackground = document.querySelector(".slider");

// -- Первый слайд
slideOneButton.addEventListener("click", function () {
  slideTwo.classList.add("main-content__slide-hide-two");
  slideOne.classList.remove("main-content__slide-hide-one");
  slideThree.classList.add("main-content__slide-hide-three");
  sliderChangeBackground.classList.add("slider-one-main");
  sliderChangeBackground.classList.remove("slider-three");
  sliderChangeBackground.classList.remove("slider-two");
});
// -- Первый слайд
// --
// -- Второй слайд
slideTwoButton.addEventListener("click", function () {
  slideOne.classList.add("main-content__slide-hide-one");
  slideTwo.classList.remove("main-content__slide-hide-two");
  slideThree.classList.add("main-content__slide-hide-three");
  sliderChangeBackground.classList.remove("slider-one-main");
  sliderChangeBackground.classList.remove("slider-three");
  sliderChangeBackground.classList.add("slider-two");
});
// -- Второй слайд
// --
// -- Третий слайд
slideThreeButton.addEventListener("click", function () {
  slideTwo.classList.add("main-content__slide-hide-two");
  slideOne.classList.add("main-content__slide-hide-one");
  slideThree.classList.remove("main-content__slide-hide-three");
  sliderChangeBackground.classList.remove("slider-one-main");
  sliderChangeBackground.classList.add("slider-three");
  sliderChangeBackground.classList.remove("slider-two");
});
// -- Третий слайд
// Слайдер на главной странице end
