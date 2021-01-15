
fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("error:", err));

function initialize(countriesData){
    document.getElementById("ascendButton").addEventListener("click", sortNameAscending);
    document.getElementById("descendButton").addEventListener("click", sortNameDescending);
    document.getElementById("capitalAscSortButton").addEventListener("click", sortCapitalAscending);
    document.getElementById("capitalDescSortButton").addEventListener("click", sortCapitalDescending);
    document.getElementById("populationAscButton").addEventListener("click", popAscending);
    document.getElementById("populationDescButton").addEventListener("click", popDescending);
    document.getElementById("populationDescButton").addEventListener("click", popDescending);
    document.getElementById("region-s").addEventListener("change", FilterByRegion);
    var countries = countriesData;
    var allCountries = countries;
    var filteredCountries = allCountries;

//Kaardilooja
function countryTemplate(country) {
    return `
    <div class= "card">
        <div class="card-header">
            <div id="flag-container">
                <img id="flag" src="${country.flag}" alt="Flag of ${country.name}">
                <h1>${country.name}, ${country.alpha2Code}</h1>
            </div>
        </div>
        <div class="card-body">
            <div id= "info-container">
                <p>Capital: <span id="capital">${country.capital}</span></p>
                <p>Population: <span id="population">${country.population.toLocaleString()}</span></p>
                <p>Languages: <ul><li><span id="languages">${country.languages.map(c => `${c.name}`).join("</li><li>")}</span></li></ul></p>
                <p>Currencies: <ul><li><span id="currencies">${country.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join("</li><li>")}</span></li></ul></p>
                <p>Region: <span id="region">${country.region}</span></p>
            </div>
        </div>
    </div>
    `;
}

//Sorteerimise funktsioonid
function sortingAsc(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}
function sortingDesc(prop) {    
    return function(a, b) {    
        if (a[prop] < b[prop]) {    
            return 1;    
        } else if (a[prop] > b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}

var sortedCountries = countries.sort(sortingAsc("name"));
document.getElementById("row").innerHTML = `
${sortedCountries.map(countryTemplate).join("")}`;


function filtersortCountries(){
    document.getElementById("row").innerHTML = `
    ${filteredCountries.map(countryTemplate).join("")}`;
}

function sortNameDescending(){
    var localArray = filteredCountries;
    var reverseCountries = localArray.sort(sortingDesc("name"));
    filtersortCountries();
    return filteredCountries;
}

function sortNameAscending(){
    var localArray = filteredCountries;
    var sortedCountries = localArray.sort(sortingAsc("name"));
    filtersortCountries();
    return filteredCountries;
}

function sortCapitalAscending(){
    var localArray = filteredCountries;
    var sortedCapitals = localArray.sort(sortingAsc("capital"));
    filtersortCountries();
    return filteredCountries;
}

function sortCapitalDescending(){
    var localArray = filteredCountries;
    var sortedCapitals = localArray.sort(sortingDesc("capital"));
    filtersortCountries();
    return filteredCountries;
}

function popAscending(){
    var localArray = filteredCountries;
    var ascendingPop = localArray.sort(sortingAsc("population"));
    filtersortCountries();
    return filteredCountries;
}

function popDescending(){
    var localArray = allCountries;
    var descendingPop = localArray.sort(sortingDesc("population"));
    filtersortCountries();
    return allCountries;
}

//Regiooni sorteerimine
function FilterByRegion(){
    var localArray = allCountries;
    var e = document.getElementById("region-s");
    var filteringReg = e.options[e.selectedIndex].text;
    var filteredArray = localArray.filter(function (el) {
        return el.region == filteringReg;     
    });
    filteredCountries = filteredArray;
    filtersortCountries();
    return filteredCountries;
    }
}
