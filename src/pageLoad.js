import navElement from "./navbar";
import homeTab from "./homeTab";
import footerElement from "./footer";

const contentDiv = document.getElementById('content');

// Create div container for main section
const mainSection = document.createElement('div');
mainSection.classList.add('main-section');
mainSection.id = 'main';

// Page load function to dynamically build home page on load
const pageLoad = () => {
  mainSection.appendChild(homeTab);

  contentDiv.appendChild(navElement);
  contentDiv.appendChild(mainSection);
  contentDiv.appendChild(footerElement);
};

export default pageLoad;