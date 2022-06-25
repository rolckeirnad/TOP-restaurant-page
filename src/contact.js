import './contact.css';

const credits = [
    { userName: "Clker-Free-Vector-Images", src: "./hamburger-31775_640.png", profileUrl: "https://pixabay.com/es/users/clker-free-vector-images-3736/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=31775", siteName: "Pixabay", siteUrl: "https://pixabay.com/es/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=31775" },
    { userName: "ALFONSO CHARLES", src: "./mexican-food-1561970_1280.jpg", profileUrl: "https://pixabay.com/es/users/adoproducciones-121887/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1561970", siteName: "Pixabay", siteUrl: "https://pixabay.com/es/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1561970" },
    { userName: "OpenClipart-Vectors", src: "./dishes/taco-576390_640.png", profileUrl: "https://pixabay.com/es/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=576390", siteName: "Pixabay", siteUrl: "https://pixabay.com/es/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=576390" },
];

const images = require.context(
    './',
    true,
    /\.(png|jpg|jpeg|gif)$/
);

const greetingCard = (obj) => {
    const card = document.createElement('div');
    card.classList.add('greeting-card');

    const img = new Image();
    img.src = images(obj.src);
    img.classList.add('greeting-img');
    card.appendChild(img);

    const span = document.createElement('span');
    span.classList.add('credit');

    const author = document.createElement('a');
    author.textContent = obj.userName;
    author.href = obj.profileUrl;

    const site = document.createElement('a');
    site.textContent = obj.siteName;
    site.href = obj.siteUrl;
    span.append('Image by ', author, ' on ', site);

    card.appendChild(span);

    return card;
}

const contactPage = () => {
    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'contact-container');

    const mainTitle = document.createElement('h3');
    mainTitle.classList.add('title');
    mainTitle.textContent = "Contact Info";
    contactContainer.appendChild(mainTitle);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('contact-info');

    const name = document.createElement('p');
    name.classList.add('info');
    name.textContent = "Daniel";
    infoContainer.appendChild(name);

    const phone = document.createElement('p');
    phone.classList.add('info');
    phone.textContent = "123-456-789";
    infoContainer.appendChild(phone);

    const email = document.createElement('p');
    email.classList.add('info');
    email.textContent = "mr.taquito@absolutelynotfake.com";
    infoContainer.appendChild(email);

    contactContainer.appendChild(infoContainer);

    const creditsContainer = document.createElement('div');
    creditsContainer.classList.add('credits-container');
    const greeting = document.createElement('p');
    greeting.classList.add('title');
    greeting.textContent = "Credits to image creators";
    creditsContainer.appendChild(greeting);
    console.log(images.keys());

    for (let each of credits) {
        creditsContainer.appendChild(greetingCard(each));
    }
    contactContainer.appendChild(creditsContainer);

    return contactContainer;
};

export { contactPage };