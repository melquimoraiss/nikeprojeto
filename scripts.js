let body = document.querySelector("body");
let tenis = document.querySelector(".tenis");
let botao = document.querySelector(".buttoncart");

function mudarVisual(cor, imagem) {
  body.style.background = cor;
  tenis.src = imagem;
  botao.style.background = cor;
}
