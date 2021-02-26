import CountrTpl from '../templates/country.hbs';
import refs from './refs';

function updateMarkup(articles) {
    console.log(articles)
    if (articles.status === 404) {
      return          
    }       
    const markup = CountrTpl(articles);    
    refs.countryContainer.insertAdjacentHTML('beforeend', markup);    
}

export default updateMarkup;