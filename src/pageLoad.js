import navElement from "./navbar";
import mainDiv from "./mainSection";
import footerElement from "./footer";

const pageLoad = () => {
  const contentDiv = document.getElementById('content');
  contentDiv.appendChild(navElement);
  contentDiv.appendChild(mainDiv)
  contentDiv.appendChild(footerElement);
};

export default pageLoad;