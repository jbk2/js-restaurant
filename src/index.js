import './assets/stylesheets/styles.css'
import './assets/stylesheets/home_page_styles.css'
import './assets/stylesheets/menu_page_styles.css'
import './assets/stylesheets/contact_page_styles.css'
import { renderHomePage } from "./homepage.js" // used a named export, thus parenthses
import renderMenuPage from "./menupage.js" // used export default here thus no parenteses here
import renderContactPage from "./contactpage.js" // used export default here thus no parenteses here

function clearContent() {
  document.getElementById('content').innerHTML = '';
}

function triggerAnimations() {
  const logo = document.getElementById('logo-type');
  const flag = document.getElementById('japanese-flag');
  console.log(logo);
  console.log(flag);
  logo.classList.remove('animate-logo');
  flag.classList.remove('animate-flag');
  void logo.offsetWidth;
  void flag.offsetWidth;
  logo.classList.add('animate-logo');
  flag.classList.add('animate-flag'); // Reapply the animation class
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
      triggerAnimations();
      renderFunctions[functionName]();
    })
  });
})


