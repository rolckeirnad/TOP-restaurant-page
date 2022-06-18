import './contact.css';

const contactPage = (parent) => {
    const div = document.createElement('div');
    const name = document.createElement('h1');
    name.textContent = "My restaurant name";

    const description = document.createElement('p');
    description.textContent = "Restaurant description for testing";


    div.classList.add('addColor');
    div.innerText = "Imported contact module";
    parent.appendChild(div);
};

export { contactPage };