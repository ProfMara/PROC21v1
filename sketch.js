//declarando variáveis

var C1, C2;
var distanciaMinimaX, distanciaMinimaY;
var pause, iniciar, pauseIMG, iniciarIMG;
var musica;

function preload() {

    //carregando imagens e música
    pauseIMG = loadImage("botaoPause.png");
    iniciarIMG = loadImage("botaoPlay.png");
    musica = loadSound("musica.mp3");

}

function setup() {
    createCanvas(800, 400);

    //criando o botão pause
    pause = createSprite(600, 100, 40, 40)
    pause.addImage(pauseIMG);
    pause.scale = 0.1;
    pause.debug = true;

    //criando o botão play
    iniciar = createSprite(700, 100, 40, 40)
    iniciar.addImage(iniciarIMG);
    iniciar.scale = 0.1;
    iniciar.debug = true;

    //criando a caixa 1
    C1 = createSprite(400, 200, 100, 30);
    C1.debug = true;
    C1.shapeColor = "green";

    //criando a caixa 2
    C2 = createSprite(450, 200, 30, 100);
    C2.debug = true;
    C2.shapeColor = "green";
    C2.velocityY = 3;

}

function isTouching(A, B) {

    distanciaMinimaX = (A.width + B.width) / 2;
    distanciaMinimaY = (A.height + B.height) / 2;

    if (A.x - B.x < distanciaMinimaX &&
        B.x - A.x < distanciaMinimaX &&
        B.y - A.y < distanciaMinimaY &&
        A.y - B.y < distanciaMinimaY) {
        A.shapeColor = "red";
        B.shapeColor = "red";
        return true;
    } else {
        A.shapeColor = "green";
        B.shapeColor = "green";
        return false;
    }

}


function bounceOff(A, B) {
    if (isTouching(A, B)) {

    }

}

function draw() {
    background(255);

    //fazendo a caixa 1 seguir o mouse
    C1.position.x = World.mouseX;
    C1.position.y = World.mouseY;

    //código que verifica se a caixa 1 está tocando na caixa 2
    isTouching(C1, C2);

    //Código que verifica se o botão play foi clicado
    if (mousePressedOver(iniciar)) {
        musica.play();
    }

    //Código que verifica se o botão pause foi clicado
    if (mousePressedOver(pause)) {
        musica.stop();
    }

    drawSprites();
}