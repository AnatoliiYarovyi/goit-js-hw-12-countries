import CountrTpl from '../templates/country.hbs';
import refs from './refs';

function updateMarkup(articles) {
    const markup = CountrTpl(articles);    
    refs.countryContainer.insertAdjacentHTML('beforeend', markup);    
}

export default updateMarkup;