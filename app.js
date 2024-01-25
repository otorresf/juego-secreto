//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del numero secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';

let numeroSecreto = 0;
let intentos =0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

console.log(intentos);
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p',`Si, acerto en ${intentos} ${intentos==1 ? 'vez' : 'veces'}. Felicitaciones!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //el usuario no acerto
        if (numeroSecreto>numeroDeUsuario) {
            asignarTextoElemento('p','El numer secreto es mayor');
        } else{
            asignarTextoElemento('p','El numer secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value=('');
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
//si ya sortemaos todos los numeros
if (listaNumerosSorteados.length==numeroMaximo) {
    asignarTextoElemento('p',`Ya se sortearon todos los numeros posibles.`);
} else {
    //si el numero generado esta incluido en lista 
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else { listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
    
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
    
    }

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar msje de intervalos en numeros
    //generar el numero aleatorio
    //iniciar el numero de intentos
    condicionesIniciales();
    //desabilitar el boto de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


