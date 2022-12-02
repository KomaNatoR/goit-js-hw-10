import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { smallCountryTemplate, bigCountryTemplate } from './js/templates';
import Notiflix from 'notiflix';
// import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
    inputEl: document.querySelector('input'),
    listEl: document.querySelector('.country-list'),
    containerEl: document.querySelector('.country-info'),
};

// refs.inputEl.addEventListener('input',debounce(onInput,DEBOUNCE_DELAY));
refs.inputEl.addEventListener('input',onInput);

function onInput(e) {
    const inputData = e.currentTarget.value;
    if (inputData.length===0) {
        refs.listEl.innerHTML ="";    
    }

    fetchCountries(inputData.trim()).then(createCountriesTemplate);
};

function createCountriesTemplate(countries) {
    if (countries.length > 10) return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.!!!');
    if (countries.length === 1) {
        refs.listEl.innerHTML ="";
        return refs.containerEl.innerHTML=bigCountryTemplate();
    };

    const arrayOfCountryes = countries.map(country=>smallCountryTemplate(country));
    refs.listEl.innerHTML=arrayOfCountryes.join('');    
    console.log(countries);
};

