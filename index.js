
const ctx = document.getElementById('myChart');

const myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Scrqskje',
            data: [],
            borderWidth: 2
        },
        {
            label: 'Jestmtry',
            data: [],
            borderWidth: 4
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
});

const widthInfo = document.getElementById("widthInfo");
const heightInfo = document.getElementById("heightInfo");

addEventListener("resize", (event) => {
    displayWindowInfo();

});

displayWindowInfo();

function displayWindowInfo() {
    widthInfo.textContent = `window inner width = ${window.innerWidth} px`;
    heightInfo.textContent = `window inner height = ${window.innerHeight} px`;
}

window.setInterval(manageChartData, 200);

console.log(myBarChart.data.labels);
myBarChart.data.labels.push('hello');
console.log(myBarChart.data.labels);

function manageChartData() {
    myBarChart.data.labels.push(createRandomString(5));

    for (const dataset of myBarChart.data.datasets) {
        dataset.data.push(Math.floor(Math.random() * 20));
    }

    if (myBarChart.data.labels.length > 50) {
        myBarChart.data.labels.shift();
        for (const dataset of myBarChart.data.datasets) {
            dataset.data.shift();
        }
    }
    myBarChart.update();

}

function createRandomString(length) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    const randomArray = new Uint8Array(length);
    crypto.getRandomValues(randomArray);
    randomArray.forEach((number) => {
        result += chars[number % chars.length];
    });
    return result;
}
