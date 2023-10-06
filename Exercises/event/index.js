// Click
const buttonClick = document.querySelector('button');

const alertClick = () => {
    const click = buttonClick.innerText === 'click'

    console.log(click ? buttonClick.innerText = 'clickme' : buttonClick.innerText = 'click')
    alert('el valor del texto del boton ahora es:' + buttonClick.innerText)

} 

// buttonClick.addEventListener('click',alertClick)
buttonClick.onclick = alertClick;

// -------------------------------------------------------------------------------------------------- //

// Change 
// textbox:
// Select: 
// Se dispara cuando se hace una selección y cambia el valor
const select = document.querySelector('.select')
const result = document.querySelector('.result');

const changeSelect = (event) => {
    const value = event.target.value != '';
    result.textContent = `Seleccionaste el valor: ${ value ? event.target.value  : 'No haz seleccionado nada' }`;
    alert(`haz seleccionado el valor: ${event.target.value}`)
}; 

select.addEventListener('change',changeSelect);

// input text:
// Se dispara cuando se pierde el focus en el input

const input = document.querySelector('input');

const changeInput = (event) => {
    const show = document.getElementById('show');
    show.textContent = event.target.value;
}; 

input.addEventListener('change',changeInput); 

// input checkbox:

const inputCheck = document.getElementById('inputCheck'); 

const checkInputCheck = (event) => {
    const check = event.target.checked;
    const divCheck = document.getElementById('divCheck'); 
    divCheck.textContent = `${check ? 'El check está activo' : 'El check está inactivo'}`
}; 

inputCheck.addEventListener('change',checkInputCheck);


//---------------------------------------------------------------------------------------------------------// 
//Copy, paste, cut: 
const blockCopy = document.getElementById('blockCopy');

const alertBlockCopy = (event) => {
    alert(`El  ${event.type} Esta bloqueado`);
    event.preventDefault();
}
blockCopy.addEventListener('copy',alertBlockCopy)
blockCopy.addEventListener('paste',alertBlockCopy);
blockCopy.addEventListener('cut',alertBlockCopy);

//---------------------------------------------------------------------------------------------------------// 
//Scroll, Scrollend

document.addEventListener('scroll', (event) => {
    console.log(event);
    alert('Scroll');
});


//---------------------------------------------------------------------------------------------------------// 
//Submit

function logSubmit(event) {
    alert(`nombre: ${event.target[0].value}`)
    alert(`apellido: ${event.target[1].value}`)
    event.preventDefault();
}
const form = document.getElementById("form");
form.addEventListener("submit", logSubmit);

//---------------------------------------------------------------------------------------------------------// 
// dblClick: Se hace click derecho

const dblClick = document.getElementById('dblClick')

dblClick.addEventListener("dblclick", (event) => {
    alert('Doble click')
});

