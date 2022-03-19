const queryString = window.location.search;
// console.log(queryString);
const urlParams = new URLSearchParams(queryString);
// console.log(urlParams)
const id = urlParams.get("id");
// console.log({ id })

// sa log tout se qu'il reçois de l api concernant l'article qui as etais clicker
fetch(`http://localhost:3000/api/products/${id}`)
  .then((response) => response.json())
  .then((res) => handleData(res));

function handleData(canaper) {
  //   const altTxt = canaper.altTxt
  //   const colors = canaper.colors
  //   const description = canaper.description
  //   const imageUrl = canaper.imageUrl
  //   const name = canaper.name
  //   const price = canaper.price
  //   const _id = canaper._id
  const { altTxt, colors, description, imageUrl, name, price } = canaper;
  faireImage(imageUrl, altTxt);
  faireTitle(name);
  fairePrice(price);
  faireDescription(description);
  faireMenuColors(colors);
}

// tous se qui concerne l'image et la balise img rajouter as la div avec la classe item__img
function faireImage(imageUrl, altTxt) {
  const image = document.createElement("img");
  image.src = imageUrl;
  image.altTxt = altTxt;
  const parents = document.querySelector(".item__img");
  if (parents != null) parents.appendChild(image);
}

// sa ses tous se contient la div title et la balise h1 existant deja ont pas besoin de cree un nouvelle element
//  ont selectionne juste l'id #title et as l aide de textContent ont rajoute le contenu la ses se qui es marquier dans l api as name.
function faireTitle(name) {
  const h1 = document.querySelector("#title");
  if (h1 != null) h1.textContent = name;
}
// ses la meme chose que au dessus la sa concerne la span   sauf que la sa concerne le prix(price)
function fairePrice(price) {
  const span = document.querySelector("#price");
  if (span != null) span.textContent = price;
}
// la meme que au dessus mais la sa concerne la balise p ou il y la description
function faireDescription(description) {
  const p = document.querySelector("#description");
  if (p != null) p.textContent = description;
}
// la sa concerne le menu deroulent des differentes couleurs
// que l API propose
function faireMenuColors(colors) {
  const select = document.querySelector("#colors");
  if (select != null) {
    /*le select ses pour avoir plusieur choix */
    colors.forEach((color) => {
      /*foreach sa permety d'executer la function donner sur le tableaux (array)*/
      const option = document.createElement("option");
      option.value =color; /*value permet le renvois des des valeur de la fonction dans l ordre quelle sont sur le tableaux exemple 
      rouge bleue vert sa peut pas etre vert bleue rouge*/
      option.textContent = color;
      select.appendChild(option);
    });
  }
}
