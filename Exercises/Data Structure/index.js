// tablas hash: 
// Estas es una estructura de datos que relaciona con el termino clave valor, para acceder a un valor debe  ser 
// por su clave. En JavaScript la forma de estructura hash son los objetos, ya que estos tienen la propiedad clave valor 
// ejemplo : 

//Sacar de este objeto el valor de nombre, el apellido, la edad y mostrarlos en consola. 
const hash  = {
    nombre: "Juan",
    apellido: "Posada",
    edad: 25
}

console.log(hash.nombre,hash.apellido, hash.edad)

//---------------------------------------------------------------------------------------------------------------------//

// Listas
// Esta estructura de datos esta conformada por una lista de elementos de manera ordenada, uno después de el otro y para poder 
// acceder a los elementos dentro de esta lista, debe ser en orden por ende si requerimos un valor en una posición especifica, debemos 
// recorrer toda la lista
// ejemplo : 

//Mostrar por consola el valor que sea de tipo numerico que haya dentro de la lista. 
const list = ["Juan","Posada",25]; 

for(let i = 0; list.length > i; i++ ){
    typeof list[i] === typeof 1 ?  console.log(list[i]) : ""
}



