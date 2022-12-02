export const smallCountryTemplate = ({flags,altSpellings}) =>
    `<li style="display:flex; gap:5px;">
        <img src="${flags.svg}" alt="${altSpellings[1]}" width="32">
        <span>${altSpellings[1]}</span>
    </li>`;

export const bigCountryTemplate = () => `
    <ul style=" padding-left: 0;">
    <li style="display:flex; gap:5px;">
        <img src="https://flagcdn.com/ua.svg" alt="Ukraine" width="32">
        <span style="font-size: 25px;font-weight: bold;">Ukraine</span>
    </li>
    </ul>
    <p><span class="par">Capital:</span> Kyiv</p>
    <p><span class="par">Population:</span> 52000000</p>
    <p><span class="par">Languages:</span> Ukrainian</p>
`;