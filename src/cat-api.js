const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_j7vMMmeVWkNH9iRUn36f59MvSfqoAJiTevDYC2DzDGRuyI0sz37COnTAa5OIUlQy';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(resp => {
    if (!resp.ok) {
      throw new Error();
    }
    return resp.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error();
    }
    return resp.json();
  });
}
