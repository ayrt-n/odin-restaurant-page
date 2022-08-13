// Create footer
const footerElement = document.createElement('footer');
footerElement.classList.add('footer');

// Create footer content div and footer content
const footerContent = document.createElement('div');
footerContent.classList.add('footer-content');

const upsplashLink = document.createElement('a');
upsplashLink.href = 'https://unsplash.com/photos/XLmhRnV8yuc';
upsplashLink.target = '_blank';
upsplashLink.innerHTML = 'Pizza background from Tamas Pap - Upsplash';

const flaticonLink = document.createElement('a');
flaticonLink.href = 'https://www.flaticon.com/free-icons/pizza';
flaticonLink.target = '_blank';
flaticonLink.innerHTML = 'Pizza icons created by Freepik - Flaticon';

footerContent.appendChild(upsplashLink);
footerContent.appendChild(document.createElement('br'));
footerContent.appendChild(flaticonLink);

// Append footer content to main footer element and export
footerElement.appendChild(footerContent);

export default footerElement;

// Structure of footerElement
/* <footer class="footer">
  <div class="footer-content">
    <a href="https://unsplash.com/photos/XLmhRnV8yuc" target="_blank">Pizza background from Tamas Pap - Upsplash</a>
    <br>
    <a href="https://www.flaticon.com/free-icons/pizza" target="_blank">Pizza icons created by Freepik - Flaticon</a>
  </div>
</footer> */