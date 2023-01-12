let numCartas = Number(prompt("Selecioneo o número de cartas"));
const cartas = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];
const cartasEmbaralhadas = [];
const main = document.querySelector("main");

numeroCartas();

function numeroCartas() {
    
    if (numCartas >= 4 && numCartas % 2 === 0 && numCartas <= 14) {
        cartas.sort(comparador);
        armazenarArrayDeCartas();
    } else {
        numCartas = Number(prompt("Selecioneo o número de cartas"));
        numeroCartas();
    }
}

function armazenarArrayDeCartas() {
    for (let indice = 0; indice < numCartas/2; indice++) {
        cartasEmbaralhadas.push(cartas[indice]);
        cartasEmbaralhadas.push(cartas[indice]);
    }
    cartasEmbaralhadas.sort(comparador); 
    imprimirCartas()
}

function comparador() { 
	return Math.random() - 0.6; 
}

function imprimirCartas() {
    for (let indice = 0; indice < cartasEmbaralhadas.length; indice++){
        main.innerHTML += `
            <div class="carta" onclick="virarCarta(this)">
                <div class="face frente" id="1"><img src="./Cartas/${cartasEmbaralhadas[indice]}" alt=""></div>
                <div class="face" id="2"><img src="./back.png" alt="atras"></div>
            </div>
            `;
    }

}

/* function virarCarta(selecionado) {

    
} */

/* function mudarCarta(elemento) {
    elemento.classList.toggle('frente');
    elemento.classList.toggle('frente2');
} */



