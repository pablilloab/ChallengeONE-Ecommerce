import { data } from '../data/productos.js';

const newProducto = {
    id:0,
    img:"",
    title:"",
    desc:"",
    precio:0
}

let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    let form = document.getElementById("alta");

    
    newProducto.title = form.nombre.value;
    newProducto.desc = form.descripcion.value;
    newProducto.precio = form.precio.value;
    newProducto.img = form.imagen.value;

    let categoria = form.categoria.value;
    console.log(categoria)

    console.log(data.starWars);
    
    switch (categoria) {
        case "star":
            newProducto.id = data.starWars.length + 1;
            data.starWars.push(newProducto);
            console.log(data.starWars);
            break;
        case "consola":
            newProducto.id = data.consolas.length + 1;
            data.consolas.push(newProducto);
            break;
        case "diversos":
            newProducto.id = data.diversos.length + 1;
            data.diversos.push(newProducto);
            break;    
    }


})


