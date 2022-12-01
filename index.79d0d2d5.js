({inputEl:document.querySelector("input"),listEl:document.querySelector(".country-list")}).inputEl.addEventListener("input",debounce((function(e){const t=e.currentTarget.value;n=t.trim(),fetch(`https://restcountries.com/v3.1/name/${n}`).then((e=>(console.log(e.json),e.json()))).then((e=>{console.log(e)})),console.dir(t);var n}),300));
//# sourceMappingURL=index.79d0d2d5.js.map
