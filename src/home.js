import './home.css';

const homePage = (parent) => {
    const div = document.createElement('div');
    const name = document.createElement('h1');
    name.textContent = "My restaurant name";

    const description = document.createElement('p');
    description.textContent = "Restaurant description for testing";


    div.classList.add('addColor');
    div.innerText = "Imported home module";
    parent.appendChild(div);
};

export { homePage };