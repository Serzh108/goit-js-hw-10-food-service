import Handlebars from 'handlebars';
import sourseData from './menu.json';

const item = `<li class="menu__item">
  <div class="card">
    <img
      src={{image}}
      alt={{name}}
      class="card__image"
    />
    <div class="card__content">
      <h2 class="card__name">{{name}}</h2>
      <p class="card__price">
        <i class="material-icons">
          monetization_on
        </i>
        {{price}} кредитов
      </p>

      <p class="card__descr">
      {{description}}
      </p>

      <ul class="tag-list">
      {{#each ingredients}}
        <li class="tag-list__item">{{this}}</li>
        {{/each}}  
      </ul>
    </div>

    <button class="card__button button">
      <i class="material-icons button__icon">
        shopping_cart
      </i>
      В корзину
    </button>
  </div>
</li>`;

export const resultData = sourseData.reduce((acc, dataItem) => {
  const template = Handlebars.compile(item);
  const resultItem = template(dataItem);
  acc += resultItem;
  return acc;
}, '');
