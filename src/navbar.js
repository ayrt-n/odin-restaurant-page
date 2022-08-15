import pizzaIcon from './pizza.png';

// Create main navbar element
const navElement = document.createElement('nav');
navElement.classList.add('navbar');

// Create navbar brand and logo
const navBrand = document.createElement('div');
navBrand.classList.add('navbar-brand');

const navLogo = document.createElement('div');
const logo = document.createElement('img');
navLogo.classList.add('navbar-item');
logo.classList.add('logo');
logo.src = pizzaIcon;
logo.alt = 'small cartoon pizza icon';

navLogo.appendChild(logo);
navBrand.appendChild(navLogo);

// Create navbar menu
const navMenu = document.createElement('div');
navMenu.classList.add('navbar-menu');
const menuOptions = ['Home', 'Menu', 'Contact'];

const menuItems = menuOptions.map(item => {
  const tmp = document.createElement('a');
  tmp.classList.add('navbar-item', 'tab');
  tmp.id = item.toLowerCase()
  tmp.innerHTML = item;
  return tmp;
})

menuItems.forEach(item => {
  navMenu.appendChild(item);
});

// Add nav logo and menu to the main navbar element
navElement.appendChild(navBrand);
navElement.appendChild(navMenu);

export default navElement;
