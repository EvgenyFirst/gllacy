"use strict";

// Карта на главной странице start

const mapContainer = document.querySelector(".map__container");
const mapDynamic = document.querySelector(".map__dynamic");

mapContainer.classList.add("map__container-hidden");
mapDynamic.classList.remove("map__dynamic-hidden");

// -- Первый слайд
slideOneButton.addEventListener("click", function () {
  slideTwo.classList.add("main-content__slide-hide-two");
  slideOne.classList.remove("main-content__slide-hide-one");
  slideThree.classList.add("main-content__slide-hide-three");
  sliderChangeBackground.classList.add("slider-one-main");
  sliderChangeBackground.classList.remove("slider-three");
  sliderChangeBackground.classList.remove("slider-two");
});

// Карта на главной странице end
