// VARIÁVEIS
// DADOS DE ENTRADA
// DADOS DE SAÍDA

const elementoResposta = document.querySelector("#resposta")
const pergunta = document.querySelector("#txt")
const butPergunta = document.querySelector('#but')
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]
function fazerPergunta() {

if(pergunta.value == "") {
  alert("Digite uma pergunta")
  return
}

butPergunta.setAttribute("disabled", true)

const divPergunta = "<div>" + pergunta.value + "</div>"

const totalRespostas = respostas.length 
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

elementoResposta.innerHTML = divPergunta + respostas[numeroAleatorio]

elementoResposta.style.opacity = 1;
// APÓS A RESPOSTA APARECCER, SUMIR
setTimeout(function() {
  elementoResposta.style.opacity = 0;
  butPergunta.removeAttribute('disabled')
}, 3000)
}