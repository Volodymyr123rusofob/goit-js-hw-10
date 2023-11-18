import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';
const refs = {
  filterSelect: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
};

const { filterSelect, catInfo } = refs;

fetchBreeds()
  .then(data => {
    const markup = data
      .map(element => `<option value="${element.id}">${element.name}</option>`)
      .join('');
    filterSelect.innerHTML = markup;
  })
  .catch(err => console.log(err));

filterSelect.addEventListener('change', e => {
  const breedId = e.target.value;
  fetchCatByBreed(breedId).then(Data => {
    const catDt = Data[0];
    const catInf = catDt.breeds[0];
    console.log(catInf);
    const catMarkup = `<img class="img-cat" src="${catDt.url}" alt="${catInf.name}" width="400"  /><div class="box-text-cat"><h2 class="cat-title">${catInf.name}</h2>
      <p class="cat-text">${catInf.description}</p><p class="cat-temper-text"><b>Temperament:</b> ${catInf.temperament}</p></div>`;
    catInfo.innerHTML = catMarkup;
  });
});
