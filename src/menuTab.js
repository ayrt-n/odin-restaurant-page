import pizzaPreview from './pizza-preview.png';

// Create menu div and content for menu tab
const menuDiv = document.createElement('div');
menuDiv.classList.add('menu-container', 'card');

const menuPizzaHeader = document.createElement('h1');
menuPizzaHeader.innerHTML = 'Pizza!!';
menuDiv.appendChild(menuPizzaHeader);

// Iterate through the list of menu items and append
const menuItemsContainer = document.createElement('div');
menuItemsContainer.classList.add('menu-items-container');

const menuItemList = {
  Cheese: '$16.99',
  Pepperoni: '$16.99',
  Supreme: '$18.99',
  Canadian: '$18.99',
  'Meat Lovers': '$21.99',
  Veggie: '$18.99',
  Mystery: '$24.99'
}

for (const item in menuItemList) {
  const menuItemDiv = document.createElement('div');
  menuItemDiv.classList.add('menu-item')

  const menuItem = document.createElement('span');
  menuItem.classList.add('menu-name');
  menuItem.innerHTML = item

  const menuPrice = document.createElement('span');
  menuPrice.classList.add('menu-price');
  menuPrice.innerHTML = menuItemList[item];

  menuItemDiv.appendChild(menuItem);
  menuItemDiv.appendChild(menuPrice);

  menuItemsContainer.appendChild(menuItemDiv);
}

menuDiv.appendChild(menuItemsContainer);

const pizzaImage = document.createElement('img');
pizzaImage.src = pizzaPreview;
pizzaImage.classList.add('menu-preview');

menuDiv.appendChild(pizzaImage);


export default menuDiv;