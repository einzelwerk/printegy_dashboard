const orderCanvas = document.getElementById("orders-chart");
if (orderCanvas) {
    const orderChart = new Chart(orderCanvas, {
        type: 'line',
        data: {
            labels: ["Monday", "Tuesday", "Wednesday"],
            datasets: [{
                label: 'Created',
                data: [3, 21, 25],
                fill: false,
                borderColor: '#E0E1E6',
                backgroundColor: '#fff',
                pointBorderColor: '#919399',
                borderWidth: 1,
                tension: 0.5,
                radius: 6,
            }, {
                label: 'Pending',
                data: [6, 26, 28],
                fill: false,
                borderColor: '#DBAF3E',
                backgroundColor: '#fff',
                pointBorderColor: '#919399',
                borderWidth: 1,
                tension: 0.5,
                radius: 6,
            }, {
                label: 'Cancelled',
                data: [1, 11, 19],
                fill: false,
                borderColor: '#ED0A34',
                backgroundColor: '#fff',
                pointBorderColor: '#919399',
                borderWidth: 1,
                tension: 0.5,
                radius: 6,
            }, {
                label: 'Refunded',
                data: [2, 25, 34],
                fill: false,
                borderColor: '#6BBFBE',
                backgroundColor: '#fff',
                pointBorderColor: '#919399',
                borderWidth: 1,
                tension: 0.5,
                radius: 6,
            }, {
                label: 'Paid',
                data: [1, 7, 12],
                fill: false,
                borderColor: '#1FB46C',
                backgroundColor: '#fff',
                pointBorderColor: '#919399',
                borderWidth: 1,
                tension: 0.5,
                radius: 6,
            }, {
                label: 'Partial',
                data: [0, 3, 10],
                fill: false,
                borderColor: '#BDDFF7',
                backgroundColor: '#fff',
                pointBorderColor: '#919399',
                borderWidth: 1,
                tension: 0.5,
                radius: 6,
            }, {
                label: '0E86F4',
                data: [34, 22, 11],
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

    document.addEventListener('click', event => {
        if ([...event.target.classList].includes('filter-chart-order')) {
            document.querySelector('.filter-chart-order.active').classList.remove('active');
            event.target.classList.add('active');

            switch (event.target.dataset.config) {
                case '1':
                    orderChart.data.labels = [2,4,6,8,10,12,14,16,18,20,22,24];
                    orderChart.data.datasets[0].data = [1,2,3,4,5,6,7,8,9,10,11,12];
                    orderChart.data.datasets[1].data = [5,6,7,4,5,3,2,56,33,33,33,55];
                    break;
                case '3':
                    orderChart.data.labels = ["Monday", "Tuesday", "Wednesday"];
                    orderChart.data.datasets[0].data = [3, 21, 25];
                    break;
                case '7':
                    orderChart.data.labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                    orderChart.data.datasets[0].data = [3,21,25,26,67,78,89];
                    break;
                case '30':
                    orderChart.data.labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                    orderChart.data.datasets[0].data = [3,21,25,26,67,78,89];
                    break;
                case '90':
                    orderChart.data.labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                    orderChart.data.datasets[0].data = [3,21,25,26,67,78,89];
                    break;
                case '365':
                    orderChart.data.labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                    orderChart.data.datasets[0].data = [3,21,25,26,67,78,89];
                    break;

            }

            orderChart.update();
        }
    })
}

const refundsCanvas = document.getElementById("refunds-chart");
if (refundsCanvas) {
    const refundsChart = new Chart(refundsCanvas, {
        type: 'line',
        data: {
            labels: ["15 dec", "16 dec", "17 dec", "18 dec", "19 dec", "20 dec", "21 dec", "22 dec", "23 dec", "24 dec", "25 dec", "26 dec", "27 dec", "28 dec", "29 dec", "30 dec", "31 dec"],
            datasets: [{
                label: 'Revenue',
                data: [50, 65, 43, 40, 100, 98, 90, 85, 45, 30, 12, 4, 8, 12, 15, 20, 30, 1],
                fill: false,
                borderColor: '#E0E1E6',
                backgroundColor: '#fff',
                pointBorderColor: '#919399',
                borderWidth: 1,
                radius: 6
            },  {
                label: 'Refunds',
                data: [28, 21, 80, 90, 100, 15, 10, 5, 0, 85, 99, 100, 50, 85, 15, 20, 12, 9],
                fill: false,
                borderColor: '#DBAF3E',
                backgroundColor: '#fff',
                pointBorderColor: '#919399',
                borderWidth: 1,
                radius: 6
            }]
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

    document.addEventListener('click', event => {
        if ([...event.target.classList].includes('filter-chart-refunds')) {
            document.querySelector('.filter-chart-refunds.active').classList.remove('active');
            event.target.classList.add('active');

            switch (event.target.dataset.config) {
                case '7':
                    refundsChart.data.labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                    refundsChart.data.datasets[0].data = [3,21,25,26,67,78,89];
                    break;
                case '30':
                    refundsChart.data.labels = ["15 dec", "16 dec", "17 dec", "18 dec", "19 dec", "20 dec", "21 dec", "22 dec", "23 dec", "24 dec", "25 dec", "26 dec", "27 dec", "28 dec", "29 dec", "30 dec", "31 dec"];
                    refundsChart.data.datasets[0].data = [3,21,25,26,67,78,89];
                    break;
                case '365':
                    refundsChart.data.labels = ["Jan", "Fev", "Marth", "April", "May", "June", "July", "Aug", "Sep", "Dec"];
                    refundsChart.data.datasets[0].data = [3,21,25,26,67,78,89];
                    break;

            }

            refundsChart.update();
        }
    })
}