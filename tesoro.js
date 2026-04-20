const tamaño = 20;
const maximo = 5;
let intentos = 0;
let juegoTerminado = false;
let tesoroX, tesoroY;

const tableroElemento = document.getElementById('tablero');
const mensajeElemento = document.getElementById('mensaje');
const dotsBar = document.getElementById('puntos');

function initGame() {
    intentos = 0;
    juegoTerminado = false;
    tesoroX = Math.floor(Math.random() * tamaño);
    tesoroY = Math.floor(Math.random() * tamaño);

    tableroElemento.innerHTML = '';
    dotsBar.innerHTML = '';
    mensajeElemento.textContent = 'Haz clic en una casilla. Tienes 5 intentos.';
    mensajeElemento.style.color = '';

    for (let i = 0; i < maximo; i++) {
        const punto = document.createElement('div');
        punto.classList.add('intentos');
        punto.id = 'punto-' + i;
        dotsBar.appendChild(punto);
    }

    for (let f = 0; f < tamaño; f++) {
        for (let c = 0; c < tamaño; c++) {
            const casilla = document.createElement('div');
            casilla.classList.add('casilla');
            casilla.dataset.fila = f;
            casilla.dataset.col = c;
            casilla.addEventListener('click', verificarIntento);
            tableroElemento.appendChild(casilla);
        }
    }
}

function verificarIntento(e) {
    if (juegoTerminado || e.target.classList.contains('fallida')) return;

    const filaClick = parseInt(e.target.dataset.fila);
    const colClick = parseInt(e.target.dataset.col);

    document.getElementById('punto-' + intentos).classList.add('usado');
    intentos++;

    if (filaClick === tesoroX && colClick === tesoroY) {
        e.target.classList.add('tesoro');
        e.target.innerText = '★';
        mensajeElemento.textContent = '¡Encontraste el tesoro!';
        mensajeElemento.style.color = '#3B6D11';
        juegoTerminado = true;
    } else {
        e.target.classList.add('fallida');
        e.target.innerText = '✕';

        if (intentos >= maximo) {
            mensajeElemento.textContent = 'Perdiste. El tesoro estaba en la fila ' + tesoroX + ', columna ' + tesoroY + '.';
            mensajeElemento.style.color = '#993C1D';
            marcarTesoro();
            juegoTerminado = true;
        } else {
            const pista = obtenerPista(filaClick, colClick);
            mensajeElemento.textContent = 'Intento ' + intentos + ' de ' + maximo + '. El tesoro está al ' + pista + '.';
            mensajeElemento.style.color = '';
        }
    }
}

function obtenerPista(f, c) {
    let vertical = '';
    let horizontal = '';

    if (f > tesoroX) vertical = 'Norte';
    else if (f < tesoroX) vertical = 'Sur';

    if (c > tesoroY) horizontal = 'Oeste';
    else if (c < tesoroY) horizontal = 'Este';

    return vertical + horizontal;
}

function marcarTesoro() {
    const casillas = document.querySelectorAll('.casilla');
    casillas.forEach(c => {
        if (parseInt(c.dataset.fila) === tesoroX && parseInt(c.dataset.col) === tesoroY) {
            c.classList.add('tesoro');
            c.innerText = '★';
        }
    });
}

document.getElementById('btnReinicio').addEventListener('click', initGame);

initGame();
