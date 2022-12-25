
//bar charts
let charts = [...document.querySelectorAll('.spending_ > span > span')];

let currentDay = new Date().getDay();


async function getData() {

    const data = await fetch('./data.json');

    const res = await data.json();


    charts.forEach((chart, i) => {

        if (chart.id === res[i].day) 
        chart.style.height = `${res[i].amount * 2}px`;


        charts[currentDay].style.backgroundColor = 'var(--cyan)';
        
        charts[currentDay].addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'var(--light-cyan)';
        })
})
} 

getData();

