import navElement from "./navbar";

const pageLoad = window.addEventListener('DOMContentLoaded', () => {
  const contentDiv = document.getElementById('content');
  contentDiv.appendChild(navElement);
})

export default pageLoad;