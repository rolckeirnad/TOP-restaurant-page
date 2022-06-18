import './index.css';

const mainContent = document.querySelector('#content');
const navOptions = document.querySelectorAll('#mainNav li');
const logoContainer = document.querySelector('#navLogoContainer');

const navLogo = new Image();
navLogo.src = Logo;

const logoName = document.createElement('span');
logoName.innerText = "Burrito Burger";

logoContainer.appendChild(navLogo);
logoContainer.appendChild(logoName);
mainContent.classList.add('dummyContent');
mainContent.textContent = "Changed with js";

function testFunction() {
    console.log("I was clicked");
}