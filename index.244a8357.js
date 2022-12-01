function t(t){return fetch(`https://restcountries.com/v3.1/name/${t}?fields=name.official,capital,population,flags,languages`).then((t=>t.json()))}({inputEl:document.querySelector("input"),listEl:document.querySelector(".country-list")}).inputEl.addEventListener("input",(function(e){const n=e.currentTarget.value;t(n.trim()),console.dir(t(n))}));
//# sourceMappingURL=index.244a8357.js.map
