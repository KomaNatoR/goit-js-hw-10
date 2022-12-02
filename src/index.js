import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { smallCountryTemplate, bigCountryTemplate } from './js/templates';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
    inputEl: document.querySelector('input'),
    listEl: document.querySelector('.country-list'),
    containerEl: document.querySelector('.country-info'),
};

refs.inputEl.addEventListener('input',debounce(onInput,DEBOUNCE_DELAY));
// refs.inputEl.addEventListener('input',onInput);

function onInput(e) {
    const inputData = e.target.value;
    if (inputData.length===0) {
        refs.listEl.innerHTML ="";    
    }

    fetchCountries(inputData.trim()).then(createCountriesTemplate).catch(error);
};

function createCountriesTemplate(countries) {
    // if (countries.length === 0) return;
    if (countries.length > 10) {
        refs.listEl.innerHTML = "";
        return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.!!!')
    };
    if (countries.length === 1) {
        refs.listEl.innerHTML = "";
        return refs.containerEl.innerHTML=bigCountryTemplate(...countries);
    };

    const arrayOfCountryes = countries.map(country => smallCountryTemplate(country));
    refs.containerEl.innerHTML = "";
    refs.listEl.innerHTML=arrayOfCountryes.join('');    
    console.log(countries);
};

function error() {
    return Notiflix.Notify.failure('Oops, there is no country with that name');
}

