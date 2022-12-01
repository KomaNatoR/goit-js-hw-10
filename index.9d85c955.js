[document.querySelector("input"),document.querySelector(".country-list")][0].addEventListener("input",debounce((function(e){var n,t=e.currentTarget.value;n=t.trim(),fetch("https://restcountries.com/v3.1/name/".concat(n)).then((function(e){return console.log(e.json),e.json()})).then((function(e){console.log(e)})),console.dir(t)}),300));
//# sourceMappingURL=index.9d85c955.js.map
