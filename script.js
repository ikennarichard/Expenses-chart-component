
//bar charts
let charts = [...document.querySelectorAll('.spending_ > span > span')];


async function getData() {

    const data = await fetch('./data.json');

    const res = await data.json();
    console.log(res[0].day)

    charts.forEach((chart, i) => {
        if (chart.id === res[i].day) 
        chart.style.height = `${res[i].amount * 2}px`;

        if(chart.id === 'wed') {
            chart.style.backgroundColor = 'var(--cyan)'
        }
})
} 

getData();

