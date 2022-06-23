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

const home = homePage();

for (let option of navOptions)
    option.addEventListener('click', _ => displayContent(option.textContent));

function displayContent(option) {
    cleanContent();
    switch (option) {
        case 'Home':
            mainContent.appendChild(home);
            break;
        case 'Menu':
            menuPage(mainContent);
            break;
        case 'Contact':
            contactPage(mainContent);
            break;
        default:
            homePage(mainContent);
    }
}

function cleanContent() {
    mainContent.innerHTML = '';
}

displayContent('Home');