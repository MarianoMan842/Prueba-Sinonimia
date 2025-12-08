// En este programa voy a crear un juego para practicar sinonimia y antonimia para el examen de PAU
const aclaración = '(hay que escribir la respuesta en minúsculas y con las tildes correspondientes)'
const teclaEnter = '"ENTER"'
const respuestaCorrecta = 'Respuesta correcta, presiona f5 para que genere otra palabra, si sale la misma dele al f5 otra vez'
const respuestaIncorrecta = 'Respuesta incorrecta, presiona f5 para que genere otra palabra, si sale la misma dele al f5 otra vez. Si crees que la respuesta que has escrito es válida puede que se deba a que he escrito solamente los sinonimos que salen en la RAE.'

const cont1 = document.getElementById("contenedor")

const menu = 'Pulsa "S" para practicar SINÓNIMOS o "A" para practicar ANTÓNIMOS'
cont1.innerHTML += `<p class="frase"><span class="menu">${menu}</span></p>`

document.addEventListener("keydown", (event) => {
  if (event.key === "s" || event.key === "S") {
    const sinonimos = ['artículo', 'valía', 'ausencia', 'precio', 'hostil', 'conflicto', 'sencillez', 'inquina', 'soledad'] // No pilla las tildes, eso es un problema
const sinonimo = sinonimos[Math.floor(Math.random() * sinonimos.length)]

const title = 'SINÓNIMOS'

// Cada vez que he querido añadir un tecto y modificarlo me ha tocado hacerlo así porque no he encontrado otra forma
cont1.innerHTML += `<p class="frase"><span class="title">${title}</span></p>`
cont1.innerHTML += `<p class="frase">Dime el sinónimo de <span class="variable1">${sinonimo}</span></p>`
cont1.innerHTML += `<p class="frase">Presiona la tecla <span class="teclaEnter">${teclaEnter}</span> para ingresar tu respuesta<span class="fotoEnter"></span><span class="aclaración">${aclaración}</span></p>`

// Cada condicional sirve para darle los valores de los sinonimos que sirven para cada palabra
if(sinonimo === 'valía'){
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const solucionS = prompt ('Ingresa tu respuesta: ')
    const solucionesS = ['valer', 'valor', 'mérito', 'precio', 'estimabilidad', 'preciosidad']
    if(solucionesS.includes(solucionS)){
         cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
      }
     else {
         cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
      }
  }
})
}

if(sinonimo === 'ausencia'){
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const solucionS = prompt ('Ingresa tu respuesta: ')
    const solucionesS = ['alejamiento', 'separación', 'desaparición', 'marcha', 'partida', 'abandono', 'viaje', 'huida', 'retirada', 'emigración', 'expatriación', 'destierro', 'falta', 'carencia', 'privación', 'vacío', 'insuficiencia', 'escasez', 'omisión', 'defecto', 'laguna', 'inexistencia']
    if(solucionesS.includes(solucionS)){
         cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
      }
     else {
         cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
      }
  }
})
}  

if(sinonimo === 'precio'){
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const solucionS = prompt ('Ingresa tu respuesta: ')
    const solucionesS = ['coste', 'costo', 'importe', 'valor', 'valía', 'monto', 'montante', 'tarifa', 'cantidad', 'suma', 'total', 'cuenta', 'estimación', 'tasación']
    if(solucionesS.includes(solucionS)){
         cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
      }
     else {
         cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
      }
  }
})
}    

if(sinonimo === 'hostil'){
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const solucionS = prompt ('Ingresa tu respuesta: ')
    const solucionesS = ['contrario', 'enemigo', 'adverso', 'desfavorable', 'rival', 'adversario']
    if(solucionesS.includes(solucionS)){
         cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
      }
     else {
         cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
      }
  }
})
}

if(sinonimo === 'conflicto'){
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const solucionS = prompt ('Ingresa tu respuesta: ')
    const solucionesS = ['guerra','combate', 'lucha', 'pelea', 'enfrentamiento', 'disputa', 'pugna', 'lid', 'colisión', 'choque', 'problema', 'dificultad', 'apuro', 'aprieto', 'compromiso', 'ahogo', 'brete']
    if(solucionesS.includes(solucionS)){
         cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
      }
     else {
         cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
      }
  }
})
}

if(sinonimo === 'sencillez'){
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const solucionS = prompt ('Ingresa tu respuesta: ')
    const solucionesS = ['facilidad', 'simplicidad', 'asequilibidad', 'elementalidad', 'factibilidad', 'naturalidad', 'llaneza', 'campenchanía', 'espontaneidad', 'sobriedad', 'austeridad', 'discreción']
    if(solucionesS.includes(solucionS)){
         cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
      }
     else {
         cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
      }
  }
})
}  

