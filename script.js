let numCartas = Number(prompt("Selecioneo o número de cartas"));
const cartas = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];
let cartasEmbaralhadas = [];
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

let cartasGuardadas = [];

let carta1, carta2, elementoPai1, elementoPai2, cartasViradas;

let contador = 0;

function virarCarta(selecionado) {
    let mudarCarta = selecionado.childNodes;

    const frenteCarta = mudarCarta[1];
    const versoCarta = mudarCarta[3];

    frenteCarta.classList.remove('frente');
    frenteCarta.classList.add('frente2');

    versoCarta.classList.add('traseira');
    
    if (contador % 2 === 0) {
        carta1 = frenteCarta;
        carta1.parentNode.removeAttribute("onclick");
        
    } else {
        carta2 = frenteCarta;
        carta2.parentNode.removeAttribute("onclick");
        if (carta1.innerHTML === carta2.innerHTML) {
            carta1.parentNode.classList.add('desabilitarCarta');
            carta2.parentNode.classList.add('desabilitarCarta');


        } else {
            setTimeout(primeiraCarta, 1000);

            setTimeout(segundaCarta, 1000);

            carta1.parentNode.setAttribute("onclick", "virarCarta(this)");
            carta2.parentNode.setAttribute("onclick", "virarCarta(this)");
            
        }
        setTimeout(vitoria, 100);
    } 

    contador++;

}

function vitoria() {
    cartasViradas = document.querySelectorAll('.desabilitarCarta')
    if (cartasViradas.length === cartasEmbaralhadas.length) {
        alert(`Você ganhou em ${contador/2} jogadas!`);


        let continuarJogo = prompt("Você gostaria de reiniciar a partida?")

        while(continuarJogo !== "não") {
            continuarJogo = prompt("Você gostaria de reiniciar a partida?")
            if (continuarJogo === "sim") {
                break;
            }
            if (continuarJogo === "não"){
                break;
            }
        }

        if (continuarJogo === "não") {
            
        } 

        if(continuarJogo === "sim") {
            numCartas = Number(prompt("Selecioneo o número de cartas"));
            cartasEmbaralhadas = [];
            main.innerHTML = '';
            contador = 0;
            numeroCartas();
        }

    }


}

function primeiraCarta() {
    elementoPai1 = carta1.parentNode.querySelectorAll('div');
    elementoPai1[0].classList.remove('frente2');
    elementoPai1[0].classList.add('frente');
    elementoPai1[1].classList.remove('traseira')

}

function segundaCarta() {
    elementoPai2 = carta2.parentNode.querySelectorAll('div');
    elementoPai2[0].classList.remove('frente2');
    elementoPai2[0].classList.add('frente');
    elementoPai2[1].classList.remove('traseira')
}




/* function mudarCarta(elemento) {
    elemento.classList.toggle('frente');
    elemento.classList.toggle('frente2');
} */



