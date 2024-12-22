import './assets/styles.css'
import './assets/menu_styles.css'
import { renderHomePage } from "./homepage.js" // used a named export, thus parenthses
import renderMenuPage from "./menupage.js" // used export default here thus no parenteses here
import renderContactPage from "./contactpage.js" // used export default here thus no parenteses here

function clearContent() {
  document.getElementById('content').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const renderFunctions = {
    renderHomePage,
    renderMenuPage,
    renderContactPage  
  }
  const buttons = document.querySelectorAll('button');
  
  clearContent();
  renderHomePage();
  buttons.forEach((btn) => {
    btn.addEventListener('click', function () {
      const functionName = `render${this.textContent}Page`;
      clearContent();
      renderFunctions[functionName]();
    })
  });
})


