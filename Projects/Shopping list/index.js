const Add = document.getElementById('Add');
const List = document.getElementById('List');

const AddProduct = (event) => {
    const nombre = event.target[0].value;
    event.preventDefault();
    Add.reset();
    nombre == '' ? alert('No haz colocado ningun producto') 
    : List.appendChild(createProduct(false,nombre));
}

Add.addEventListener('submit', AddProduct);

const deleteProduct = (event) => {
    const name = event.target.name;
    const nameDelete = document.querySelector(`ul > div[id="${name}"]`); 
    List.removeChild(nameDelete);
}

const check = (event) => {
    const completed = event.target.checked;
    const name = event.target.id;
    const nameDelete = document.querySelector(`ul > div[id="${name}"]`); 
    const brother = document.querySelector(`ul > div`);

    if (nameDelete.id != brother.id){
        if(completed == true){
            List.removeChild(nameDelete);
            List.insertBefore(createProduct(completed,name), brother);
        }else{
            List.removeChild(nameDelete);
            List.appendChild(createProduct(completed,name));
        }
    }
}; 

function createProduct(completed,nombre){
    const divProduct  = document.createElement("div");
    divProduct.id = nombre;
    divProduct.className = 'Products'
    
    const checkComplete = document.createElement("input");
    checkComplete.type = 'checkbox'; 
    checkComplete.className= 'Complete';
    checkComplete.checked = completed;
    checkComplete.id = nombre;
    checkComplete.addEventListener('change', check)
    divProduct.appendChild(checkComplete);
    
    const labelComplete = document.createElement("label");
    labelComplete.textContent = nombre;
    labelComplete.id = nombre;
    divProduct.appendChild(labelComplete);
    
    const buttonComplete = document.createElement("button");
    buttonComplete.className = 'Delete';
    buttonComplete.textContent = 'x';
    buttonComplete.name = nombre;
    buttonComplete.addEventListener('click',deleteProduct)
    divProduct.appendChild(buttonComplete)

    return divProduct;
}




