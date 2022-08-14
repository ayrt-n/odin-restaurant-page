import hero from './hero-image.png';

// Create main section div
const mainDiv = document.createElement('div');
mainDiv.classList.add('main-section');

// Create content for home page tab
const heroDiv = document.createElement('div');
heroDiv.classList.add('hero');

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
mainDiv.appendChild(heroDiv);

export default mainDiv; 

// Main section structure
/* <div class="main-section">
  <div class="hero">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
</div> */