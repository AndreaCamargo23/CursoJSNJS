/**
 * Funciones
 * Funcion flecha, alternativas para compactar arrow
 * Funciones de expresion, no tienen un nombre
 * Se les conoce tambien como funciones anonimas
 * Primera forma, declarativa
 */


function saludar(){
console.log("Hola");
}
saludar();
var suma = function(a,b){
    return  (a+b);
}
var restar = (a,b) =>{
    return a-b;
}

//la funcion fecha tiene implicito el return
var restar = (a,b) =>a-b;

//Cuando se debe utilizar cada una, de acuerdo de que tan largo 
//Es el registro de la funcion

//ForEach solo sirve para recorrer un elemento.
var letras=['a','b','c'];
letras.forEach((elemento)=>console.log(elemento));

//push--shift--pop
//Agregar un elemento a la lista 
letras.push('f');
letras.forEach((elemento)=>console.log(elemento));
//Nos trae el primer elemento del arreglo.
letras.shift();//lo quita del arreglo
console.log(letras);
//pop impresion del ultimo elemento del arreglo
letras.pop();
console.log(letras);

/**
 * Manipulacion de arreglos
 */

//transforma un arreglo pero retorna uno nuevo y no afecta el que ya 
//se tenia
var estudiantes  =['Dayana','Pamela','Ada','Karina'];
//con map vamos a tranformar el vector a un objeto de javascript
var asistencia = estudiantes.map((nombre)=>{
    return {
        nombre:nombre,
        asistencia:false
    }
}); //recibe una funcion como parametro
console.log(estudiantes);
console.log(asistencia.length);

var productos = [
    {nombre:'camisetas',precio:15},
    {nombre:'zapatillas',precio: 20},
    {nombre:'pantalon',precio:25}
];
/*
var productosImpuestos = productos.map((producto)=>{
    producto.impuesto=.12;//aqui se modifica el objeto de productos
    return producto; 
}); */
//se puede hacer de la siguiente manera
var productosImpuestos = productos.map((producto)=>{
    return {
        ...producto,//estamos haciendo una copia del objeto producto.
        impuesto: .12
    }
}); 

/**
 * Filter
 * Filtrar elementos de un arreglo en base a una condición
 */

var estudiantes = [
    {nombre: 'Ada', edad: 22, matriculado: true},
    {nombre: 'Ada2', edad: 26, matriculado: false},
    {nombre: 'Ada3', edad: 20, matriculado: false},
    {nombre: 'Ada4', edad: 21, matriculado: true},
    {nombre: 'Ada5', edad: 19, matriculado: false}
];


var filtrado = estudiantes.filter((estudiante)=>estudiante.edad >=21 && estudiante.matriculado);
console.log(filtrado);
console.log(estudiantes);


/**
 * Reduce
 * Ayuda a reducir todo el array a un solo valor, puede
 * ser numerico o cualquier tipado
 */

var calificaciones=[3,5,9,10,10]; 
var suma = calificaciones.reduce((acomulador, calificacion)=>acomulador+calificacion,0); //la segunda es un estado inicial del acomulador
console.log(calificaciones);
console.log(suma);
console.log(suma/calificaciones.length);


var edades =[21,13,21,25,13,21,20,56,18,18]; 

var resultado = edades.reduce((acumulador,edade)=>{
    if(!acumulador[edade]){
        acumulador[edade]=1;
    }else{
        acumulador[edade]+=1; 
    }
    return acumulador;
},{});

console.log(edades);
console.log(resultado);

var ventas =[
    {nombre:'camiseta',precio:15, totalVentas:10},
    {nombre:'pantalon',precio:150, totalVentas:30},
    {nombre:'camiseta2',precio:20, totalVentas:15}
];

var resultado = ventas.reduce((productos,total)=>{
    let totalVentas = total.precio*total.totalVentas;
    productos[total.nombre]=totalVentas;
    return productos;
},{});

console.log(ventas);
console.log(resultado);

var estudiantes = [
    {nombre: 'Ada', edad: 22, matriculado: true},
    {nombre: 'Ada2', edad: 26, matriculado: false},
    {nombre: 'Ada3', edad: 20, matriculado: false},
    {nombre: 'Ada4', edad: 21, matriculado: true},
    {nombre: 'Ada5', edad: 19, matriculado: false}
];

var resultado = estudiantes.
    map((estudiante)=>estudiante.matriculado)
    .reduce((acomulador,item)=>{
        if(item){
            acomulador.matriculado+=1;
        }else{
            acomulador.noMatriculado+=1;
        }
        return acomulador; 
    },{matriculado: 0, noMatriculado:0});

