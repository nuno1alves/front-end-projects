const canvas = document.getElementById("myCanvas");
const tracos = document.getElementById("tracos");
const dicas = document.getElementById("tips-output");
const ctx = canvas.getContext("2d");
const btnReiniciar = document.querySelector(".reset-btn");
const ganhouPerdeuTexto = document.getElementById('ganhou-perdeu');
let erros = 0;
let texto = ""; // Variável global para o texto selecionado no clique
let sorteio = null;
let str = []; // Usando array para armazenar os acertos e underscores

function desenharBoneco(erros) {
  if (erros >= 1) {
    /*cabeça*/
    ctx.beginPath();
    ctx.arc(234, 60, 15, 0, Math.PI * 2, false);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.stroke();
  }

  if (erros >= 2) {
    /*corpo*/
    ctx.beginPath();
    ctx.moveTo(234, 75);
    ctx.lineTo(234, 110);
    ctx.lineWidth = 7;
    ctx.strokeStyle = "grey";
    ctx.stroke();
  }

  if (erros >= 3) {
    /*braço direito*/
    ctx.beginPath();
    ctx.moveTo(234, 80);
    ctx.lineTo(200, 105);
    ctx.lineWidth = 7;
    ctx.strokeStyle = "grey";
    ctx.stroke();
  }

  if (erros >= 4) {
    /*braço esquerdo*/
    ctx.beginPath();
    ctx.moveTo(234, 80);
    ctx.lineTo(264, 105);
    ctx.lineWidth = 7;
    ctx.strokeStyle = "grey";
    ctx.stroke();
  }

  if (erros >= 5) {
    /*perna direita*/
    ctx.beginPath();
    ctx.moveTo(234, 105);
    ctx.lineTo(200, 140);
    ctx.lineWidth = 7;
    ctx.strokeStyle = "grey";
    ctx.stroke();
  }

  if (erros >= 6) {
    /*perna esquerdo*/
    ctx.beginPath();
    ctx.moveTo(234, 105);
    ctx.lineTo(264, 140);
    ctx.lineWidth = 7;
    ctx.strokeStyle = "grey";
    ctx.stroke();
  }
}

// Função para inserir os underscores
function inserirTracos(nrLetras) {
  str = Array(nrLetras).fill("_"); // Inicializa o array com os underscores
  tracos.textContent = str.join(" "); // Exibe os underscores no formato adequado
}

// Função de sorteio das palavras
import { palavrasEDicas } from "./recursos/palavras.js";

function sortearPalavra() {
  sorteio = palavrasEDicas[Math.floor(Math.random() * palavrasEDicas.length)];
  dicas.textContent = sorteio.dica;
  inserirTracos(sorteio.palavra.length); // Atualiza os tracos para o tamanho da palavra sorteada
}

// Adiciona o evento de clique aos botões
const botoes = Array.from(document.querySelectorAll(".button-group"));
for (const botao of botoes) {
  botao.addEventListener("click", function (event) {
    const botaoClicado = event.target;

    // Atualiza o texto global imediatamente após o clique
    texto = botaoClicado.textContent;

    // Chama as funções para verificar correspondência e atualizar o desenho
    encontrarCorrespondencia();
    desenharBoneco(erros);
    
    if (erros <= 6) {
      botaoClicado.disabled = true;
    }

    if (erros === 6 || (str.join('') === sorteio.palavra)) {
      btnReiniciar.classList.remove('hide');
      ganhouPerdeuTexto.textContent = (erros === 6) ? "Perdeu!!!" : "Ganhou!!!";
    }
  });
}

// Função para encontrar a correspondência da letra
function encontrarCorrespondencia() {
  let flag = false;

  for (let i = 0; i < sorteio.palavra.length; i++) {
    if (texto === sorteio.palavra[i]) {
      str[i] = texto; // Substitui o underscore pelo texto acertado na posição correta
      flag = true;
    }
  }

  if (!flag) {
    erros++; // Incrementa os erros se a letra não foi encontrada
  }

  tracos.textContent = str.join(" "); // Atualiza a exibição dos tracos após cada tentativa
}

// Inicia o sorteio da palavra ao carregar o script
sortearPalavra();
