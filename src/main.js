import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

// Імпортуємо встановлений npm-пакет
import validator from 'validator';

// Виводимо результати перевірки прямо в консоль браузера
console.log("=== Перевірка роботи пакету validator ===");
console.log("Перевірка правильного email (test@gmail.com):", validator.isEmail('test@gmail.com'));
console.log("Перевірка неправильного email (просто текст):", validator.isEmail('просто текст'));