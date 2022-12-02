export const smallCountryTemplate = ({flags,altSpellings}) =>
    `<li style="display:flex; gap:5px;">
        <img src="${flags.svg}" alt="${altSpellings[1]}" width="32">
        <span>${altSpellings[1]}</span>
    </li>`;

export const bigCountryTemplate = ({flags,altSpellings,capital,languages,population}) => `
    <ul style=" padding-left: 0;">
    <li style="display:flex; gap:5px;">
        <img src="${flags.svg}" alt="${altSpellings[1]}" width="32">
        <span style="font-size: 25px;font-weight: bold;">${altSpellings[1]}</span>
    </li>
    </ul>
    <p><span style="font-weight: bold;">Capital:</span> ${capital}</p>
    <p><span style="font-weight: bold;">Population:</span> ${population}</p>
    <p><span style="font-weight: bold;">Languages:</span> ${Object.values(languages).join(", ")}</p>
`;