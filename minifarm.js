// VARIABLES
// Mover lobo en div con id "arrastrar"
let arrastraLobo = new Movimiento(document.getElementById("moverLobo"));

let vp = document.getElementById("minifarm");
let papel = vp.getContext("2d");
let ruta = "img/";
let espacio = 60;
let alx = 0;
let aly = 6;

let lobo = {
    url: ruta + "lobo.png",
    cargaOK: false
};
lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
let xLobo = aleatorio(alx,aly) * espacio;
let yLobo = aleatorio(alx,aly) * espacio;

let fondo = {
    url: ruta + "tile.png",
    cargaOK: false
};
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;

let vaca = {
    url: ruta + "vaca.png",
    cargaOK: false
};
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
let xVaca = new Array();
let yVaca = new Array();

let cerdo = {
    url: ruta + "cerdo.png",
    cargaOK: false
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
let xCerdo = new Array();
let yCerdo = new Array();

let pollo = {
    url: ruta + "pollo.png",
    cargaOK: false
};
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
let xPollo = new Array();
let yPollo = new Array();

let cantidadVacas = aleatorio(0, 5);
document.getElementById("n-vacas").value = cantidadVacas;
let cantidadPollos = aleatorio(0, 5);
document.getElementById("n-pollos").value = cantidadPollos;
let cantidadCerdos = aleatorio(0, 5);
document.getElementById("n-cerdos").value = cantidadCerdos;

console.log("Cantidad de vacas: " + cantidadVacas);
console.log("Cantidad de pollos: " + cantidadPollos);
console.log("Cantidad de cerdos: " + cantidadCerdos);

// EVENTOS
// El evento load carga una imagen sobre otra cada vez
fondo.imagen.addEventListener("load", cargarFondo);
lobo.imagen.addEventListener("load", cargarLobo);
vaca.imagen.addEventListener("load", cargarVaca);
cerdo.imagen.addEventListener("load", cargarCerdo);
pollo.imagen.addEventListener("load", cargarPollo);

document.addEventListener("keydown", moverLobo);

// FUNCIONES
function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVaca()
{
    vaca.cargaOK = true;
    mantenerPosicion();
}

function cargarCerdo()
{
    cerdo.cargaOK = true;
    mantenerPosicion();
}

function cargarPollo()
{
    pollo.cargaOK = true;
    mantenerPosicion();
}

function cargarLobo()
{
    lobo.cargaOK = true;
    dibujar();
}

function mantenerPosicion() {
    if (vaca.cargaOK) {
        for (let i = 0; i < cantidadVacas; i++) {
            var x = aleatorio(alx, aly);
            var y = aleatorio(alx, aly);
            x = x * espacio;
            y = y * espacio;
            xVaca[i] = x;
            yVaca[i] = y;
        }
    }
    if (pollo.cargaOK) {
        for (let i = 0; i < cantidadPollos; i++) {
            var x = aleatorio(alx, aly);
            var y = aleatorio(alx, aly);
            x = x * espacio;
            y = y * espacio;
            xPollo[i] = x;
            yPollo[i] = y;
        }
    }
    if (cerdo.cargaOK) {
        for (let i = 0; i < cantidadCerdos; i++) {
            var x = aleatorio(alx, aly);
            var y = aleatorio(alx, aly);
            x = x * espacio;
            y = y * espacio;
            xCerdo[i] = x;
            yCerdo[i] = y;
        }
    }
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        for(let i=0; i < cantidadVacas; i++)
        {
            papel.drawImage(vaca.imagen, xVaca[i], yVaca[i]);
        }
    }
    if(cerdo.cargaOK)
    {
        for(let i=0; i < cantidadCerdos; i++)
        {
            papel.drawImage(cerdo.imagen, xCerdo[i], yCerdo[i]);
        }
    }
    if(pollo.cargaOK)
    {
        for(let i=0; i < cantidadPollos; i++)
        {
            papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);
        }
    }
    if(lobo.cargaOK)
    {
        papel.drawImage(lobo.imagen, xLobo, yLobo);
    }
}

function moverLobo(evento) {
    let movimiento = espacio;
    let teclas = {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    };
    switch (evento.keyCode) {
        case teclas.UP:
        if (yLobo > 0) {
            yLobo = yLobo - movimiento;
            dibujar();
        }
    break;
        case teclas.DOWN:
        if (yLobo < 420) {
            yLobo = yLobo + movimiento;
            dibujar();
        }
    break;
        case teclas.LEFT:
        if (xLobo > 0) {
            xLobo = xLobo - movimiento;
            dibujar();
        }
    break;
        case teclas.RIGHT:
        if (xLobo < 420) {
            xLobo = xLobo + movimiento;
            dibujar();
        }
    break;
    default:
        console.log("Otra tecla: " + evento.key);
    break;
    }
}
// Función que genera un número aleatorio
function aleatorio(min, max)
{
    let resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}