if(sinonimo === 'inquina'){
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const solucionS = prompt ('Ingresa tu respuesta: ')
    const solucionesS = ['aversión', 'animadversión', 'tirria', 'antipatía', 'ojeriza', 'manía', 'animosidad', 'odio', 'rabia', 'enemistad', 'rencor']
    if(solucionesS.includes(solucionS)){
         cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
      }
     else {
         cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
      }
  }
})
}

if(sinonimo === 'soledad'){
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const solucionS = prompt ('Ingresa tu respuesta: ')
    const solucionesS = ['aislamiento', 'retiro', 'abandono', 'incomunicación', 'separación', 'desamparo', 'encierro', 'clausura', 'destierro', 'melancolía', 'tristeza', 'nostalgia', 'añoranza', 'melarchía', 'soleá']
    if(solucionesS.includes(solucionS)){
         cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
      }
     else {
         cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
      }
  }
})
}

if(sinonimo === 'artículo'){
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const solucionS = prompt ('Ingresa tu respuesta: ')
    const solucionesS = ['entrada', 'noticia', 'editorial', 'crónica', 'suelto', 'gacetilla', 'apartado', 'comentario', 'reseña', 'producto', 'género', 'mercancía', 'efecto']
    if(solucionesS.includes(solucionS)){
         cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
      }
     else {
         cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
      }
  }
})
}
  }
  if(event.key === "a" || event.key === "A"){
    const antonimos = ['superficial', 'cuerdo', 'consuelo', 'intencionado', 'grosero', 'enardecidos', 'salubres'] // No pilla las tildes, eso es un problema
const antonimo = antonimos[Math.floor(Math.random() * antonimos.length)]

const title = 'ANTÓNIMOS'

// Cada vez que he querido añadir un tecto y modificarlo me ha tocado hacerlo así porque no he encontrado otra forma
cont1.innerHTML += `<p class="frase"><span class="title">${title}</span></p>`
cont1.innerHTML += `<p class="frase">Dime el antónimo de <span class="variable1">${antonimo}</span></p>`
cont1.innerHTML += `<p class="frase">Presiona la tecla <span class="teclaEnter">${teclaEnter}</span> para ingresar tu respuesta<span class="fotoEnter"></span><span class="aclaración">${aclaración}</span></p>`

// Cada condicional sirve para darle los valores de los antónimos que sirven para cada palabra
if(antonimo === 'superficial'){
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const solucionS = prompt ('Ingresa tu respuesta: ')
    const solucionesS = ['profundo', 'hondo', 'interior', 'trascendental', 'fundamental']
    if(solucionesS.includes(solucionS)){
         cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
      }
     else {
         cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
      }
  }
})
}

if(antonimo === 'cuerdo'){
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const solucionS = prompt ('Ingresa tu respuesta: ')
    const solucionesS = ['loco', 'insensato', 'chiflado']
    if(solucionesS.includes(solucionS)){
         cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
      }
     else {
         cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
      }
  }
})
}  

if(antonimo === 'consuelo'){
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const solucionS = prompt ('Ingresa tu respuesta: ')
    const solucionesS = ['desconsuelo', 'pena', 'pesar', 'tristeza', 'aflicción', 'congoja', 'abatimiento', 'desaliento', 'desánimo', 'desfallecimiento', 'angustia']
    if(solucionesS.includes(solucionS)){
         cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
      }
     else {
         cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
      }
  }
})
}    

if(antonimo === 'intencionado'){
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const solucionS = prompt ('Ingresa tu respuesta: ')
    const solucionesS = ['impremeditado']
    if(solucionesS.includes(solucionS)){
         cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
      }
     else {
         cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
      }
  }
})
}

if(antonimo === 'grosero'){
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const solucionS = prompt ('Ingresa tu respuesta: ')
    const solucionesS = ['cortés','educado', 'delicado', 'refinado', 'fino', 'culto']
    if(solucionesS.includes(solucionS)){
         cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
      }
     else {
         cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
      }
  }
})
}

if(antonimo === 'enardecido'){
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const solucionS = prompt ('Ingresa tu respuesta: ')
    const solucionesS = ['calmado', 'sereno', 'apaciguado']
    if(solucionesS.includes(solucionS)){
         cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
      }
     else {
         cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
      }
  }
})
}  

if(antonimo === 'salubre'){
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const solucionS = prompt ('Ingresa tu respuesta: ')
    const solucionesS = ['insalubre']
    if(solucionesS.includes(solucionS)){
         cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
      }
     else {
         cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
      }
  }
})
}
  }
})