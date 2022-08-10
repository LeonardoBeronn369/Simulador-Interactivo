/*
function nuevaColeccion() {
    let prenda;
    do {
        prenda = prompt(" Qué estás buscando? \n1)Jeans \n2)Remera \n3)Camisa");
    } while (prenda != 1 && prenda != 2 && prenda != 3);
  
    switch (prenda) {
      case "1":
        return "jeans";
      case "2":
        return "remera";
      case "3":
        return "camisa";
    }
  }

 
function precios(prenda) {
    if (prenda === "jeans") {
      return 11000;
    } else if (prenda === "remera") {
      return 6000;
    } else {
      return 9000;
    }
  }
   

let cantidad;
let descuento;
let compra;
let pagar;

function calcular(precio){
    cantidad = parseFloat(prompt("Ingresar cantidad"));
    compra = precio * cantidad;
    descuento = compra * 0.15
    pagar = compra - descuento;
    alert(productoSeleccionado.toUpperCase() + "\nEl descuento es: " + descuento +"\nEl total es: " + pagar);
}

let productoSeleccionado = nuevaColeccion();
let precioProd = precios(productoSeleccionado);

calcular(precioProd);

*/



// Array

const coleccion = ["jeans", "remera", "camisa"];


function Prendas() {
  for (let i = 0; i < coleccion.length; i++){
    console.log(coleccion[i])
  }
} 

function agregarPrendas(){
  let nuevaPrenda = prompt("Agrega una prenda a tu colección: ");
  let resultado = coleccion.includes(nuevaPrenda);
  if(!resultado) {
    coleccion.push(nuevaPrenda)
  } else {
    console.log("Ya tienes", nuevaPrenda, "elige  prenda!")
  }
}

function quitarPrenda() {
  let eliminaPrenda = prompt("Ingresa una prenda que no necesites");
  let indice = coleccion.indexOf(eliminaPrenda)
  if(indice !== -1) {
    let resultado = coleccion.splice(indice, 1)
    console.log("Ya no tienes esta prenda", resultado)
  } else{
    console.error("No se encuentra esa prenda en tu Coleccion", eliminaPrenda)
  }
}

agregarPrendas()
quitarPrenda()
console.log(coleccion)
