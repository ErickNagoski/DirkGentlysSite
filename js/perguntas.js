var img = document.getElementById("img");
var respostas = new Array();
var respostasCorretas = [1,2,2,1,4,2,3,3,4,3]
var n=2;

function geraPergunta() {
    if(n<=10){
        trocaImg();
    }else{
        showResultado(); ;
    }
    
}

function trocaImg(){
    document.getElementById("pergunta").innerHTML = "Pergunta: "+n+"/10";
    console.log("quiz/pergunta"+n+".png");
    document.getElementById("img").src = "quiz/pergunta"+n+".png";
    n++;
}

function btn1(){
    respostas.push(1);
    geraPergunta()
}
function btn2(){
    respostas.push(2);
    geraPergunta()
}
function btn3(){
    respostas.push(3);
    geraPergunta()
}
function btn4(){
    respostas.push(4);
    geraPergunta()
}

function resultado(){
    var soma = 0;
    for (let i = 0; i < respostas.length; i++) {
        if(respostas[i] == respostasCorretas[i]){
            console.log(respostas[i]+"-"+ respostasCorretas[i])
            soma++;
        }
    }
    soma = (soma/10)*100;

    if(soma<50){
        return ("Você acertou "+soma+"%, estude um pouco mais e tente novamente.");
    }else if(soma>50 && soma<75){
        return ("Você acertou "+soma+"%, você possui um bom conhecimento.");
    }else if(soma>75){
        return ("Você acertou "+soma+"%, parabéns ótimo conhecimento");
    }
}

function showResultado(){
    document.getElementById("quiz").innerHTML = "<div class='centro'>"+
    "<label class=''>"+ resultado() + "</label>"+
    "</br>"+
    "<button class='' onclick='recarregar()'>Regarregar</button></br>"+
    "<button class='' onClick='pgInicial()'>Página inicial</button></div>";
}

function recarregar(){
    document.location.reload(true);
}
function pgInicial(){
    window.location.href = "ProjetoDirk.html";
}