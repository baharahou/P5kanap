fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((data) => addProducts(data));

// quand le then au dessus recois des data il les renvois a addProducts  pour faire fonctionner les const et fonction en dessous

function addProducts(data) {
  // forEach permet  d executer les fonction donnee dans un  tableau (array)

  data.forEach((canape) => {
    const { _id, imageUrl, altTxt, name, description } = canape;
    const sofa = makeAnchor(_id);
    const article = document.createElement("article");
    const image = makeImage(imageUrl, altTxt);
    const h3 = makeH3(name);
    const p = makeParagraph(description);

    // sa sa serre as recuperer des donner dans l array  la en l occurence ses
    //  ses qu il y as dans l'element article  l image le h3(le nom)et le paragraphe(description)

    appendElementsToArticle(article, [image, h3, p]);
    appendArticleTosofa(sofa, article);
  });
}
// c'est la fonction qui recupere les donnees du tableaux depuis l'array pour les injecter dans la section items
function appendElementsToArticle(article, array) {
  array.forEach((item) => {
    article.appendChild(item);
  });
}
// pour recuperer les id des images et cree l'element a
function makeAnchor(id) {
  const sofa = document.createElement("a");
  sofa.href = "./product.html?id=" + id;
  return sofa;
}

function appendArticleTosofa(sofa, article) {
  const items = document.querySelector("#items");
  if (items != null) {
    items.appendChild(sofa); /*la sa rajoute  la constante (sofa) a la section items appeller par son ID #items*/
    sofa.appendChild( article ); /* rajout d'un enfants la section items la ses l'element article*/
  }
}

function makeImage(imageUrl, altTxt) {
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = altTxt;
  return image;
}
// la fonction qui permet de rajouter le nom du produit
function makeH3(name) {
  const h3 = document.createElement("h3"); /*sert as cree l'lement h3*/
  h3.textContent =name; /* sert as renvoyer le contenut textuelle et le cdata */
  h3.classList.add("productName"); /*le h3 avais une class classList et pour donner la class la ses productName */
  return h3;
}
function makeParagraph(description) {
  const p = document.createElement("p"); /*ser as cree l'element p */
  p.textContent = description;
  p.classList.add("productDescription"); /*la meme chose que au dessus  */
  return p;
}
