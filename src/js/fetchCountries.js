import refs from './refs.js';
import updateListMarkup from './update-list-countryes.js'
import updateMarkup from './update-countryes.js'
import error from './notification.js'
let debounce = require('lodash.debounce');

refs.searchInput.addEventListener('input', debounce(event => {
    let inputValue = event.target.value;
    fetch(`https://restcountries.eu/rest/v2/name/${inputValue}`)
        .then(res => res.json())
        .then(matCount => filterCountr(matCount))
        .catch(console.log);
}, 1000))

function filterCountr(matCount) {
    const numberCountries = matCount.length
    if (numberCountries > 10) {
        onCleaner()        
        error({                    
            title: 'Oh No!',            
            text: 'Необходимо сделать запрос более специфичным.'                    
        });       
    } else if (numberCountries >= 2 && numberCountries <= 10) {        
        onCleaner()        
        updateListMarkup(matCount)        
    } else {        
        onCleaner()        
        updateMarkup(matCount)         
    }
    
}

function onCleaner() {
    refs.countryContainer.innerHTML = ''
    refs.searchInput.value = ''
}