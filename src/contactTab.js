// Create content for contact page tab
const contactDiv = document.createElement('div');
contactDiv.classList.add('contact-container', 'card');

const contactHeader = document.createElement('h1');
contactHeader.classList.add('hero-header');
contactHeader.innerHTML = 'Contact us!';

const hoursOfOperation = document.createElement('div');

const phoneNumber = document.createElement('div');
phoneNumber.innerHTML = '(123) 456-7890'

const address = document.createElement('div');
address.innerHTML = '1234 Fake Street, Faketown, FK';

// Append contact content to main section and export
contactDiv.appendChild(contactHeader);
contactDiv.appendChild(hoursOfOperation);
contactDiv.appendChild(phoneNumber);
contactDiv.appendChild(address);

export default contactDiv;