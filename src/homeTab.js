import hero from './hero-image.png';

// Create content for home page tab
const heroDiv = document.createElement('div');
heroDiv.classList.add('hero', 'card');

const heroImage = document.createElement('img');
heroImage.src = hero;
heroImage.alt = 'Cooking mama holding slice of pizza and desert';
heroImage.classList.add('hero-image');

const heroHeader = document.createElement('h1');
heroHeader.innerHTML = 'Mama Pz Pizza Shop';
heroHeader.classList.add('hero-header');

const heroText = document.createElement('p');
heroText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
heroText.classList.add('hero-text');

const heroTextDiv = document.createElement('div');
heroTextDiv.classList.add('hero-text-container');

// Append content to main section and export
heroTextDiv.appendChild(heroHeader);
heroTextDiv.appendChild(heroText);
heroDiv.appendChild(heroTextDiv);
heroDiv.appendChild(heroImage);

export default heroDiv;
