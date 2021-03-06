import './index.css';
import { homePage } from './home.js';
import { menuPage } from './menu.js';
import { contactPage } from './contact.js';

import Logo from './hamburger-31775_640.png';

const mainContent = document.querySelector('#content');
const navOptions = document.querySelectorAll('#mainNav li');
const logoContainer = document.querySelector('#navLogoContainer');

const navLogo = new Image();
navLogo.src = Logo;

const logoName = document.createElement('span');
logoName.innerText = "Burrito Burger";

logoContainer.appendChild(navLogo);
logoContainer.appendChild(logoName);

for (let option of navOptions)
    option.addEventListener('click', _ => displayContent(option.textContent));

function displayContent(option) {
    cleanContent();
    let el;
    switch (option) {
        case 'Home':
            el = homePage();
            break;
        case 'Menu':
            el = menuPage();
            break;
        case 'Contact':
            el = contactPage();
            break;
        default:
            el = homePage();
    }
    mainContent.appendChild(el);
}

function cleanContent() {
    mainContent.replaceChildren();
}

displayContent('Home');