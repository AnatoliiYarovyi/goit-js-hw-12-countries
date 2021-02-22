import listCountrTpl from '../templates/listCountryes.hbs';
import refs from './refs';

function updateListMarkup(articles) {
    const markup = listCountrTpl(articles);    
    refs.countryContainer.insertAdjacentHTML('beforeend', markup);    
}

export default updateListMarkup;
