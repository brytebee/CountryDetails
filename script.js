'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountryData = country => {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [res] = JSON.parse(this.responseText);
    // console.log(res);

    const html = `
  <article class="country">
          <img class="country__img" src="${res.flag}" />
          <div class="country__data">
            <h3 class="country__name">${res.name}</h3>
            <h4 class="country__region">${res.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +res.population / 1000000
            ).toFixed(1)} Million</p>
            <p class="country__row"><span>🗣️</span>${res.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${res.currencies[0].name}</p>
          </div>
        </article>
  `;
    countriesContainer.insertAdjacentHTML('afterbegin', html);
    countriesContainer.style.opacity = 1;
  });
};

document.getElementById('check').addEventListener('click', () => {
  getCountryData(document.getElementById('country').value);
});