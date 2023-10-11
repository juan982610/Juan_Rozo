// ponemos los identificadores de los obejtos que vayamos a utilizar el DOM
const stringObjectDOM = {
    listItemsClass: 'js-list-items',
    formAddItemId: 'js-form-add-item',
    inputItemSelector: '#js-input-Item',
};

// Traemos todos los items que vayamos a utilizar del DOM usando los strings
const $listItemsContainer = document.getElementsByClassName(stringObjectDOM.listItemsClass)[0];
const $form = document.getElementById(stringObjectDOM.formAddItemId);
const $input = document.querySelector(stringObjectDOM.inputItemSelector);
let idItemIterador = 0;


const localStorageDefault = () => {
    let products;
    const countItemsLocarStorage = localStorage.length;
        if (countItemsLocarStorage === 0){
            localStorage.setItem('LIST_MARK_1',JSON.stringify([]));
        }else{
            const getItemsLocalStorage = localStorage.getItem('LIST_MARK_1')
            products = JSON.parse(getItemsLocalStorage);
    }
    return products;
}

const updateItemLocalStorageDefault = () => {
    localStorage.setItem('LIST_MARK_1',JSON.stringify(products));
}

const deleteItemLocalStorageDefault = () => {
    localStorage.setItem('LIST_MARK_1',JSON.stringify(products));
}

const products = localStorageDefault();

const render = () => {
    $listItemsContainer.innerHTML = '';
    products.forEach(product => { 
    $listItemsContainer.appendChild(createProduct(product.product))
    })
}



const handleSubmit = event => {
    event.preventDefault();
    products.push({product: $input.value, made: false});
    updateItemLocalStorageDefault();
    render();
    $input.value = '';
}

const check = (event) => {
    event.preventDefault();
    const completed = event.target.checked;
    const idProductCompleted = event.target.id;
    const nodoProductCompleted = document.getElementById(idProductCompleted).nextSibling;
    const nameProductCompleted = nodoProductCompleted.textContent;

    const productsNew = products.map(product => {
        if (product.product === nameProductCompleted) {
            return { ...product, check: completed};
        }
        return product  ; //Pendiente de revisión.
    });
    console.log(products);
    console.log(productsNew);
    render();
}; 

const deleteProduct = (event) => {
    console.log(products);
    const idProduct = event.target.className;
    const productDelete = document.getElementById(idProduct).nextSibling; 
    console.log(productDelete.textContent);
    console.log(typeof productDelete.textContent)
    for (let i = 0; i < products.length; i++) {
        if(products[i].product === productDelete.textContent){
            console.log(typeof products[i].product);
        }; 
    }

    // console.log(idProductDelete);
    // const idObjectDelete = products.findIndex(product => product.product === productDelete.textContent);
    // console.log(idObjectDelete);

    // $listItemsContainer.removeChild(productDelete);
}

const initListeners = () => {
    $form.addEventListener('submit', handleSubmit); 
  }
  
  const main = () => {
    initListeners()
    render()
  }
  
  main()



function createProduct(value){
    //Creamos los elementos de lista que necesitamos
    const $newListElement = document.createElement("li"); // <li> <li/>
    const $checkButtonElement = document.createElement("input"); // <input />
    const $labelElement = document.createElement("label"); // <input />
    const $deleteButtonElement = document.createElement("button"); // <button> <button/>

    const checkButtonId = `list-item-${idItemIterador}`;

    $checkButtonElement.type = 'checkbox';
    $checkButtonElement.id = checkButtonId;
    $checkButtonElement.name = checkButtonId;
    $checkButtonElement.addEventListener('change',check)

    $labelElement.id = checkButtonId; 
    $labelElement.innerText = value + " ";

    $deleteButtonElement.innerText = "x";
    $deleteButtonElement.className = checkButtonId; 
    $deleteButtonElement.addEventListener('click',deleteProduct)

    $newListElement.appendChild($checkButtonElement);
    $newListElement.appendChild($labelElement);
    $newListElement.appendChild($deleteButtonElement);

    idItemIterador ++;

    return $newListElement; 
}




