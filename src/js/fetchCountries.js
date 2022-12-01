
// ?fields=name.official,capital,population,flags,languages

export function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name.official,capital,population,flags,languages`)
    .then(resp => resp.json())
    // .then(country => country);
};


