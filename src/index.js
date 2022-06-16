import './index.css';

const mainContent = document.querySelector('#content');
const navOptions = document.querySelectorAll('#mainNav li');

for (let option of navOptions) option.addEventListener('click', testFunction);

mainContent.classList.add('dummyContent');
mainContent.textContent = "Changed with js";

function testFunction() {
    console.log("I was clicked");
}