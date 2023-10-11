/* 
  PENDIENTE:
  
  ¿Como guardamos el listado de elementos en el localStorage y que se precargue cuando refresquemos la pagina o cuando lleguemos a ella despues de mucho tiempo?

*/

// Estas son solo los string que usaremos como identificadores de nuestros elementos, sean clases, o id's o selectores
const itemsListClass = "js-items-list";
const formId = "js-form";
const inputSelector = "#js-input-name";

// Usando los string, buscamos en el DOM cada uno de los elementos que necesitamos
const $itemsListContainer = document.getElementsByClassName(itemsListClass)[0];
const $form = document.getElementById(formId);
const $input = $form.querySelector(inputSelector); //Como $form ya lo tenemos identificado, podemos buscar el input dentro de este, ya que es un nodo cercano


let idItemsIterator = 0; //Este iterador será usado para identificar cada uno de los checkbox y sus label

//Esta función será la encargada de validar el comportamiento cuando el estado de un input check cambia, recibe por parametro el $item que queremos manipular
const handleCheck = ($item) => {
    const $input = $item.getElementsByTagName("input")[0]; //Identificamos el input dentro del item, accedemos a la posición 0 porque getElementsByTagName nos devuelve un array de un solo elemente en este caso
  const inputValue = $input.checked; //La propiedad "checked" nos dice si el input está chequeado o no (boolean)

  if (inputValue) {
      $itemsListContainer.prepend($item); //Si el input se chequeó, quiero que se añada antes que todos los elementos hijos de $itemsListContainer
    } else {
        $itemsListContainer.append($item); //Si el input se des-chequeó, quiero que se añada al final que todos los elementos hijos de $itemsListContainer
    }
};

//Esta función será la encargada de controlar lo que suceda si le damos click a un botón de eliminar item, recibe por parametro el elemento que queremos manipular
const handleRemoveButton = ($item) => {
    $item.remove(); //el método remove() elimina el elemento del DOM
};

//Esta será la función encargada de crear los elementos que vamos a añadir al DOM, el parametro "value" será el texto que tendrá el label
const createListElement = (value) => {
    const $newListElement = document.createElement("li"); //esto nos crea un elemento <li><li/>
    const $checkButton = document.createElement("input"); //esto nos crea un elemento <input />
    const $checkLabel = document.createElement("label"); //esto nos crea un elemento <label><label/>
    
    const checkButtonId = `list-item-${idItemsIterator}`; //Este string es el que vamos para identificar cada check input y si label correspondiente
    
    $checkButton.id = checkButtonId; //Sobrescribimos la propiedad id de $checkButton
    $checkButton.name = checkButtonId; //Sobrescribimos la propiedad name de $checkButton
  $checkButton.type = "checkbox"; //Sobrescribimos la propiedad type de $checkButton
  // Finalizada esta parte tenemos un elemento $checkButton que equivale a <input type="checkbutton" name="list-item-0" id="list-item-0"/>
  
  $checkLabel.htmlFor = checkButtonId; //Sobrescribimos la propiedad for de $checkLabel
  $checkLabel.innerText = value + " "; //Sobrescribimos el texto interno de $checkLabel
  // Finalizada esta parte tenemos un elemento $checkLabel que equivale a <label for="list-item-0"> [acá va el valor de la variable value] </label>
  
  $newListElement.appendChild($checkButton); //Añadimos el <input /> al elemento <li>
  $newListElement.appendChild($checkLabel); //Añadimoa el <label> al elemento <li>
  /* Finalizada esta parte, tenemos un elemento resultante que luce así
  
  <li>
  <input type="checkbutton" name="list-item-0" id="list-item-0"/>
  <label for="list-item-0"> [acá va el valor de la variable value] </label>
  </li>
  
  el cual está guardado en la constante $newListElement
  */
 
 $itemsListContainer.appendChild($newListElement); //Añadimos el elemento <li> con todos sus hijos al listado <ul>
 
 idItemsIterator++; //Aumentamos 1 unidad el iterador para que el próximo elemento que se va a crear tenga otro id
 
 $checkButton.addEventListener("change", () => handleCheck($newListElement)); //escuchamos si $checkButton cambia de valor, y le enviamos a la función handleCheck el elemento que queremos manipular
 
 const $deleteButton = document.createElement("button"); //Creamos un elemento <button></button>
 $deleteButton.innerText = "x"; //Al elemento button le agregamos el texto intero "x"
 $newListElement.appendChild($deleteButton); //Agegamos ese botón al elemento <li>
 
 /* Hasta aquí nuestro elemento <li> se ve de la siguiente manera
 <li>
 <input type="checkbutton" name="list-item-0" id="list-item-0"/>
 <label for="list-item-0"> [acá va el valor de la variable value] </label>
 <button>x</button>
 </li>
 */

$deleteButton.addEventListener("click", () =>
handleRemoveButton($newListElement)
); //escuchamos el evento click el cual va a llamar la función handleRemoveButtony le indicamos cual es el elemento que queremos manipular
};

//Esta función será la encargada de controlar cuando demos enter estando parados en el input o cuando le demos click al boton "Agregar +", el parámetro "e" recibido es el evento que dispara el eventListener
const handleSubmit = (e) => {
    e.preventDefault(); //Acá evitamos que el formulario refresque la página, ya que ese es su comportamiento por defecto
    
    if ($input.value !== "") {
        //Con la propiedad value, podemos saber cual es el valor actual escrito en el input. en nuestro caso, si el input es igual a string vacio, no queremos que haga nada, pero si es diferente a string vacio...
        createListElement($input.value); //invocamos la función encargada de crear cada uno de los elementos y le pasamos el valor actual del input
        $input.value = ""; //Reiniciamos el valor del input para que el usuario no tenga que borrar lo que escribio cada vez que agregó un nuevo elemento
    }
};

// Esta función inicializa los eventos que necesitamos escuchar desde el principio
const initListeners = () => {
    $form.addEventListener("submit", handleSubmit); //Este evento escucha cuando demos enter estando parados en el input o cuando le demos click al boton "Agregar +" y llama la función handleSubmit
};

//función principal
const main = () => {
    initListeners();
};

main();
