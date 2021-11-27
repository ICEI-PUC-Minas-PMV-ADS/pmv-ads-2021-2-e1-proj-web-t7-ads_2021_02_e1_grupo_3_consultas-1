import {redirectIfRoleIsNot} from '../helpers/redirect.js';

redirectIfRoleIsNot('clinic');

function newDataset(n, min, max) {
    let dataset = new Array(n)
    min = Math.ceil(min)
    max = Math.floor(max)
    for (let i = 0; i < n; i++) {
        dataset[i] = Math.floor(Math.random() * (max - min)) + min;

    }
    return dataset;
}

function plot01() {
    const labels = ['Dr.01', 'Dr.02', 'Dr.03', 'Dr.04', 'Outros'];
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Consultas',
                data: newDataset(5, 10, 30),
                borderColor: '#489082',
                backgroundColor: '#48908269',
            },
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {

            indexAxis: 'y',
            elements: {
                bar: {
                    borderWidth: 2,
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: false,

                }
            }
        },
    };

    const myChart3 = new Chart(
        document.getElementById('plot-01').getContext('2d'),
        config
    );


}

function plot02() {
    const data = {
        labels: ['Unimed', 'Amil', 'Bradesco', 'Hapvida', 'SulAmerica'],
        datasets: [
            {
                label: 'Consultas',
                data: newDataset(5, 2, 100),
                backgroundColor: [
                    '#009367',
                    '#258656',
                    '#706B34',
                    '#BA5011',
                    '#DF4300'
                ],
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                legend: {
                    position: 'bottom',
                },
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };

    const myChart3 = new Chart(
        document.getElementById('plot-02').getContext('2d'),
        config
    );
}

function plot03() {
    const labels3 = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];

    const data3 = {
        labels: labels3,
        datasets: [{
            label: 'Pacientes',
            backgroundColor: 'rgb(72, 144, 130)',
            borderColor: 'rgb(72, 144, 130)',
            data: newDataset(12, 50, 100),
            datasets: [{
                animations: {
                    y: {
                        duration: 2000,
                        delay: 1000
                    }
                }
            }]
        }]
    };

    const config3 = {
        type: 'line',
        data: data3,
        options: {
            animations: {
                y: {
                    easing: 'easeInOutElastic',
                    from: (ctx) => {
                        if (ctx.type === 'data') {
                            if (ctx.mode === 'default' && !ctx.dropped) {
                                ctx.dropped = true;
                                return 0;
                            }
                        }
                    }
                },
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'none'
                }
            }
        }
    };
    const myChart3 = new Chart(
        document.getElementById('plot-03'),
        config3
    );
}

plot03();
plot02();
plot01();

