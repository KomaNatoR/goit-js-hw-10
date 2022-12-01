import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { smallCountryTemplate } from './js/templates';
import Notiflix from 'notiflix';
// import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
    inputEl: document.querySelector('input'),
    listEl: document.querySelector('.country-list'),
};

// refs.inputEl.addEventListener('input',debounce(onInput,DEBOUNCE_DELAY));
refs.inputEl.addEventListener('input',onInput);

function onInput(e) {
    const inputData = e.currentTarget.value;
    // let responseData = [];

    fetchCountries(inputData.trim()).then(createCountriesTemplate);
};

function createCountriesTemplate(countries) {
    if (countries.length > 10) return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.!!!');
    
    
    console.log(countries);
};

refs.listEl.innerHTML=smallCountryTemplate();
