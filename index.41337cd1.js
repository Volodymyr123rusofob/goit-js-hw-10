!function(){var t="https://api.thecatapi.com/v1",e="live_j7vMMmeVWkNH9iRUn36f59MvSfqoAJiTevDYC2DzDGRuyI0sz37COnTAa5OIUlQy";function n(n){return fetch("".concat(t,"/images/search?api_key=").concat(e,"&breed_ids=").concat(n)).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}))}var c={filterSelect:document.querySelector(".breed-select"),catInfo:document.querySelector(".cat-info")},a=c.filterSelect,o=c.catInfo;fetch("".concat(t,"/breeds?api_key=").concat(e)).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()})).then((function(t){var e=t.map((function(t){return'<option value="'.concat(t.id,'">').concat(t.name,"</option>")})).join("");a.innerHTML=e})).catch((function(t){return console.log(t)})),a.addEventListener("change",(function(t){n(t.target.value).then((function(t){var e=t[0],n=e.breeds[0];console.log(n);var c='<img class="img-cat" src="'.concat(e.url,'" alt="').concat(n.name,'" width="400"  /><div class="box-text-cat"><h2 class="cat-title">').concat(n.name,'</h2>\n      <p class="cat-text">').concat(n.description,'</p><p class="cat-temper-text"><b>Temperament:</b> ').concat(n.temperament,"</p></div>");o.innerHTML=c}))}))}();
//# sourceMappingURL=index.41337cd1.js.map
