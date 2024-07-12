import { getData } from "./function.js";

async function getData(url) {
    try {
        const res = await fetch(url);
        const data = await Response.json();
    } catch (error) {
        return error;
    }
}

const wrapper = document.getElementById('border-product');


function createCard(card) {
    
}

document.querySelectorAll('header ul li').forEach(item => {
    item.addEventListener('click', event => {
        const targetId = event.target.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
