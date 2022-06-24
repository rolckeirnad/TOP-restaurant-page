import './menu.css';

const burritos = [
    { name: 'Burrito 1', description: 'Taste like a great burrito. Some meat and vegetables, with spicy sauce', cost: '$1.99', img: './taco-576390_640.png' },
    { name: 'Burrito 2', description: 'it\'s like our traditional burrito, but with a secret recipe', cost: '$2.99', img: './taco-576390_640.png' },
    { name: 'Burrito 3', description: 'More tasty, more burrito', cost: '$3.99', img: './taco-576390_640.png' },
    { name: 'Burrito 4', description: 'A very big burrito with lot of vegetables', cost: '$3.99', img: './taco-576390_640.png' },
];

const images = require.context(
    './dishes/',
    false,
    /\.(png|jpg|jpeg|gif)$/
);

const createCard = (obj) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const dishName = document.createElement('h4');
    dishName.textContent = obj.name;
    dishName.classList.add('name');
    card.appendChild(dishName);

    const description = document.createElement('p');
    description.textContent = obj.description;
    description.classList.add('description');
    card.appendChild(description);

    const cost = document.createElement('p');
    cost.classList.add('cost');
    cost.textContent = obj.cost;
    card.appendChild(cost);

    const image = new Image();
    image.src = images(obj.img);
    image.classList.add('dish-img');
    card.appendChild(image);

    return card;
}

const menuPage = () => {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu-container');

    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = "Check all our menu";
    menu.appendChild(title);

    const grid = document.createElement('div');
    grid.classList.add('grid-container');

    for (let each of burritos) {
        grid.appendChild(createCard(each));
    }
    menu.appendChild(grid);

    return menu;
};

export { menuPage };