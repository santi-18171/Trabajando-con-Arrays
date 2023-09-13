// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";

  
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

  // Itera a través de los elementos del array y crea elementos de lista (li) para cada uno.
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

// Agrega un evento que se ejecutará cuando el contenido HTML haya sido cargado.
document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí

  // Filtra los elementos de strangeArray que son cadenas de texto y los ordena alfabéticamente.
  const filteredArray = strangeArray.filter((element) => typeof element === "string").sort();

  // Sugerencia de cómo mostrar el array => showList(strangeArray);

  // Llama a la función showList para mostrar los elementos filtrados en el elemento con id "list".
  showList(filteredArray);
});
