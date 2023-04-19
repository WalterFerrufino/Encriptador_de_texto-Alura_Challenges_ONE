var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".right-container");
var result = document.querySelector(".result");
var copy = document.querySelector(".copy");
var btnCopiar = document.querySelector("#botonCopiar");

document.getElementById("right-container-2").style.display = "none";
document.getElementById("botonCopiar").style.display = "none";

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;

function encriptar() {
    ocultarAdelante();
    result.textContent = encriptarTexto(recuperarTexto());
    aparecerAdelante();
    document.getElementById("right-container-2").style.display = "table";
    document.getElementById("botonCopiar").style.display = "block";
}

function desencriptar(){
    ocultarAdelante();
    result.textContent = desencriptarTexto(recuperarTexto());
    document.getElementById("right-container-2").style.display = "table";
    document.getElementById("botonCopiar").style.display = "block";
}

function recuperarTexto() {
    var textarea = document.querySelector(".textarea");
    return textarea.value;
}

function ocultarAdelante() {
    munieco.classList.add("hide");
}

function aparecerAdelante() {
    copy.classList.add("unhide");
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++) {
        if(texto[i] == "a") {
            textoFinal += "ai"
        }
        else if(texto[i] == "e") {
            textoFinal += "enter"
        }
        else if(texto[i] == "i") {
            textoFinal += "imes"
        }
        else if(texto[i] == "o") {
            textoFinal += "ober"
        }
        else if(texto[i] == "u") {
            textoFinal += "ufat"
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++) {
        if(texto[i] == "a") {
            textoFinal += "a"
            i = i+1;
        }
        else if(texto[i] == "e") {
            textoFinal += "e"
            i = i+4;
        }
        else if(texto[i] == "i") {
            textoFinal += "i"
            i = i+3;
        }
        else if(texto[i] == "o") {
            textoFinal += "o"
            i = i+3;
        }
        else if(texto[i] == "u") {
            textoFinal += "u"
            i = i+3;
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function copiar() {
    var contenido = document.querySelector("#textToCopy");
    contenido.select();
    document.execCommand("copy");
}

const copyBtn = document.querySelector('.copy');
const resultTextarea = document.querySelector('.result');
const textarea = document.querySelector('.textarea');

copyBtn.addEventListener('click', () => {
  textarea.value = resultTextarea.value;
});
