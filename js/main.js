 var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

    keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  });

  ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map-id", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [50.08723267092224, 14.431225300654372],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16
        });
    }

 var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

    keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  });