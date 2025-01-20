/* array com as cores */
const arrColors = [
    "#3b4a5a",  // Azul escuro
    "#4a3b42",  // Vinho escuro
    "#2f4f4f",  // Verde escuro
    "#3e2a47",  // Roxo escuro
    "#5a3b3a",  // Marrom escuro
    "#2f3b4c",  // Azul escuro acinzentado
    "#3b4e3b",  // Verde escuro mais saturado
    "#4f3b3b",  // Vermelho escuro
    "#3a4f4f",  // Verde azulado escuro
    "#2f3b4a" 
];

/*função para gerar um indice aleatório
para o arrColors*/
function getRandomIndex() {
    const randomIndex = Math.floor(arrColors.length*Math.random());
    return randomIndex;
}

/* DOM */
const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
    const color = arrColors[getRandomIndex()];
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
}

const btn = document.querySelector("#btn");

/* Atribuir a referencia da função changeBackgroundColor
ao evento de clique do botão.
Quando o botão for clicado a função será executada*/
btn.onclick = changeBackgroundColor;
