const chartContainer = document.querySelector(".charts");

let fetchedData;

fetch("data.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data)
        fetchedData = data;
        createChart(data);
    })

function createChart(data) {
    data.forEach(dataElement => {
        const chart = document.createElement("div");
        chart.className = "chart";
        chartContainer.appendChild(chart);

        const chartRect = document.createElement("div");
        chartRect.className = "chart-rect";

        // chart rect height
        let heightPercentage = (dataElement.amount / 100) * 478.33;
        chartRect.style.height = `${heightPercentage / 1.8}px`;
        chart.appendChild(chartRect);

        const chartValue = document.createElement("div");
        chartValue.className = "chart-value";
        chartValue.textContent = dataElement.amount;
        chartRect.appendChild(chartValue);

        const chartDay = document.createElement("div");
        chartDay.className = "chart-day";
        chartDay.textContent = dataElement.day;
        chart.appendChild(chartDay);
    });
}