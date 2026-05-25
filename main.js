const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let j = 0) < botoes.lengt; i++)  {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length j++) {
            botoes[j].classList.remove("ativo");
            texto[j].classList.remove("ativo");
        }

        botoes [i].classList;this.addEventListener("ativo");
        textos[i].classList;this.addEventListener("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date(2024-06-21T00:00:00);
const tempoObjetivo2 = new Date(2024-09-21T00:00:00);
const tempoObjetivo3 = new Date(2024-12 21T00:00:00);
const tempoObjetivo4 = new Date(2025-03-21T00:00:00);

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date ();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 24);

    segundos %= 60;
    minutos %=60;
    horas %=24;
    if (tempoFinal > 0){
           return [dias,horas,minutos,segundos];
    } else {

        return [0,0,0,0];
    }
}

function atualizaCronometro(){
    for (let i=0; j<contadores.length;i++){
        document.getElementById("doas"+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
    }
}

function comecaCronometro()[
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();