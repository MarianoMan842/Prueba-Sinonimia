// The code is in spanish because I wanted the game to be one way to learn synonyms and antonyms in spanish to practice to PAU in Spain. The game is oriented to students that the next year are going to enter to the university there in Spain, so if they want to read the code I thought it would be easier if it is in spanish and also easier to me to program it.

// En este programa voy a crear un juego para practicar sinonimia y antonimia para el examen de PAU
const aclaración = '(hay que escribir la respuesta en minúsculas y con las tildes correspondientes)'
const teclaEnter = '"ENTER"'
const respuestaCorrecta = 'Respuesta correcta, presione f5 para que genere otra palabra, si sale la misma dele al f5 otra vez'
const respuestaIncorrecta = 'Respuesta incorrecta, presione f5 para que genere otra palabra, si sale la misma dele al f5 otra vez. Si cree que la respuesta que ha escrito es válida puede que se deba a que he escrito solamente los sinonimos que salen en la RAE.'

const cont1 = document.getElementById("contenedor")

const menu = 'Pulse "S" para practicar SINÓNIMOS o "A" para practicar ANTÓNIMOS'
cont1.innerHTML += `<p class="frase"><span class="menu">${menu}</span></p>`
const aclaración1 = '(solo hay que darle una vez, si le da 2 no funciona y le tiene que dar al f5)'
cont1.innerHTML += `<p class="frase"><span class="aclaración1">${aclaración1}</span></p>`

