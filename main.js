let botaoAcao = document.querySelector('#teste')
let resultado;

botaoAcao.addEventListener("click", function(){
    window.alert("isso nao pode")
})

function start(){
   let primeiroNome =  window.prompt("Digite seu  primeiro nome")
   let sobrenome=  window.prompt("Digite seu sobrenomenome")
   resultado = window.alert(primeiroNome + " " + sobrenome)

}