var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["15 dec", "16 dec", "17 dec", "18 dec", "19 dec", "20 dec", "21 dec", "22 dec", "23 dec", "24 dec", "25 dec", "26 dec", "27 dec", "28 dec", "29 dec", "30 dec", "31 dec"],
        datasets: [{
            label: 'Created',
            data: [3, 21, 25, 18, 2, 20, 18, 15, 0, 15, 21, 26, 4, 5, 15, 20, 30, 1],
            fill: false,
            borderColor: '#E0E1E6',
            backgroundColor: '#fff',
            pointBorderColor: '#919399',
            borderWidth: 1,
            tension: 0.5,
            radius: 6,
        }],
    },
    options: {
        responsive: true,
        aspectRatio: 4,
        plugins: {
            legend: {
                display: false,
                position: 'bottom',
                labels: {
                    fontColor: '#000',
                    fontSize: 13,
                    usePointStyle: true
                },
            },
            scales: {
                yAxes: [{
                    ticks: {

                        stepSize: 25
                    }
                }]
            }
        },
    },

});

var ctx2 = document.getElementById("myChart2").getContext('2d');

var myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["15 dec", "16 dec", "17 dec", "18 dec", "19 dec", "20 dec", "21 dec", "22 dec", "23 dec", "24 dec", "25 dec", "26 dec", "27 dec", "28 dec", "29 dec", "30 dec", "31 dec"],
        datasets: [{
                label: 'Series 1',
                data: [50, 65, 43, 40, 100, 98, 90, 85, 45, 30, 12, 4, 8, 12, 15, 20, 30, 1],
                fill: false,
                borderColor: 'rgba(14, 125, 226, 0.4)',
                backgroundColor: '#fff',
                pointBorderColor: '#0E7DE2',
                borderWidth: 1,
                radius: 6
            },
            {
                label: 'Series 2',
                data: [28, 21, 80, 90, 100, 15, 10, 5, 0, 85, 99, 100, 50, 85, 15, 20, 12, 9],
                fill: false,
                borderColor: 'rgba(107, 191, 190, 0.4)',
                backgroundColor: '#fff',
                pointBorderColor: '#6BBFBE',
                borderWidth: 1,
                radius: 6
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    max: 100,
                    min: 0,
                    stepSize: 25
                }
            }]
        },
        plugins: {
            legend: {
                display: false,
                position: 'bottom',
                labels: {
                    fontColor: '#000',
                    fontSize: 13,
                    usePointStyle: true,
                    boxWidth: 12,
                },
            },


        },
    }
});