let entrada_textarea = document.querySelector("#entrada textarea");
let salida_textarea = document.querySelector("#salida textarea");
let btn_copiar = document.querySelector(".copiar");
let salida_placeholder = document.querySelector("#salida .placeholder");
const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function validarTexto(textoEscrito) {
    let validador = textoEscrito.match(/^[a-z]*$/);

    if (!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}

function encriptar(stringEncriptada) {
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnEncriptar(){
    let textoEscrito = entrada_textarea.value;
    if (!validarTexto(textoEscrito)) {
        const textoEncriptado = encriptar(textoEscrito);

        salida_textarea.value = textoEncriptado;
        salida_textarea.style.backgroundImage = "none";
        btn_copiar.style.display = "block";
        salida_placeholder.style.display = "none";
        salida_placeholder.style.display = "none";
    }
}

function btnDesencriptar() {
    salida_textarea.value = desencriptar(entrada_textarea.value);
    entrada_textarea.value = "";
}

function desencriptar(stringDesencriptada) {
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar() {
    navigator.clipboard.writeText(salida_textarea.value);
    salida_textarea.value = "";
    alert("Texto Copiado");
}
