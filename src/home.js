import './home.css';

const days = [
    {
        name: 'Sunday',
        hour: '10:00 - 16:00'
    },
    {
        name: 'Monday',
        hour: '08:00 - 18:00'
    },
    {
        name: 'Tuesday',
        hour: '08:00 - 18:00'
    },
    {
        name: 'Wednesday',
        hour: '08:00 - 18:00'
    },
    {
        name: 'Thursday',
        hour: '08:00 - 18:00'
    },
    {
        name: 'Friday',
        hour: '08:00 - 02:00'
    },
    {
        name: 'Saturday',
        hour: '10:00 - 20:00'
    },
];

const homePage = () => {
    const home = document.createElement('div');
    home.classList.add('home-container');

    const restaurantInfo = document.createElement('div');
    restaurantInfo.classList.add('block-container');
    restaurantInfo.classList.add('hero');

    const greeting = document.createElement('h3');
    greeting.classList.add('title');
    greeting.classList.add('hero');
    greeting.textContent = "Welcome to Burrito Burger";
    restaurantInfo.appendChild(greeting);

    const description = document.createElement('p');
    description.textContent = "A place where you will find all exotic burritos and burgers";
    description.classList.add('text');
    description.classList.add('hero');
    restaurantInfo.appendChild(description);

    const serviceInfo = document.createElement('div');
    serviceInfo.classList.add('block-container');

    const schedule = document.createElement('h3');
    schedule.classList.add('title');
    schedule.textContent = "Working hours";
    serviceInfo.appendChild(schedule);

    for (let day of days) {
        const p = document.createElement('p');
        p.classList.add('day');
        p.textContent = `${day.name}: ${day.hour}`;
        serviceInfo.appendChild(p);
    }
    home.appendChild(serviceInfo);

    const locationInfo = document.createElement('div');
    locationInfo.classList.add('block-container');

    const addressTitle = document.createElement('h3');
    addressTitle.classList.add('title');
    addressTitle.textContent = "Restaurant address";
    locationInfo.appendChild(addressTitle);
    
    const address = document.createElement('p');
    address.classList.add('address');
    address.textContent = "123 Burger street, Taquitoville, Food sector"
    locationInfo.appendChild(address);
    home.appendChild(locationInfo);

    const map = document.createElement('iframe');
    map.setAttribute('id', 'map');
    map.setAttribute('src', 'https://maps.google.com/maps?q=burrito&t=&z=13&ie=UTF8&iwloc=&output=embed')
    locationInfo.appendChild(map);

    const fragment = document.createDocumentFragment()
    fragment.appendChild(restaurantInfo);
    fragment.appendChild(home);
    return fragment;
};

export { homePage };