import { resultData } from './makeMarkup';
import './styles.css';

const menu = document.querySelector(".js-menu");
menu.insertAdjacentHTML("beforeend", resultData);

// ======================
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.body;
const themeSwith = document.querySelector(".js-switch-input");
themeSwith.addEventListener('change', handlerChange);

const savedTheme = localStorage.getItem("Theme");

(savedTheme) ? body.classList.add(savedTheme) : body.classList.add(Theme.LIGHT); 
if (savedTheme === Theme.DARK) {
  themeSwith.setAttribute("checked", true);
}

function handlerChange() {
  if (body.classList.contains(Theme.LIGHT)) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem("Theme", Theme.DARK);
  }else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);    
    localStorage.setItem("Theme", Theme.LIGHT);
  };
}
