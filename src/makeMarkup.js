import Handlebars from 'handlebars';
import sourseData from './menu.json';
import menuItemTemplate from './templates/menuItem.hbs';

export const resultData = sourseData.reduce((acc, dataItem) => {
  const resultItem = menuItemTemplate(dataItem);
  acc += resultItem;
  return acc;
}, '');
