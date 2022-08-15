import pageLoad from './pageLoad';
import homeDiv from './homeTab';
import contactDiv from './contactTab';

pageLoad();

// Module for switching between and clearing out website tabs
const tabController = (() => {
  const mainSection = document.getElementsByClassName('main-section')[0];
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => switchTab(e));
  });

  const tabContent = {
    home: homeDiv,
    menu: 'menuDiv',
    contact: contactDiv
  };

  let currentTab = 'home'

  const switchTab = (e) => {
    if (e.target.id === currentTab) {
      console.log('Already loaded');
    } else {
      mainSection.textContent = '';
      currentTab = e.target.id;
      mainSection.appendChild(tabContent[currentTab]);
    }
  };
})();
