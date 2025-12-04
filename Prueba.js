// En este programa voy a crear un juego para practicar sinonimia y antonimia para el examen de PAU
const sinonimos = ['valia', 'ausencia', 'precio', 'hostil', 'conflicto', 'sencillez'] // No pilla las tildes, eso es un problema
const sinonimo = sinonimos[Math.floor(Math.random() * sinonimos.length)]

const cont1 = document.getElementById("contenedor")
const cont2 = document.getElementById("respuestaCorrecta")

cont1.innerHTML += `<p class="frase">Dime el sinónimo de <span class="variable">${sinonimo}</span> (si sale valia es valía)</p>`
cont1.innerHTML += `<p class="frase">Presiona la tecla "ENTER" para ingresar tu respuesta</p>`

if(sinonimo === 'valia'){
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const solucionS = prompt ('Ingresa tu respuesta: ')
    const solucionesS = ['valer', 'valor', 'mérito', 'precio', 'estimabilidad', 'preciosidad']
    if(solucionesS.includes(solucionS)){
         document.getElementById("respuestaCorrecta").innerHTML = 'Respuesta correcta, presiona f5 para que genere otra palabra, si sale la misma dele al f5 otra vez'
      }
     else {
         document.getElementById("respuestaCorrecta").innerHTML = 'Respuesta incorrecta, presiona f5 para que genere otra palabra, si sale la misma dele al f5 otra vez. Si crees que la respuesta que has escrito es válida puede que se deba a que he escrito solamente los sinonimos que salen en la RAE.'
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
         document.getElementById("respuestaCorrecta").innerHTML = 'Respuesta correcta, presiona f5 para que genere otra palabra, si sale la misma dele al f5 otra vez'
      }
     else {
         document.getElementById("respuestaCorrecta").innerHTML = 'Respuesta incorrecta, presiona f5 para que genere otra palabra, si sale la misma dele al f5 otra vez. Si crees que la respuesta que has escrito es válida puede que se deba a que he escrito solamente los sinonimos que salen en la RAE.'
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
         document.getElementById("respuestaCorrecta").innerHTML = 'Respuesta correcta, presiona f5 para que genere otra palabra, si sale la misma dele al f5 otra vez'
      }
     else {
         document.getElementById("respuestaCorrecta").innerHTML = 'Respuesta incorrecta, presiona f5 para que genere otra palabra, si sale la misma dele al f5 otra vez. Si crees que la respuesta que has escrito es válida puede que se deba a que he escrito solamente los sinonimos que salen en la RAE.'
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
         document.getElementById("respuestaCorrecta").innerHTML = 'Respuesta correcta, presiona f5 para que genere otra palabra, si sale la misma dele al f5 otra vez'
      }
     else {
         document.getElementById("respuestaCorrecta").innerHTML = 'Respuesta incorrecta, presiona f5 para que genere otra palabra, si sale la misma dele al f5 otra vez. Si crees que la respuesta que has escrito es válida puede que se deba a que he escrito solamente los sinonimos que salen en la RAE.'
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
         document.getElementById("respuestaCorrecta").innerHTML = 'Respuesta correcta, presiona f5 para que genere otra palabra, si sale la misma dele al f5 otra vez'
      }
     else {
         document.getElementById("respuestaCorrecta").innerHTML = 'Respuesta incorrecta, presiona f5 para que genere otra palabra, si sale la misma dele al f5 otra vez. Si crees que la respuesta que has escrito es válida puede que se deba a que he escrito solamente los sinonimos que salen en la RAE.'
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
         document.getElementById("respuestaCorrecta").innerHTML = 'Respuesta correcta, presiona f5 para que genere otra palabra, si sale la misma dele al f5 otra vez'
      }
     else {
         document.getElementById("respuestaCorrecta").innerHTML = 'Respuesta incorrecta, presiona f5 para que genere otra palabra, si sale la misma dele al f5 otra vez. Si crees que la respuesta que has escrito es válida puede que se deba a que he escrito solamente los sinonimos que salen en la RAE.'
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
         document.getElementById("respuestaCorrecta").innerHTML = 'Respuesta correcta, presiona f5 para que genere otra palabra, si sale la misma dele al f5 otra vez'
      }
     else {
         document.getElementById("respuestaCorrecta").innerHTML = 'Respuesta incorrecta, presiona f5 para que genere otra palabra, si sale la misma dele al f5 otra vez. Si crees que la respuesta que has escrito es válida puede que se deba a que he escrito solamente los sinonimos que salen en la RAE.'
      }
  }
})
}