let body = document.querySelector("body");
let tenis = document.querySelector(".tenis");
let botao = document.querySelector(".buttoncart");

function mudarVisual(cor, imagem) {
  tenis.classList.add("troca-efeito");

  body.style.background = cor;

  botao.style.background = cor;

  setTimeout(() => {
    tenis.src = imagem;
    tenis.classList.remove("troca-efeito");
  }, 550);
}
