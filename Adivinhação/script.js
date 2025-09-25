// Gera número aleatório entre 0 e 100
//let numeroSecreto = Math.floor(Math.random() * 101); o computador escolhe o número
let numeroSecreto = 25; // para testes, o número é fixo

function verificar() {
  let palpite = parseInt(document.getElementById("palpite").value);
  let mensagem = document.getElementById("mensagem");

  if (palpite === numeroSecreto) {
    mensagem.textContent = "Parabéns! Você acertou 🎉";
    mensagem.style.setProperty("color", "green"); // verde no acerto
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = "O número é maior!";
    mensagem.style.setProperty("color", "red");   // vermelho no erro
  } else {
    mensagem.textContent = "O número é menor!";
    mensagem.style.setProperty("color", "red");   // vermelho no erro
  }
}

