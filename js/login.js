
var alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var algarismos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letras = new Array();
var numeros = new Array();
var chave = new Array();

function separaString() {
    var senha = document.getElementById("senha").value;

    for (let i = 0; i < senha.length; i++) {

        chave.push(senha[i]);

        if (senha.charAt(i) in algarismos) {
            numeros.push(senha.charAt(i));
        } else if (senha.charAt(i) === senha.charAt(i).toUpperCase()) {
            letras.push(senha.charAt(i));
        }
    }

    if (teste()) {
        window.location.href = "ProjetoDirk.html";
        return (false)
    } else {
        alert("A senha não bate com os requisitos!")
        document.location.reload(true);
    }
}

function teste() {
    if (verificaSequencia()) {
        console.log("letra foi");
        if (verificaNumeros()) {
            console.log("numero foi");
            return true;

        }
    }
}

function verificaSequencia() {
    var isNext = false;

    for (let i = 1; i < letras.length; i++) {
        var letra1 = letras[i - 1];
        var letra2 = letras[i];

        var iL1 = alfabeto.indexOf(letra1);
        var iL2 = alfabeto.indexOf(letra2)

        if (iL2 - 1 == iL1) {
            isNext = true;
        }

        if (isNext && positionsOfLetter(letra1, letra2)) {
            console.log("letra foi");
            return true;
        }
    }
}

function positionsOfLetter(l1, l2) {
    var posicao_letra1 = [];
    for (let i = 0; i < chave.length; i++) {
        if (chave[i] == l1) {
            posicao_letra1.push(i);
        }
    }
    for (let i = 0; i < posicao_letra1.length; i++) {
        console.log(posicao_letra1[i]);
        if (chave[(posicao_letra1[i]) + 1] == l2) {
            return true;
        }

    }
    return false;
}

function verificaNumeros() {
    var n = "";
    var sequencia = false;
    chave.push("x");
    for (const i of chave) {
        if (i in algarismos) {
            sequencia = true;
        } else {
            sequencia = false;
            n = parseInt(n);
            if (n > 10 && n < 99) {
                if ((n % 3 == 0) || (n % 7 == 0)) {
                    console.log("numero foi")
                    return true;
                }
            } else {
                n = "";
            }
        }
        if (sequencia) {
            n = n + i;
        }

    }
    /*for (let i = 1; i < numeros.length; i++) {
        var letra1 = numeros[i - 1];
        var letra2 = numeros[i];
 
        if (positionsOfNumber(letra1, letra2)) {
            return true;
        }
    }
    return false;*/
}
