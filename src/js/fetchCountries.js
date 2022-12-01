
// ?fields=name.official,capital,population,flags,languages

export function fetchCountries(name) {
return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(resp => {
    console.log(resp.json);

    return resp.json();
    })
    .then(country => {
        console.log(country);
    });
};