console.log(estudiantes);
console.log(resultado);

/**
 * Some, Every 
 * El some verifica si almenos uno de todos los elementos cumple 
 * con una condicion especifica.
 * Every, retorna un valor logico si todos cumplen con la condición especificada. 
 */

var numeros=[1,2,3,4,5,6,7,8,0,10]; 
var numero2=[1,3,5,7,9]; 
var resultado = numero2.some((numero)=>numero%2==0);
console.log(resultado);

//Ever

var numeros=[1,2,3,4,5,6,7,8,0,10]; 
var resultado = numeros.every((numero)=>numero%2==0);
console.log(resultado);

/**
 * Find: Buscar un elemnto que cumpla con cieta condicion
 * Retorna el primer elemento que coincida con la busquedad. Solo uno
 * FindIndex: posicion del elemento buscado en el array
 * Funcion inmutable
 */

var clientes = [
    {id:1,nombre:'Ada'},
    {id:2,nombre:'Katrina'},
    {id:3,nombre:'Dayana'},
    {id:4,nombre:'Pamela'},
    {id:5,nombre:'Michell'},
    {id:16,nombre:'Laura'}
];

var cliente = clientes.find((cliente)=>cliente.id==1);
console.log(cliente);
console.log(clientes);

//FindIndex
var posicion = clientes.findIndex((cliente)=>cliente.id==2);
console.log(posicion);

/**
 * includes: Ayuda a determinar si en un arreglo existe un
 * elemento en especifico. Tambien funciona para String, 
 */

var mascotas=['perro','gato','conejo'];
var resultado = mascotas.includes('gato');
console.log(resultado);
console.log('Gabriel'.includes('s'));

/**
 * Join concatena todo lo que esta en un arreglo
 */

var elementos=['aire','fuego','agua'];
var resultado = elementos.join(' ');
console.log(resultado);

//Join Array de object
var clientes = [
    {id:1,nombre:'Ada'},
    {id:2,nombre:'Katrina'},
    {id:3,nombre:'Dayana'},
    {id:4,nombre:'Pamela'},
    {id:5,nombre:'Michell'},
    {id:16,nombre:'Laura'}
];
console.log(clientes.join());

var csvGenerator=(array,separador=',')=>{//Un parametro con valor inicial 
    let headers = Object.keys(array[0]).join(separador);
    let data = array.map((element)=> Object.values(element).join(separador));
    console.log(headers);
    data.forEach(element=>console.log(element));
}

csvGenerator(clientes);



//Object.values() recibe el objeto de los que se quiere obtener los valore. 
//Object.keys() claves de los elementos. 

/**
 * Concat: Es un metodo que permite concatenar los arreglos
 * Sort, ordenar los elementos de un array en base al codigo ascci
 * splice elemento ayuda a modificar o remover elementos de un array 
 * slice una copia del mismo array
*/
var array1=[1,2,3,4,5];
var array2=[6,7,8,9,0]; 
var array3=array1.concat(array2);
var array4 =[...array1,...array2];
console.log(array1,array2,array3,array4);
console.log(array2.sort());

var array=[1,1000,21,30,4];
//le vamos a decir que ordene en base a una resta
var ordenado = array.sort((a,b)=>a-b);
console.log(ordenado);

var nombre =['Andrea','Milena','Camargo','Gonzalez'];
nombre.splice(0,2);//empiece a eliminar desde la posicion, segun parametro la cantidad de elemento que 
//queremos eliminar. Tercer parametro remplaza o modificar
console.log(nombre);

const obj = { a: 1, b: 2, c: 3, }; const obj2 = { ...obj, a: 0, }; console.log(obj2.a, obj2.b); 

const a = { x: 1 }; const b = { x: 1 }; 
console.log( a === b);

let bear = { sound: "roar", roar(){ console.log(this.sound); } } bear.sound = "grunt"; let bearSound = bear.roar; bearSound(); 


class RainForest{ static minimumRainFall = 60; } let congo = new RainForest(); RainForest.minimumRainFall = 80; console.log(congo.minimumRainFall); 

var resultado=nombre.slice(1,2);//desde la posicion uno hasta la posicion 2
console.log(resultado);
let scores = []; scores.push(1, 2); scores.pop(); scores.push(3, 4); scores.pop(); score = scores.reduce((a, b) => a + b); console.log(score); 



const myFunc = () => { const a = 2; return () => console.log("a is " + a); }; const a = 1; const test = myFunc(); test(); 

function printA() { console.log(answer); var answer = 1; }; printA(); printA(); 

const x = 6 % 2; const y = x ? 'One': 'Two'; console.log(y); 

