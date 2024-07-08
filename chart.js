var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['janvier', 'fevrier', 'mars', 'avriel', 'main', 'juin', 'juillet', 'aout', 'septembre', 'octombre', 'novembre'],
        datasets: [
            {
                label: 'les données',
                data: [10, 3, 8, 5, 7, 3, 14, 5, 12, 7, 4],
                backgroundColor: [
                    'rgba(0, 128, 0, 0.9)',
                    'rgba(0, 128, 0, 0.9)',
                    'rgba(0, 128, 0, 0.9)',
                    'rgba(0, 128, 0, 0.9)',
                    'rgba(0, 128, 0, 0.9)',
                    'rgba(0, 128, 0, 0.9)',
                    'rgba(0, 128, 0, 0.9)',
                    'rgba(0, 128, 0, 0.9)',
                    'rgba(0, 128, 0, 0.9)',
                    'rgba(0, 128, 0, 0.9)',
                    'rgba(0, 128, 0, 0.9)'
                ],
                borderWidth: 1
            },
            {
                label: 'My Dataset 2',
                data: [7, 5, 10, 7, 9, 4, 17, 3, 15, 8, 2],
                backgroundColor: [
                    'rgba(255, 165, 0, 1)',
                    'rgba(255, 165, 0, 1)',
                    'rgba(255, 165, 0, 1)',
                    'rgba(255, 165, 0, 1)',
                    'rgba(255, 165, 0, 1)',
                    'rgba(255, 165, 0, 1)',
                    'rgba(255, 165, 0, 1)',
                    'rgba(255, 165, 0, 1)',
                    'rgba(255, 165, 0, 1)',
                    'rgba(255, 165, 0, 1)',
                    'rgba(255, 165, 0, 1)'
                ],
              
            }
        ]
    },
    options: {
        responsive : true ,
        barThickness: 8, 
        maxBarThickness: 8,
    }
});
