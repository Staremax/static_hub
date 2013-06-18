  ymaps.ready(init);

        function init () {

            var myMap = new ymaps.Map("map", {

                    center: [53.336314, 83.778545],

                    zoom: 16
                }),

                myPlacemark = new ymaps.Placemark([53.336390, 83.778310], {

                    iconContent: "НПК 'Стамакс'"

                }, {

                    preset: 'twirl#greyStretchyIcon'

                });



                myMap.geoObjects

                .add(myPlacemark);


        }
