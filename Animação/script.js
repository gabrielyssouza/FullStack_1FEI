const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

// (coração que segue o mouse) 
const img = new Image();
img.src = "https://cdn-icons-png.flaticon.com/512/1077/1077035.png"; // coração rosa

let x = canvas.width / 2;
let y = canvas.height / 2;
const imgWidth = 50;
const imgHeight = 50;

let destinoX = x;
let destinoY = y;

//  Corações flutuando (animação de fundo)
const coracoes = [];
for (let i = 0; i < 15; i++) {
  coracoes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 5 + Math.random() * 5,
    speed: 0.5 + Math.random() * 0.5,
    alpha: 0.3 + Math.random() * 0.5
  });
}

//  Controle do mouse 
canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  // Impede que a imagem saia do canvas
  destinoX = Math.min(Math.max(mouseX, imgWidth / 2), canvas.width - imgWidth / 2);
  destinoY = Math.min(Math.max(mouseY, imgHeight / 2), canvas.height - imgHeight / 2);
});

//  Desenho 
function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Fundo com corações flutuando 
  coracoes.forEach((c) => {
    ctx.globalAlpha = c.alpha;
    ctx.fillStyle = "#f06292";
    ctx.beginPath();
    ctx.moveTo(c.x, c.y);
    ctx.bezierCurveTo(c.x - c.size / 2, c.y - c.size / 2, c.x - c.size, c.y + c.size / 2, c.x, c.y + c.size);
    ctx.bezierCurveTo(c.x + c.size, c.y + c.size / 2, c.x + c.size / 2, c.y - c.size / 2, c.x, c.y);
    ctx.fill();

    c.y -= c.speed;
    if (c.y < -10) {
      c.y = canvas.height + 10;
      c.x = Math.random() * canvas.width;
    }
  });
  ctx.globalAlpha = 1;

  // Movimento suave da imagem
  x += (destinoX - x) * 0.1;
  y += (destinoY - y) * 0.1;

  // Desenha o coração principal
  ctx.drawImage(img, x - imgWidth / 2, y - imgHeight / 2, imgWidth, imgHeight);

  requestAnimationFrame(desenhar);
}

img.onload = desenhar;
