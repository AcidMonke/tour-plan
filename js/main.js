 var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
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