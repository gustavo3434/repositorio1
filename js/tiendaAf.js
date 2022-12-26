const productos = [{nombre:"GORRA ELEMENT WOLFEBORO",color: "negro", precio: 11999, img:"./multimedia/accsesorios/gorra_element.jpg"},
{nombre:"MOCHILA ZIMITH BOMBIT", color: "rosa",precio: 15000, img: "./multimedia/accsesorios/mochila_zimith.jpg"},
{nombre:"GORRO C1RCA WALTER", color: "rojo",precio: 10000, img: "./multimedia/accsesorios/gorro_c1rca.jpg" },
{nombre:"RELOJ CAPTAIN FIN HURRICANE", color: "verde",precio: 31500, img:"./multimedia/accsesorios/reloj_captainFin.jpg"  },
{nombre:"GORRO BILLABONG ARCADE", color: "negro",precio: 6500, img:"./multimedia/accsesorios/gorro_billabong.jpg"  },
{nombre:"CINTO ZIMITH CUERO MARS", color: "marron",precio: 3500, img:"./multimedia/accsesorios/cinto_zimith.jpg"},
{nombre:"MOCHILA ZIMITH MAXIC", color: "gris",precio: 13500, img:"./multimedia/accsesorios/MOCHILA_ZIMITH_MAXIC.jpg" },
{nombre:"GORRA ZIMITH FOMU", color: "azul",precio: 7500, img:"./multimedia/accsesorios/GORRA_ZIMITH_FOMU.jpg"  },
{nombre:"ZAPATILLAS NIKE SB JANOSKI", color: "negro",precio: 21999, img:"./multimedia/calzado/nike_janoski_negra.jpg" },
{nombre:"ZAPATILLAS ADIDAS CONTINEN", color: "blanco",precio: 29999, img:"./multimedia/calzado/adidas_blancas.jpg" },
{nombre:"ZAPATILLAS VANS BMX SLIP-ON", color: "gris",precio: 24499, img:"./multimedia/calzado/vans_bmx.jpg" },
{nombre:"ZAPATILLAS NEW BALANCE 574", color: "crema",precio: 36399, img:"./multimedia/calzado/newBalance_mujer.jpg" },
{nombre:"ZAPATILLAS RUSTY ANDREUSS", color: "negro",precio: 17999, img:"./multimedia/calzado/rusty_negras.jpg" },
{nombre:"ZAPATILLAS LACOSTE T-POINT", color: "blanco",precio: 40300, img:"./multimedia/calzado/lacoste_blanca_hombre.jpg" },
{nombre:"ZAPATILLAS VANS ULTRA RANGE", color: "negro",precio: 29000, img: "./multimedia/calzado/ZAPATILLAS_VANS_ULTRA_RANGE.jpg"},
{nombre:"ZAPATILLAS RUSTY FAIRFAX", color: "negro",precio: 19000, img:"./multimedia/calzado/ZAPATILLAS_RUSTY_FAIRFAX.jpg"},
{nombre:"MONOPATIN COBRA", color: "gris",precio: 39000, img:"./multimedia/deportes/monopatin_cobra.jpg" },
{nombre:"BICICLETA BMX", color: "blanco",precio: 139000, img:"./multimedia/deportes/bicicleta_bmx.jpg" },
{nombre:"SKATE FREE VIBE", color: "violeta",precio: 59000, img:"./multimedia/deportes/skate_freeVibe.jpg" },
{nombre:"TABLA CAPTAIN FIN", color: "rosa",precio: 49000, img:"./multimedia/deportes/tabla_captainFin_rosa.jpg" },
{nombre:"ROLLERS START", color: "gris",precio: 39000, img:"./multimedia/deportes/rollers_start.jpg" },
{nombre:"SKATE PROGRESSIVE", color: "amarillo",precio: 69000, img:"./multimedia/deportes/skate_progressive.jpg" },
{nombre:"PATINES ARTISTICOS STARK", color: "blanco",precio: 35000, img:"./multimedia/deportes/PATINES_ARTISTICOS_STARK.jpg" },
{nombre:"TABLA SKATE REE VIBE", color: "rosa",precio: 45000, img:"./multimedia/deportes/TABLA_SKATE_FREE_VIBE.jpg" },
{nombre:"REMERA ONEILL MONTREAL", color: "blanco",precio: 5000, img:"./multimedia/hombre/remera_oneil.jpg" },
{nombre:"BUZO VULK", color: "negro",precio: 15000, img:"./multimedia/hombre/buzo_vulk.jpg" },
{nombre:"CAMPERA ELEMENT SENDA", color: "verde",precio: 17000, img:"./multimedia/hombre/campera_element.jpg" },
{nombre:"REMERA C1RCA OUTLINE", color: "blanco",precio: 7000, img:"./multimedia/hombre/remera_blanca.jpg" },
{nombre:"PANTALON CHAMPION", color: "naranja",precio: 15000, img:"./multimedia/hombre/pantalon_champions.jpg" },
{nombre:"PANTALON JOGGER CAPTAIN FIN", color: "negro",precio: 13000, img:"./multimedia/hombre/pantalonJogger_captainFin.jpg"  },
{nombre:"REMERA VANS CORE BASIC", color: "blanco",precio: 8000, img:"./multimedia/hombre/REMERA_VANS_CORE_BASIC.jpg" },
{nombre:"JOGGING RUSTY CLASSIC", color: "azul",precio: 16000, img:"./multimedia/hombre/JOGGING_RUSTY_CLASSIC.jpg" },

]
let filt = document.querySelector("#filtro")
const inputSearch = document.querySelector(".busqueda")
const buscar = document.querySelector("#buscar")

const armarTabla = (prod) => {
    return `<div class="contenedor prod">
                <button type="button" class="carrito btn btn-dark btn-sm">+</button>
                <img src="${prod.img}" >
                <a href="#" class="nombre_producto">${prod.nombre}</a>
                <a href="#" class="precio"><br>$${prod.precio}</a>
            </div>`
            
}

const filtrado = () => {
    let parametro = inputSearch.value.trim().toUpperCase()
    let resultados = productos.filter(produ => produ.nombre.includes(parametro))
    if (resultados.length > 0) {
        cargarProductos(resultados)
    }

}

const cargarProductos = (array) => {
    let tabla = ""
    if (array.length > 0 ) {
        array.forEach((produc) => {
            tabla += armarTabla(produc)
        })
        filt.innerHTML = tabla
    }
    
}


const products = document.querySelectorAll(".prod")

products.forEach((element) => {
    element.addEventListener("click", (e) => {
        leerDatos(e.target.parentElement)
    })
});

let productosCarrito = []

function leerDatos(producto) {
    const infoProducto = {
        nombre: document.querySelector(".nombre_producto").textContent,
        precio: document.querySelector(".precio").textContent,
    };
    
}

buscar.addEventListener("click",() => {
    console.log("Busco")
    filtrado ()
})