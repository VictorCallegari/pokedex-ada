// Buscar botão de troca
const  botaoAlterarTema = document.getElementById("botao-alterar-tema");

//Consultar seletor no html
const body = document.querySelector("body");

const imagemBotaoTrocardeTema = document.querySelector(".imagem-botao");

//identificando clique do usuário
botaoAlterarTema.addEventListener("click", () =>
{
    // remover o tema modo escuro para voltar ao tema claro
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    //alterna entre classes add e remove
    body.classList.toggle("modo-escuro");

    if(modoEscuroAtivo)
    {
        imagemBotaoTrocardeTema.setAttribute("src", "./src/imagens/sun.png");
    }
    else
    {
     //trocar imagem do botão alterar tema
        imagemBotaoTrocardeTema.setAttribute("src", "./src/imagens/moon.png");
    }

});