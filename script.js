
//bar charts
let charts = [...document.querySelectorAll('.spending_ > span > span')];


async function getData() {

    const data = await fetch('./data.json');

    const res = await data.json();

    console.log(res)

    charts.forEach((chart, i) => {

        if (chart.id === res[i].day) 
        chart.style.height = `${res[i].amount * 2}px`;
})
} 

getData();

