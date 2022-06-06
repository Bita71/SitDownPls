ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
    center: [55.76271323445717, 37.619920036611255],
    zoom: 14,
    controls: [],
  });

  var suggestView1 = new ymaps.SuggestView('suggest');

  var myPlacemark = new ymaps.Placemark(
    [55.76953456898229, 37.63998549999998],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "../img/sprite.svg#elephant",
      iconImageSize: [32, 21],
    }
  );

  myMap.geoObjects.add(myPlacemark);
});
