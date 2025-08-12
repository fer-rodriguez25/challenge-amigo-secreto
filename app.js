let listaAmigoSecreto = [];
const numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    const elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
    const nombreAmigo = document.getElementById('amigo').value.trim();

    if (nombreAmigo === "") {
        resultado.innerHTML = `<li>🎉 POR FAVOR, INGRESE UN NOMBRE VALIDO</li>`;
        //alert("Por favor, ingrese un nombre válido."); no va, aparece  cartelito
    } else if (listaAmigoSecreto.length >= numeroMaximo) {
        resultado.innerHTML = `<li>YA SE INGRES0 EL NUMERO MAXIMO DE AMIGOS</li>`;
        //alert("Ya se ingresó el número máximo de amigos."); cartelito
    } else if (listaAmigoSecreto.includes(nombreAmigo)) {
        resultado.innerHTML = `<li>🎉 ESE NOMBRE YA FUE INGRESADO, ESCRIBA OTRO NOMBRE</li>`;
        //alert("Este nombre ya fue ingresado."); no va, aparece cartelito
        limpiarCaja();
    } else {
        listaAmigoSecreto.push(nombreAmigo);
        actualizarListaVisual();
        limpiarCaja();
    }
}

function actualizarListaVisual() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    for (let i = 0; i < listaAmigoSecreto.length; i++) {
    let item = document.createElement('li');
    item.textContent = listaAmigoSecreto[i];
    lista.appendChild(item);
}
   
 
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (listaAmigoSecreto.length === 0) {
        resultado.innerHTML = `<li>LA LISTA ESTA VACIA INGRESE AL MENOS UN NOMBRE</li>`;
        //alert("La lista está vacía. Agrega al menos un nombre."); no va
    } else {
        const indiceAleatorio = Math.floor(Math.random() * listaAmigoSecreto.length);
        const amigoSorteado = listaAmigoSecreto[indiceAleatorio];

        resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
        limpiarCaja();
    }
}








/* ORIGINAL
let listaAmigoSecreto = [];
const numeroMaximo = 20;

function asignarTextoElemento(elemento, texto) {
    const elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
    const nombreAmigo = document.getElementById('amigo').value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (listaAmigoSecreto.length >= numeroMaximo) {
        alert("Ya se ingresó el número máximo de amigos.");
        return;
    }

    if (listaAmigoSecreto.includes(nombreAmigo)) {
        alert("Este nombre ya fue ingresado.");
        limpiarCaja();
        return;
    }

    listaAmigoSecreto.push(nombreAmigo);
    actualizarListaVisual();
    limpiarCaja();
}

function actualizarListaVisual() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar lista previa

    listaAmigoSecreto.forEach((amigo) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigoSecreto.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigoSecreto.length);
    const amigoSorteado = listaAmigoSecreto[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

*/










/*
let listaAmigoSecreto = [];
const numeroMaximo = 20;

function asignarTextoElemento(elemento, texto) {
    const elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
    const nombreAmigo = document.getElementById('amigo').value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre válido.");
    } else {
        if (listaAmigoSecreto.length >= numeroMaximo) {
            alert("Ya se ingresó el número máximo de amigos.");
        } else {
            if (listaAmigoSecreto.includes(nombreAmigo)) {
                alert("Este nombre ya fue ingresado.");
                limpiarCaja();
            } else {
                listaAmigoSecreto.push(nombreAmigo);
                actualizarListaVisual();
                limpiarCaja();
            }
        }
    }
}

function actualizarListaVisual() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    listaAmigoSecreto.forEach((amigo) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigoSecreto.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre.");
    } else {
        const indiceAleatorio = Math.floor(Math.random() * listaAmigoSecreto.length);
        const amigoSorteado = listaAmigoSecreto[indiceAleatorio];

        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
    }
}




const listaAmigoSecreto = [];
const numeroMaximo = 10;

function mostrarMensaje(texto) {
  const mensaje = document.getElementById('mensaje');
  mensaje.textContent = texto;
}

function limpiarCaja() {
  document.getElementById('amigo').value = "";
}

function actualizarListaVisual() {
  const lista = document.getElementById('lista');
  lista.innerHTML = "";
  listaAmigoSecreto.forEach(nombre => {
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function agregarAmigo() {
  const nombreAmigo = document.getElementById('amigo').value.trim();

  if (nombreAmigo === "") {
    mostrarMensaje("⚠️ Por favor, ingrese un nombre válido.");
  } else {
    if (listaAmigoSecreto.length >= numeroMaximo) {
      mostrarMensaje("⚠️ Ya se ingresó el número máximo de amigos.");
    } else {
      if (listaAmigoSecreto.includes(nombreAmigo)) {
        mostrarMensaje("⚠️ Este nombre ya fue ingresado.");
        limpiarCaja();
      } else {
        listaAmigoSecreto.push(nombreAmigo);
        actualizarListaVisual();
        limpiarCaja();
        mostrarMensaje("");
      }
    }
  }
}

function sortearAmigo() {
  if (listaAmigoSecreto.length === 0) {
    mostrarMensaje("La lista está vacía. Agrega al menos un nombre.");
  } else {
    const indiceAleatorio = Math.floor(Math.random() * listaAmigoSecreto.length);
    const amigoSorteado = listaAmigoSecreto[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
    mostrarMensaje("");
  }
}
*/