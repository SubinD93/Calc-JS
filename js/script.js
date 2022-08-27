let tabLeft = document.querySelector('.tab-left');
let tabRight = document.querySelector('.tab-right');
let blocksBlock = document.getElementById('blocks-block');
let pagesBlock = document.getElementById('pages-block');
let counterBlock = document.getElementById('counter-block');
let counterPages = document.getElementById('counter-pages');
let counterHours = document.getElementById('counter-hours');
let counterRate = document.getElementById('counter-rate');
let changesCheck = document.getElementById('changes-check');
let cmsCheck = document.getElementById('changes-cms');
let totalValue = document.getElementsByClassName('total-count')[0];
let input = document.getElementsByTagName('input');
console.log(totalValue);
console.log(cmsCheck);


let total = 5000;
let time = 1;
let hourRate ;

const land = 5000;
const corp = 6400;
const cms = 1500;
const changes = 500;
const blocks = 300;
const pages = 1500;

window.addEventListener('DOMContentLoaded', function() {
    tabLeft.addEventListener('click', () => {
        for(let i = 0 ; i < input.length; i++) {
            input[i].value = '';
        };
        blocksBlock.style.display = 'flex';
        pagesBlock.style.display = 'none';

        tabLeft.classList.add('active');
        tabRight.classList.remove('active');

        if(changesCheck.checked) {
            changesCheck.checked = false;
        }
        if(cmsCheck.checked) {
            cmsCheck.checked = false;
        }

        total = land;
        totalValue.value = total;
    })

    tabRight.addEventListener('click', () => {
        for(let i = 0 ; i < input.length; i++) {
            input[i].value = '';
        };
        blocksBlock.style.display = 'none';
        pagesBlock.style.display = 'flex';

        tabRight.classList.add('active');
        tabLeft.classList.remove('active');

        if(changesCheck.checked) {
            changesCheck.checked = false;
        }
        if(cmsCheck.checked) {
            cmsCheck.checked = false;
        }

        total = corp;
        totalValue.value = total;
    })

    counterBlock.addEventListener('change', () => {
        counterHours.value = '';
        counterRate.value = '';
        total = counterBlock.value * blocks;
        totalValue.value = total;
    })
    counterPages.addEventListener('change', () => {
        counterHours.value = '';
        counterRate.value = '';
        total = counterPages.value * pages;
        totalValue.value = total;
    })
    counterHours.addEventListener('change', () => {
        counterBlock.value = '';
        counterPages.value = '';
        total = 0 ;
        time = counterHours.value ;
        hourRate = time * counterRate.value;
        totalValue.value = hourRate;
        total = hourRate;
    })

    counterRate.addEventListener('change', () => {
        counterBlock.value = '';
        counterPages.value = '';
        total = 0 ;
        hourRate = time * counterRate.value;
        totalValue.value = hourRate;
        total = hourRate;
    })

    changesCheck.addEventListener('change', () => {
        if(changesCheck.checked) {
            total += changes;
            totalValue.value = total;
        } else {
            total -= changes;
            totalValue.value = total;
        }
    })
    cmsCheck.addEventListener('change', () => {
        if(cmsCheck.checked) {
            total += cms;
            totalValue.value = total;
        } else {
            total -= cms;
            totalValue.value = total;
        }
    })
})