let teclaUsada = false
document.addEventListener("keydown", (event) => {
  if (event.key === "s" || event.key === "S") {

    if(teclaUsada){
      return
    }

    const sinonimos = ['perfección', 'sentido', 'travieso', 'gorrino', 'pantalla', 'refugio', 'cámara', 'innovación', 'cadena', 'dictar', 'sueldo', 'notoriedad', 'estrella', 'accidente', 'artículo', 'valía', 'ausencia', 'precio', 'hostil', 'conflicto', 'sencillez', 'inquina', 'soledad', 'hábito']
    const sinonimo = sinonimos[Math.floor(Math.random() * sinonimos.length)]
    console.log(sinonimos.length)

    const title = 'SINÓNIMOS'

    // Cada vez que he querido añadir un tecto y modificarlo me ha tocado hacerlo así porque no he encontrado otra forma
    cont1.innerHTML += `<p class="frase"><span class="title">${title}</span></p>`
    cont1.innerHTML += `<p class="frase">Dime el sinónimo de <span class="sinonimo">${sinonimo}</span></p>`
    cont1.innerHTML += `<p class="frase">Presiona la tecla <span class="teclaEnter">${teclaEnter}</span> para ingresar tu respuesta<span class="fotoEnter"></span><span class="aclaración">${aclaración}</span></p>`

    // Cada condicional sirve para darle los valores de los sinonimos que sirven para cada palabra
    if(sinonimo === 'valía'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['valer', 'valor', 'mérito', 'precio', 'estimabilidad', 'preciosidad']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }

    if(sinonimo === 'meiga'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['bruja', 'hechicera']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }

    if(sinonimo === 'perfección'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['excelencia', 'bondad', 'eminencia', 'excelsitud']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }

    if(sinonimo === 'sentido'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['conmovedor', 'emotivo', 'auténtico', 'sincero', 'profundo', 'susceptible', 'quisquilloso', 'puntilloso', 'suspicaz', 'sensible', 'conocimiento', 'percepción', 'entendimiento', 'inteligencia', 'alcance', 'perceptibilidad', 'conciencia', 'noción', 'sensibilidad', 'criterio', 'juicio', 'discernimiento', 'inteligencia', 'ojo', 'cordura', 'lógica', 'cabeza', 'seso', 'finalidad', 'motivo', 'fin', 'meta', 'objetivo', 'significado', 'significación', 'acepción', 'interpretación', 'orientación', 'dirección', 'rumbo', 'derrotero']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }

    if(sinonimo === 'travieso'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['revoltoso', 'enredador', 'inquieto', 'juguetón', 'pillo', 'pícaro', 'vivaracho', 'maldoso', 'maludo', 'sajurín', 'travesía', 'tirada', 'tiramira', 'durmiente', 'travesaño']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }

    if(sinonimo === 'gorrino'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['lechón', 'cochino', 'cochinillo', 'cerdo', 'puerco', 'marrano', 'cebón', 'guarro', 'gorrín', 'chancho', 'tunco', 'sucio', 'desaseado', 'descuidado', 'desaliñado']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }

    if(sinonimo === 'pantalla'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['filtro', 'difusor', 'mampara', 'biombo', 'antipara', 'cancel', 'monitor', 'distracción', 'cine', 'cinema', 'celuloide', 'cinematografía', 'cinematógrafo', 'cubierta', 'visera', 'toldo', 'quitasol', 'persiana', 'arete', 'pendiente', 'peredengue', 'caravanas']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }

    if(sinonimo === 'refugio'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['acogida', 'amparo', 'protección', 'cobijo', 'asilo', 'abrigo', 'socorro', 'ayuda', 'albergue', 'guarida', 'resguardo']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }
    
    if(sinonimo === 'cámara'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['aposento', 'cuarto', 'estancia', 'habitación', 'pieza', 'sala', 'salón', 'cabina', 'parlamento', 'corte', 'senado', 'asamblea', 'cilla', 'cillero', 'algorfa', 'alhóndiga', 'almudí', 'silo', 'hórreo', 'granero', 'casual', 'nevera', 'frigorífico', 'cava', 'heladera', 'deposición', 'morterete', 'diarrea', 'decomposición', 'seguidillas', 'correntía', 'churria', 'cursera', 'obradera', 'colerín', 'cagalera', 'camarógrafo', 'operador', 'fotógrafo']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }

    if(sinonimo === 'innovación'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['cambio', 'mejora', 'novedad', 'originalidad', 'invención', 'perfeccionamiento']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }

    if(sinonimo === 'cadena'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['serie', 'sucesión', 'encadenamiento', 'red', 'canal', 'emisora', 'dial']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }

    if(sinonimo === 'dictar'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['leer', 'decir', 'decretar', 'promulgar', 'expedir', 'dictaminar', 'pronunciar', 'inspirar', 'sugerir', 'pronunciar', 'impartir']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }

    if(sinonimo === 'notoriedad'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['fama', 'celebridad', 'nombradía', 'renombre', 'prestigio', 'reputación']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }

    if(sinonimo === 'sueldo'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['salario', 'paga', 'jornal', 'remuneración', 'nómina', 'mensualidad', 'haberes', 'emolumentos', 'estipendio', 'soldada', 'gajes', 'quitación', 'mesada', 'sólido']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }


        if(sinonimo === 'estrella'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['astro', 'lucero', 'cometa', 'insignia', 'condecoración', 'destino', 'hado', 'sino', 'suerte', 'azar', 'fortuna', 'ventura', 'as', 'nova', 'bradita', 'púlsar', 'supernova']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }

        if(sinonimo === 'accidente'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['eventualidad', 'incidente', 'contratiempo', 'suceso', 'choque', 'catástrofe', 'desgracia', 'infortunio', 'percance', 'revés', 'indisposición', 'patatús', 'soponcio', 'síncope', 'desmayo', 'montaña', 'prominencia', 'cima', 'loma', 'accidental']
          if(soluciones.includes(solucion)){
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
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['alejamiento', 'separación', 'desaparición', 'marcha', 'partida', 'abandono', 'viaje', 'huida', 'retirada', 'emigración', 'expatriación', 'destierro', 'falta', 'carencia', 'privación', 'vacío', 'insuficiencia', 'escasez', 'omisión', 'defecto', 'laguna', 'inexistencia']
          if(soluciones.includes(solucion)){
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
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['coste', 'costo', 'importe', 'valor', 'valía', 'monto', 'montante', 'tarifa', 'cantidad', 'suma', 'total', 'cuenta', 'estimación', 'tasación']
          if(soluciones.includes(solucion)){
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
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['contrario', 'enemigo', 'adverso', 'desfavorable', 'rival', 'adversario']
          if(soluciones.includes(solucion)){
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
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['guerra','combate', 'lucha', 'pelea', 'enfrentamiento', 'disputa', 'pugna', 'lid', 'colisión', 'choque', 'problema', 'dificultad', 'apuro', 'aprieto', 'compromiso', 'ahogo', 'brete']
          if(soluciones.includes(solucion)){
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
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['facilidad', 'simplicidad', 'asequilibidad', 'elementalidad', 'factibilidad', 'naturalidad', 'llaneza', 'campenchanía', 'espontaneidad', 'sobriedad', 'austeridad', 'discreción']
          if(soluciones.includes(solucion)){
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
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['aversión', 'animadversión', 'tirria', 'antipatía', 'ojeriza', 'manía', 'animosidad', 'odio', 'rabia', 'enemistad', 'rencor']
          if(soluciones.includes(solucion)){
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
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['aislamiento', 'retiro', 'abandono', 'incomunicación', 'separación', 'desamparo', 'encierro', 'clausura', 'destierro', 'melancolía', 'tristeza', 'nostalgia', 'añoranza', 'melarchía', 'soleá']
          if(soluciones.includes(solucion)){
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
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['entrada', 'noticia', 'editorial', 'crónica', 'suelto', 'gacetilla', 'apartado', 'comentario', 'reseña', 'producto', 'género', 'mercancía', 'efecto']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }
    
    if(sinonimo === 'hábito'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['costumbre', 'uso', 'rutina', 'habituación', 'método', 'procedimiento', 'práctica', 'experiencia', 'traje', 'vestido', 'túnica', 'dependencia', 'adicción', 'vicio']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }  
    teclaUsada = true
  }
  if(event.key === "a" || event.key === "A"){

    if(teclaUsada){
      return
    }

    const antonimos = ['complejo', 'mandar', 'silencio', 'universal', 'orden', 'aceleración', 'fortuna', 'actual', 'superficial', 'cuerdo', 'consuelo', 'intencionado', 'grosero', 'enardecidos', 'salubres']
    const antonimo = antonimos[Math.floor(Math.random() * antonimos.length)]
    console.log(antonimos.length)
    const title = 'ANTÓNIMOS'

    // Cada vez que he querido añadir un tecto y modificarlo me ha tocado hacerlo así porque no he encontrado otra forma
    cont1.innerHTML += `<p class="frase"><span class="title">${title}</span></p>`
    cont1.innerHTML += `<p class="frase">Dime el antónimo de <span class="sinonimo">${antonimo}</span></p>`
    cont1.innerHTML += `<p class="frase">Presiona la tecla <span class="teclaEnter">${teclaEnter}</span> para ingresar tu respuesta<span class="fotoEnter"></span><span class="aclaración">${aclaración}</span></p>`

    // Cada condicional sirve para darle los valores de los antónimos que sirven para cada palabra
    if(antonimo === 'superficial'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['profundo', 'hondo', 'interior', 'trascendental', 'fundamental']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }

    if(antonimo === 'complejo'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['simple', 'sencillo', 'claro', 'fácil']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }

    if(antonimo === 'mandar'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['obedecer', 'acatar', 'recibir']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }

    if(antonimo === 'silencio'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['ruido', 'sonido', 'zumbido', 'estruendo', 'alboroto', 'griterío', 'barahúnda', 'bulla', 'escándalo', 'bullicio']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }

    if(antonimo === 'universal'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['particular', 'parcial', 'local', 'limitado', 'nacional']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }

    if(antonimo === 'orden'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['caos', 'desorden', 'contraorden', 'descolocación', 'desorganización']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }


    if(antonimo === 'aceleración'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['desaceleración', 'deceleración', 'frenada', 'retraso', 'lentitud']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }


    if(antonimo === 'fortuna'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['infortunio', 'desventura', 'fracaso', 'desgracia', 'adversidad', 'desdicha']
          if(soluciones.includes(solucion)){
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
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['loco', 'insensato', 'chiflado']
          if(soluciones.includes(solucion)){
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
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['desconsuelo', 'pena', 'pesar', 'tristeza', 'aflicción', 'congoja', 'abatimiento', 'desaliento', 'desánimo', 'desfallecimiento', 'angustia']
          if(soluciones.includes(solucion)){
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
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['impremeditado']
          if(soluciones.includes(solucion)){
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
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['cortés','educado', 'delicado', 'refinado', 'fino', 'culto']
          if(soluciones.includes(solucion)){
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
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['calmado', 'sereno', 'apaciguado']
          if(soluciones.includes(solucion)){
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
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['insalubre']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }
    
    if(antonimo === 'actual'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['pasado', 'antiguo', 'inactual', 'acticuado']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="respuestaCorrecta">${respuestaCorrecta}</span><span class="fotoTick"></span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="respuestaIncorrecta">${respuestaIncorrecta}</span><span class="fotoX"></span></p>`
          }
        }
      })
    }

    teclaUsada = true
  }
})