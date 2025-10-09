    const canvas = document.getElementById('ex1');
    const ctx = ex1.getContext('2d');

    // Quadrados coloridos nos cantos
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, 50, 50);

    ctx.fillStyle = 'red';
    ctx.fillRect(250, 0, 50, 50);

    ctx.fillStyle = 'yellow';
    ctx.fillRect(0, 275, 25, 25);
   ctx.fillRect(0, 250, 25, 25);
   ctx.fillRect(25, 275, 25, 25);

    ctx.fillStyle = 'black';
    ctx.fillRect(275, 275, 25, 25);
    ctx.fillRect(275, 250, 25, 25);
    ctx.fillRect(250, 275, 25, 25);

    // Linhas superiores coloridas
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(150, 150);
    ctx.stroke();

    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(250, 50);
    ctx.lineTo(150, 150);
    ctx.stroke();

    // Retângulos  nas laterais
    ctx.fillStyle = 'cyan';
    ctx.fillRect(0, 150, 25, 25);
    ctx.fillRect(0, 125, 25, 25);
    ctx.fillRect(275, 138, 25, 25);


    // Linhas verdes do centro
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(0, 150);
    ctx.lineTo(300, 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(150, 300);
    ctx.stroke();

    // Arcos verdes superiores
    ctx.beginPath();
    ctx.arc(150, 150, 50, Math.PI, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(150, 150, 70, Math.PI, 1.25 * Math.PI);
    ctx.stroke();
    


// Arcos verdes inferiores
    ctx.beginPath();
    ctx.arc(150, 300, 50, Math.PI, 2 * Math.PI, true);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(150, 300, 80, Math.PI, 1.5 * Math.PI);
    ctx.stroke();
 ctx.beginPath();
   ctx.arc(150, 300, 60, 1.5 * Math.PI, 0.5 * Math.PI);
    ctx.stroke();


    // Círculo azul no topo
    ctx.beginPath();
    ctx.arc(150, 120, 15, 0, 2 * Math.PI);
    ctx.fillStyle = 'cyan';
    ctx.fill();
    ctx.lineWidth = 1;                      
    ctx.strokeStyle = "darkblue";           
    ctx.stroke();

    // Retângulo vermelho no centro 
    ctx.fillStyle = 'red';
    ctx.fillRect(110, 150, 40, 40);

    // Meia-lua ciano
    ctx.beginPath();
    ctx.arc(150, 300, 40, Math.PI, 2 * Math.PI);
    ctx.fillStyle = 'cyan';
    ctx.fill();
     ctx.lineWidth = 1;                     
    ctx.strokeStyle = "green";           
    ctx.stroke();

    // Círculos amarelos
    ctx.beginPath();
    ctx.arc(90, 210, 15, 0, 2 * Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.lineWidth = 1;                      
    ctx.strokeStyle = "darkblue";           
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(210, 210, 15, 0, 2 * Math.PI);
    ctx.fill();
    ctx.lineWidth = 1;                      
    ctx.strokeStyle = "darkblue";           
    ctx.stroke();



    //ex2



let ex2 = document.getElementById("ex2");
let ctx2 = ex2.getContext("2d");

const scale = 0.75; // fator de escala de 400 → 300

// sol
ctx2.beginPath();
ctx2.lineWidth = 2 * scale;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'yellow';
ctx2.arc(310*scale, 110*scale, 50*scale, 0, 2*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

// chão
ctx2.beginPath();
ctx2.fillStyle = '#858183ff';
ctx2.fillRect(0*scale, 320*scale, 410*scale, 85*scale);
ctx2.closePath();

// retângulo casa
ctx2.beginPath();
ctx2.fillStyle = '#c93384';
ctx2.fillRect(150*scale, 220*scale, 100*scale, 100*scale);
ctx2.closePath();

// retângulo janela esquerda
ctx2.beginPath();
ctx2.fillStyle = '#93badfff';
ctx2.fillRect(160*scale, 240*scale, 30*scale, 30*scale);
ctx2.closePath();

// retângulo janela direita
ctx2.beginPath();
ctx2.fillStyle = '#93badfff';
ctx2.fillRect(210*scale, 240*scale, 30*scale, 30*scale);
ctx2.closePath();

// retângulo porta
ctx2.beginPath();
ctx2.fillStyle = '#42170aff';
ctx2.fillRect(187*scale, 270*scale, 25*scale, 50*scale);
ctx2.closePath();

// tronco esquerda
ctx2.beginPath();
ctx2.fillStyle = '#a0462aff';
ctx2.fillRect(50*scale, 265*scale, 20*scale, 55*scale);
ctx2.closePath();

// círculo árvore esquerda
ctx2.beginPath();
ctx2.fillStyle = 'green';
ctx2.strokeStyle = 'green';
ctx2.arc(60*scale, 250*scale, 30*scale, 0, 2*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

// tronco direita
ctx2.beginPath();
ctx2.fillStyle = '#a0462aff';
ctx2.fillRect(320*scale, 310*scale, 20*scale, 55*scale);
ctx2.closePath();

// círculo árvore direita
ctx2.beginPath();
ctx2.fillStyle = 'green';
ctx2.strokeStyle = 'green';
ctx2.arc(330*scale, 290*scale, 30*scale, 0, 2*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

// teto
ctx2.beginPath();
ctx2.fillStyle = '#a03e05ff';
ctx2.strokeStyle = '#a03e05ff';
ctx2.moveTo(200*scale, 160*scale);   
ctx2.lineTo(150*scale, 220*scale);  
ctx2.lineTo(250*scale, 220*scale);
ctx2.closePath();
ctx2.fill();
ctx2.stroke();
 //agua
 
    ctx2.beginPath();
    ctx2.arc(0, 250, 40, Math.PI, 2 * Math.PI);
    ctx2.fillStyle = '#34a5daff';
    ctx2.fill();    
    ctx2.beginPath();
    ctx2.arc(150, 310, 40, Math.PI, 2 * Math.PI);
    ctx2.fillStyle = '#34a5daff';
    ctx2.fill();       
   // retângulo agua
ctx2.beginPath();
ctx2.fillStyle = '#34a5daff';
ctx2.fillRect(0*scale,320*scale, 52*scale, 90*scale);
ctx2.closePath();
ctx2.beginPath();
ctx2.fillStyle = '#34a5daff';
ctx2.fillRect(0*scale,360*scale, 200*scale, 60*scale);

ctx2.closePath();