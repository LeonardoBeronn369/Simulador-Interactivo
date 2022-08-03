
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
      return 500;
    } else if (prenda === "remera") {
      return 600;
    } else {
      return 1400;
    }
  }
   

let cantidad;
let precio = precios();
let descuento;
let compra;
let pagar;

function calcular(){
    cantidad = parseFloat(prompt("Ingresar cantidad"));
    compra = precio * cantidad;
    descuento = compra * 0.15
    pagar = compra - descuento;
    alert(productoSeleccionado.toUpperCase() + "\nEl descuento es: " + descuento +"\nEl total es: " + pagar);
}

let productoSeleccionado = nuevaColeccion();
let precioProd = precios(productoSeleccionado);

calcular()


