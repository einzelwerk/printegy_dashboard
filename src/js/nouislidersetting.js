var connectSlider = document.getElementById('slider-connect');


noUiSlider.create(connectSlider, {
    start: 20,
    tooltips: true,
    connect: [true, false],
    range: {
        'min': 0,
        'max': 200
    },
    format: wNumb({decimals: 0})
});