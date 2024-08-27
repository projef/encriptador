// Se hacen los comentarios correspondientes para la mejor comprension del codigo.
// Selecciona los elementos del DOM
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const Parrafo = document.querySelector(".Parrafo");

// Función para cifrar el texto
function encriptar(textoCifrado) {
  // Esta es la tabla de sustitución para cifrar
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  // Convierte todo el texto a minúsculas
  textoCifrado = textoCifrado.toLowerCase();

  // Reemplaza cada letra por su código
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (textoCifrado.includes(matrizCodigo[i][0])) {
      textoCifrado = textoCifrado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return textoCifrado;
}

// Función para decifrar el texto
function desencriptar(textoDesifrado) {
  // Esta es la tabla de sustitución para desencriptar
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  // Convierte todo el texto a minúsculas
  textoDesifrado = textoDesifrado.toLowerCase();

  // Reemplaza cada código por su letra original
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (textoDesifrado.includes(matrizCodigo[i][1])) {
      textoDesifrado = textoDesifrado.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return textoDesifrado;
}

// Función para cuando se hace clic en el botón de encriptar
function btnEncriptar() {
  // Encripta el texto del área de texto
  const textoCifrado = encriptar(textArea.value);
  // Muestra el texto encriptado en el área de mensaje
  mensaje.value = textoCifrado;
  // Limpia el área de texto
  textArea.value = "";
  // Elimina cualquier imagen de fondo del área de mensaje
  mensaje.style.backgroundImage = "none";
}

// Función para cuando se hace clic en el botón de desencriptar
function btnDesencriptar() {
  // Desencripta el texto del área de texto
  const textoDesencriptado = desencriptar(textArea.value);
  // Muestra el texto desencriptado en el área de mensaje
  mensaje.value = textoDesencriptado;
  // Limpia el área de texto
  textArea.value = "";
  // Elimina cualquier imagen de fondo del área de mensaje
  mensaje.style.backgroundImage = "none";
}

// Función para cuando se hace clic en el botón de copiar
document.querySelector(".btn-copiar").addEventListener("click", function () {
  // Selecciona el mensaje
  mensaje.select();
  // Selecciona el rango del texto (para dispositivos móviles)
  mensaje.setSelectionRange(0, 99999);
  // Copia el texto 
  document.execCommand("copy");
  // Mensaje para decir que el texto se copio
  alert("Texto copiado al portapapeles");
});

// Asigna funciones a los botones
document.querySelector(".btn-encriptar").addEventListener("click", btnEncriptar);
document.querySelector(".btn-desencriptar").addEventListener("click", btnDesencriptar);
