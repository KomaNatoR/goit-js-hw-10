import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
// import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
    inputEl: document.querySelector('input'),
    listEl: document.querySelector('.country-list'),
};

refs.inputEl.addEventListener('input',debounce(onInput,DEBOUNCE_DELAY));
// refs.inputEl.addEventListener('input',onInput);

function onInput(e) {
    const inputData =e.currentTarget.value;

    fetchCountries(inputData.trim());
    console.dir(inputData);
}