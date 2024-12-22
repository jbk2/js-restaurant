import './assets/styles.css'
import './assets/menu_page_styles.css'
import './assets/contact_page_styles.css'
import { renderHomePage } from "./homepage.js" // used a named export, thus parenthses
import renderMenuPage from "./menupage.js" // used export default here thus no parenteses here
import renderContactPage from "./contactpage.js" // used export default here thus no parenteses here

function clearContent() {
  document.getElementById('content').innerHTML = '';
}

function triggerAnimation() {
  const logo = document.querySelector('#logo-type');
  logo.classList.remove('animate-logo');
  void logo.offsetWidth;
  logo.classList.add('animate-logo'); // Reapply the animation class
}

document.addEventListener('DOMContentLoaded', () => {
  const renderFunctions = {
    renderHomePage,
    renderMenuPage,
    renderContactPage  
  }
  
  clearContent();
  renderHomePage();
  
  const buttons = document.querySelectorAll('button');

  buttons.forEach((btn) => {
    btn.addEventListener('click', function () {
      const functionName = `render${this.textContent}Page`;
      clearContent();
      triggerAnimation();
      renderFunctions[functionName]();
    })
  });
})


