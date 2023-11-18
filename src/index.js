import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';
const refs = {
  filterSelect: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  idCat: document.querySelector('option'),
};

const { filterSelect, catInfo, idCat } = refs;

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
  console.log(breedId);
  fetchCatByBreed(breedId).then(Data => {
    const catDt = Data[0];
    console.log(catDt);
    const catMarkup = `<img src="${catDt.url}" alt="${catDt.id}" width="${catDt.width}" height="${catDt.height}" />
      <p>hello: ${catDt.temperament}</p>`;
    catInfo.innerHTML = catMarkup;
  });
});
