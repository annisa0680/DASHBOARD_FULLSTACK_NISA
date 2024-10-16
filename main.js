
const growthCtx = document.getElementById('growthChart').getContext('2d');
new Chart(growthCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
            label: '2021',
            data: [300, 450, 350, 470, 290, 400, 550, 350],
            backgroundColor: '#8E3E63'
        }, {
            label: '2022',
            data: [400, 500, 450, 570, 500, 450, 650, 570],
            backgroundColor: '#D2649A'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const analyticsCtx = document.getElementById('analyticsChart').getContext('2d');
new Chart(analyticsCtx, {
    type: 'doughnut',
    data: {
        labels: ['Sales', 'Distribute', 'Returns'],
        datasets: [{
            data: [55.5, 33.5, 11],
            backgroundColor: ['#8E3E63', '#D2649A', '#640D5F']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        }
    }
});


document.querySelectorAll('.kpi-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});
