(()=>{let e=document.getElementById("search-input");document.getElementById("submit-button").addEventListener("click",(()=>{e.value})),(async e=>{try{return await fetch("https://api.weatherapi.com/v1/current.json?key=d1bfed572118495ea1d193651231407&q=london",{mode:"cors"})}catch(e){console.log(e)}})()})();