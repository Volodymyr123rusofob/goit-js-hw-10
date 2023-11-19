import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';

const refs = {
  filterSelect: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loadStatus: document.querySelector('.loader'),
  loadError: document.querySelector('.error'),
};

const { filterSelect, catInfo, loadError, loadStatus } = refs;
loadStatus.classList.remove('is-hidden');

const textErr = loadError.children;
const arrayCat = [];

fetchBreeds()
  .then(data => {
    data.map(element => {
      arrayCat.push({ text: element.name, value: element.id });
    });
    new SlimSelect({
      select: filterSelect,
      placeholder: 'Select a breed',
      data: arrayCat,
    });
  })
  .catch(() => {
    loadStatus.classList.add('is-hidden');
    Notiflix.Report.failure(
      `${textErr[0].textContent}`,
      `${textErr[1].textContent}`
    );
  });

filterSelect.addEventListener('change', e => {
  loadStatus.classList.remove('is-hidden');
  catInfo.classList.add('is-hidden');
  const breedId = e.target.value;
  fetchCatByBreed(breedId)
    .then(Data => {
      const catDt = Data[0];
      const catInf = catDt.breeds[0];
      const catMarkup = `<img class="img-cat" src="${catDt.url}" alt="${catInf.name}" width="400"  /><div class="box-text-cat"><h2 class="cat-title">${catInf.name}</h2>
      <p class="cat-text">${catInf.description}</p><p class="cat-temper-text"><b>Temperament:</b> ${catInf.temperament}</p></div>`;
      catInfo.innerHTML = catMarkup;
      catInfo.classList.remove('is-hidden');
      loadStatus.classList.add('is-hidden');
    })
    .catch(() => {
      loadStatus.classList.add('is-hidden');
      Notiflix.Report.failure(
        `${textErr[0].textContent}`,
        `${textErr[1].textContent}`
      );
    });
});
