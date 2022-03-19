const queryString = window.location.search;
// console.log(queryString);
const urlParams = new URLSearchParams(queryString)
// console.log(urlParams)
const id = urlParams.get("id")
// console.log({ id })

fetch('http://localhost:3000/api/products/${id}')
.then((response) => response.json())
.then((res) => console.log(res))