// The code is in spanish because I wanted the game to be one way to learn synonyms and antonyms in spanish to practice to PAU in Spain. The game is oriented to students that the next year are going to enter to the university there in Spain, so if they want to read the code I thought it would be easier if it is in spanish and also easier to me to program it.

// En este programa voy a crear un juego para practicar sinonimia y antonimia para el examen de PAU
const aclaración = '(SOLO FUNCIONA EN UN ORDENADOR. Hay que escribir la respuesta en minúsculas y con las tildes correspondientes)'
const teclaEnter = '"ENTER"'
const respuestaCorrecta = 'Respuesta correcta, presione f5 para que genere otra palabra, si sale la misma dele al f5 otra vez. Puede ver el resto de soluciones si le da a la tecla "1".'
const respuestaIncorrecta = 'Respuesta incorrecta, dele al "enter" otra vez si quiere intentarlo de nuevo o presione f5 para que genere otra palabra, si sale la misma dele al f5 otra vez. Si cree que la respuesta que ha escrito es válida puede que se deba a que he escrito solamente los sinonimos que salen en la RAE, puede ver las soluciones si le da a la tecla "1".'

const cont1 = document.getElementById("contenedor")

const menu = 'Pulse "S" para practicar SINÓNIMOS o "A" para practicar ANTÓNIMOS'
// Cada vez que he querido añadir un tecto y modificarlo me ha tocado hacerlo así porque no he encontrado otra forma
cont1.innerHTML += `<p class="frase"><span class="menu">${menu}</span></p>`
cont1.innerHTML += `<p class="frase"><span class="aclaración">${aclaración}</span></p>`

let teclaUsada = false
document.addEventListener("keydown", (event) => {
  if (event.key === "s" || event.key === "S") {

    if(teclaUsada){
      return
    }

    const sinonimos = ['esbozar','éxito','sibilino','alborada','ribera','alcabala','quiste','alcázar','belfo','ademán','liza','colegir','patíbulo','sadismo','cerro','gazmoño','caníval','cebar','búho','clamoroso','menester','ipso facto','ruborizarse','soslayo','escudriñar','mascullar','ominoso','acial', 'tinaja','gleba','tupido','mamarracho','añurgarse','atusar','hucha','tamborilear','rótulo','estremecer','ascetismo','aversión','enaltecer','hito','vaina','entelequia','lívido','sordidez','aviar','tarambana','huraño','egresar','meiga', 'perfección', 'sentido', 'travieso', 'gorrino', 'pantalla', 'refugio', 'cámara', 'innovación', 'cadena', 'dictar', 'sueldo', 'notoriedad', 'estrella', 'accidente', 'artículo', 'valía', 'ausencia', 'precio', 'hostil', 'conflicto', 'sencillez', 'inquina', 'soledad', 'hábito']
    const sinonimo = sinonimos[Math.floor(Math.random() * sinonimos.length)]
    console.log(sinonimos.length)

    const title = 'SINÓNIMOS'

    cont1.innerHTML += `<p class="frase"><span class="title">${title}</span></p>`
    cont1.innerHTML += `<p class="frase">Dime el sinónimo de <span class="sinonimo">${sinonimo}</span></p>`
    cont1.innerHTML += `<p class="frase">Presiona la tecla <span class="teclaEnter">${teclaEnter}</span> para ingresar tu respuesta<span class="fotoEnter"></span></p>`

    // Cada condicional sirve para darle los valores de los sinonimos que sirven para cada palabra
    // La estructura de los condicionales es la misma, lo único que cambia son las palabras
    if(sinonimo === 'valía'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['valer', 'valor', 'mérito', 'precio', 'estimabilidad', 'preciosidad']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'esbozar'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['bosquejar', 'abocetar', 'diseñar', 'trazar', 'apuntar', 'perfilar', 'plantear', 'proponer', 'insinuar', 'sugerir']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }
    
    if(sinonimo === 'éxito'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['triunfo', 'victoria', 'consecución', 'fortuna', 'fama', 'gloria', 'celebridad', 'renombre', 'notoriedad']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }    

    if(sinonimo === 'sibilino'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['profético', 'adivinatorio', 'misterioso', 'oscuro', 'enigmático', 'ambiguo', 'críptica', 'confuso']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'alborada'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['amanecer', 'alba', 'amanecida', 'alboreo', 'aurora', 'albada', 'albazo']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'ribera'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['orilla', 'borde', 'margen', 'playa', 'costa', 'litoral', 'riba', 'ribero']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'alcabala'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['gabela', 'tributo', 'impuesto']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'quiste'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['zurrón', 'tumor', 'lobanillo', 'lupia']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'alcázar'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['fortaleza', 'fortificación', 'castillo', 'fuerte', 'fortín', 'ciudadela', 'alcazaba', 'castro', 'plaza']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'belfo'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['befo', 'bezudo', 'hocicudo', 'morrudo', 'estimabilidad', 'preciosidad']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'ademán'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['gesto', 'actitud', 'modales', 'maneras', 'formas', 'modos']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'liza'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['mújol', 'múgil', 'albur', 'breca', 'cabezudo', 'capitón', 'dardo', 'lisa', 'mueble', 'mugle', 'mule', 'campo', 'plaza', 'palenque', 'palestra', 'arena', 'estadio', 'ruedo', 'lid', 'combate', 'pelea', 'competición']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'colegir'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['juntar', 'confluir', 'entroncar', 'inferir', 'deducir', 'conjeturar', 'presumir', 'suponer', 'concluir', 'seguirse', 'desprenderse']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'patívulo'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['cadalso', 'suplicio', 'tablado', 'horca']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'sadismo'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['crueldad', 'ferocidad', 'saña', 'perversión', 'encarnizamiento']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'cerro'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['colina', 'loma', 'montículo', 'otero', 'alcor', 'altozano', 'collado', 'cuesto']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'gazmoño'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['mojigato', 'santurrón', 'puritano', 'beato', 'pacato', 'hipócrita', 'fariseo', 'gazmoñero']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'caníval'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['antropófago', 'caríbal', 'cruel', 'feroz', 'bárbaro', 'sanguinario', 'inhumano', 'salvaje']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'cebar'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['alimentar', 'engordar', 'sainar', 'criar', 'sobrealimentar', 'fomentar', 'impulsar', 'alentar', 'animar', 'alimentar', 'favorecer', 'apoyar', 'acuerpar', 'ensañarse', 'encarnizarse', 'regodearse']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'búho'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['tecolote', 'carancho', 'tucúquere']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'clamoroso'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['estruendoso', 'estrepitoso', 'ruidoso', 'resonante', 'manifiesto', 'extraordinario', 'excepcional', 'impresionante', 'enorme', 'apoteósico', 'monumental', 'tremendo']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }    

    if(sinonimo === 'menester'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['falta', 'necesidad', 'carencia', 'privación', 'escasez', 'ocupación', 'empleo', 'cargo', 'tarea', 'función', 'trabajo', 'necesidades']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'ipso facto'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['inmediatamente']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'ruborizarse'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['sonrojarse', 'enrojecerse', 'abochornarse', 'avergonzarse', 'sofocarse']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'soslayo'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['oblicuo', 'sesgado', 'transversal']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'escudriñar'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['indagar', 'investigar', 'inquirir', 'hurgar', 'fisgar', 'husmear', 'buscar', 'hurguetear']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'mascullar'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['mascar', 'murmurar', 'farfullar', 'balbucir', 'rezongar', 'cuchichear', 'barbotear', 'barbotar', 'mamullar']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'ominoso'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['abominable', 'odioso', 'repugnante', 'execrable', 'repulsivo', 'ruin', 'abyecto', 'vil', 'despreciable']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'acial'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['arcial', 'torcedor', 'fuete', 'látigo']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'tinaja'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['tina', 'chochocol']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'gleba'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['terrón', 'terruño', 'tormo', 'tabón', 'tierra', 'terreno']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'tupido'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['espeso', 'compacto', 'denso', 'obtuso', 'torpe', 'lleno', 'satisfecho', 'repleto', 'saturado', 'empachado']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'mamarracho'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['extravagante', 'esperpento', 'adefesio', 'fantoche', 'ridículo', 'payaso', 'estrafalario']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }


    if(sinonimo === 'añusgarse'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['ahogarse', 'atragantarse', 'atarugarse', 'enfadarse', 'disgustarse', 'enojarse', 'molestarse', 'mosquearse']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'atusar'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['alisar', 'repeinar', 'peinar', 'atufar', 'acicalar', 'emperejilarse', 'emperifollarse', 'arreglarse', 'adornarse', 'adornarse', 'componerse', 'achivarse']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'hucha'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['alcancía', 'ladronera', 'cepillo', 'ahorros', 'economías', 'burrucha']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'tamborilear'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['redoblar', 'repicar', 'tamborear', 'repiquetear', 'tabalear', 'tañer', 'teclear']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'rótulo'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['epígrafe', 'título', 'encabezamiento', 'acápite', 'rubro', 'letrero', 'etiqueta', 'marbete', 'inscripción', 'rotulata', 'letrero', 'etiqueta', 'anuncio', 'pasquín']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'estremecer'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['sobresaltar', 'sobrecoger', 'sacudir', 'alterar', 'conmover', 'asustar', 'alarmar', 'aterrar', 'espantar', 'horrorizar', 'vibrar', 'temblar', 'tiritar', 'achucharse']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'ascetismo'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['ascética', 'misticismo', 'austeridad', 'sobriedad', 'moderación', 'parquedad', 'frugalidad', 'templanza', 'virtud']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'aversión'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['rechazo', 'repugnancia', 'antipatía', 'aborrecimiento', 'repulsión', 'odio', 'inquina', 'tirria', 'miedo', 'temor']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'enaltecer'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['alabar', 'elogiar', 'ensalzar', 'engrandecer', 'encarecer', 'aplaudir', 'celebrar', 'encomiar', 'exaltar', 'ponderar', 'loar', 'honrar', 'enorgullecer']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'hito'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['señal', 'mojón', 'piedra', 'poste', 'guardacantón', 'indicación', 'objetivo', 'centro', 'blanco', 'diana', 'jalón', 'hecho', 'baliza', 'cipo', 'encrucijada', 'indicador', 'linde', 'acontecimiento', 'efeméride', 'caliche', 'objetivo']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'vaina'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['funda', 'forro', 'envoltura', 'estuche', 'guarda', 'cáscara', 'chaucha', 'irresponsable', 'informal', 'malqueda']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'entelequia'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['ficción', 'ilusión', 'fantasía', 'quimera', 'irrealidad', 'invención', 'mentira', 'engaño', 'patraña']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'lívido'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['amoratado', 'cárdeno', 'pálido', 'descolorido', 'marchito', 'cadavérico', 'exangüe']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'sordidez'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['abandono', 'suciedad', 'indecencia', 'ruindad', 'miseria', 'pobreza']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'aviar'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['preparar', 'disponer', 'aprestar', 'prevenir', 'aderezar', 'condimentar', 'aliñar', 'aderezar', 'arreglar', 'apañar', 'acicalar', 'componer', 'atusar', 'apresurar', 'avivar', 'urgir', 'despachar', 'aviario']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'tarambana'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['loco', 'botarate', 'calavera', 'imprudente', 'alocado', 'irreflexivo', 'tarabilla', 'taramela']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'huraño'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['huidizo', 'esquivo', 'introvertido', 'retraído', 'insociable', 'misántropo', 'furo', 'apartado', 'hurón']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }
    if(sinonimo === 'egresar'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['salir', 'graduarse', 'licenciarse', 'terminar', 'acabar']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'meiga'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['bruja', 'hechicera']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'perfección'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['excelencia', 'bondad', 'eminencia', 'excelsitud']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'sentido'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['conmovedor', 'emotivo', 'auténtico', 'sincero', 'profundo', 'susceptible', 'quisquilloso', 'puntilloso', 'suspicaz', 'sensible', 'conocimiento', 'percepción', 'entendimiento', 'inteligencia', 'alcance', 'perceptibilidad', 'conciencia', 'noción', 'sensibilidad', 'criterio', 'juicio', 'discernimiento', 'inteligencia', 'ojo', 'cordura', 'lógica', 'cabeza', 'seso', 'finalidad', 'motivo', 'fin', 'meta', 'objetivo', 'significado', 'significación', 'acepción', 'interpretación', 'orientación', 'dirección', 'rumbo', 'derrotero']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'travieso'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['revoltoso', 'enredador', 'inquieto', 'juguetón', 'pillo', 'pícaro', 'vivaracho', 'maldoso', 'maludo', 'sajurín', 'travesía', 'tirada', 'tiramira', 'durmiente', 'travesaño']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'gorrino'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['lechón', 'cochino', 'cochinillo', 'cerdo', 'puerco', 'marrano', 'cebón', 'guarro', 'gorrín', 'chancho', 'tunco', 'sucio', 'desaseado', 'descuidado', 'desaliñado']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'pantalla'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['filtro', 'difusor', 'mampara', 'biombo', 'antipara', 'cancel', 'monitor', 'distracción', 'cine', 'cinema', 'celuloide', 'cinematografía', 'cinematógrafo', 'cubierta', 'visera', 'toldo', 'quitasol', 'persiana', 'arete', 'pendiente', 'peredengue', 'caravanas']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'refugio'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['acogida', 'amparo', 'protección', 'cobijo', 'asilo', 'abrigo', 'socorro', 'ayuda', 'albergue', 'guarida', 'resguardo']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }
    
    if(sinonimo === 'cámara'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['aposento', 'cuarto', 'estancia', 'habitación', 'pieza', 'sala', 'salón', 'cabina', 'parlamento', 'corte', 'senado', 'asamblea', 'cilla', 'cillero', 'algorfa', 'alhóndiga', 'almudí', 'silo', 'hórreo', 'granero', 'casual', 'nevera', 'frigorífico', 'cava', 'heladera', 'deposición', 'morterete', 'diarrea', 'decomposición', 'seguidillas', 'correntía', 'churria', 'cursera', 'obradera', 'colerín', 'cagalera', 'camarógrafo', 'operador', 'fotógrafo']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'innovación'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['cambio', 'mejora', 'novedad', 'originalidad', 'invención', 'perfeccionamiento']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'cadena'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['serie', 'sucesión', 'encadenamiento', 'red', 'canal', 'emisora', 'dial']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'dictar'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['leer', 'decir', 'decretar', 'promulgar', 'expedir', 'dictaminar', 'pronunciar', 'inspirar', 'sugerir', 'pronunciar', 'impartir']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'notoriedad'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['fama', 'celebridad', 'nombradía', 'renombre', 'prestigio', 'reputación']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'sueldo'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['salario', 'paga', 'jornal', 'remuneración', 'nómina', 'mensualidad', 'haberes', 'emolumentos', 'estipendio', 'soldada', 'gajes', 'quitación', 'mesada', 'sólido']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }


        if(sinonimo === 'estrella'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['astro', 'lucero', 'cometa', 'insignia', 'condecoración', 'destino', 'hado', 'sino', 'suerte', 'azar', 'fortuna', 'ventura', 'as', 'nova', 'bradita', 'púlsar', 'supernova']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

        if(sinonimo === 'accidente'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['eventualidad', 'incidente', 'contratiempo', 'suceso', 'choque', 'catástrofe', 'desgracia', 'infortunio', 'percance', 'revés', 'indisposición', 'patatús', 'soponcio', 'síncope', 'desmayo', 'montaña', 'prominencia', 'cima', 'loma', 'accidental']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'ausencia'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['alejamiento', 'separación', 'desaparición', 'marcha', 'partida', 'abandono', 'viaje', 'huida', 'retirada', 'emigración', 'expatriación', 'destierro', 'falta', 'carencia', 'privación', 'vacío', 'insuficiencia', 'escasez', 'omisión', 'defecto', 'laguna', 'inexistencia']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }  

    if(sinonimo === 'precio'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['coste', 'costo', 'importe', 'valor', 'valía', 'monto', 'montante', 'tarifa', 'cantidad', 'suma', 'total', 'cuenta', 'estimación', 'tasación']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }    

    if(sinonimo === 'hostil'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['contrario', 'enemigo', 'adverso', 'desfavorable', 'rival', 'adversario']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'conflicto'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['guerra','combate', 'lucha', 'pelea', 'enfrentamiento', 'disputa', 'pugna', 'lid', 'colisión', 'choque', 'problema', 'dificultad', 'apuro', 'aprieto', 'compromiso', 'ahogo', 'brete']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'sencillez'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['facilidad', 'simplicidad', 'asequilibidad', 'elementalidad', 'factibilidad', 'naturalidad', 'llaneza', 'campenchanía', 'espontaneidad', 'sobriedad', 'austeridad', 'discreción']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }  

    if(sinonimo === 'inquina'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['aversión', 'animadversión', 'tirria', 'antipatía', 'ojeriza', 'manía', 'animosidad', 'odio', 'rabia', 'enemistad', 'rencor']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'soledad'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['aislamiento', 'retiro', 'abandono', 'incomunicación', 'separación', 'desamparo', 'encierro', 'clausura', 'destierro', 'melancolía', 'tristeza', 'nostalgia', 'añoranza', 'melarchía', 'soleá']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(sinonimo === 'artículo'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['entrada', 'noticia', 'editorial', 'crónica', 'suelto', 'gacetilla', 'apartado', 'comentario', 'reseña', 'producto', 'género', 'mercancía', 'efecto']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }
    
    if(sinonimo === 'hábito'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['costumbre', 'uso', 'rutina', 'habituación', 'método', 'procedimiento', 'práctica', 'experiencia', 'traje', 'vestido', 'túnica', 'dependencia', 'adicción', 'vicio']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }  
    teclaUsada = true
  }
  if(event.key === "a" || event.key === "A"){

    if(teclaUsada){
      return
    }

    const antonimos = ['banal','lacio','mórbido','halagüeño','fidedigno','boato','diligente','férreo','radical','condescendiente','umbral','comenzar','rollizo','bárbaro','perpetuo','hosco','díscolo','azar','sinónimo','complejo', 'mandar', 'silencio', 'universal', 'orden', 'aceleración', 'fortuna', 'actual', 'superficial', 'cuerdo', 'consuelo', 'intencionado', 'grosero', 'enardecidos', 'salubres']
    const antonimo = antonimos[Math.floor(Math.random() * antonimos.length)]
    console.log(antonimos.length)
    const title = 'ANTÓNIMOS'

    // Cada vez que he querido añadir un tecto y modificarlo me ha tocado hacerlo así porque no he encontrado otra forma
    cont1.innerHTML += `<p class="frase"><span class="title">${title}</span></p>`
    cont1.innerHTML += `<p class="frase">Dime el antónimo de <span class="sinonimo">${antonimo}</span></p>`
    cont1.innerHTML += `<p class="frase">Presiona la tecla <span class="teclaEnter">${teclaEnter}</span> para ingresar tu respuesta<span class="fotoEnter"></span></p>`

    // Cada condicional sirve para darle los valores de los antónimos que sirven para cada palabra
    if(antonimo === 'superficial'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['profundo', 'hondo', 'interior', 'trascendental', 'fundamental']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'banal'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['profundo', 'sustancial']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'lacio'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['lozano', 'rizado', 'ondulado']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'mórbido'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['sano', 'saludable', 'beneficioso', 'inocuo', 'duro', 'áspero']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'halagüeño'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['ofensivo', 'desalentador', 'desfavorable']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'fidedigno'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['dudoso', 'falso']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }


    if(antonimo === 'boato'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['austeridad', 'sobriedad', 'sencillez']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'diligente'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['lento', 'tardo', 'negligente', 'descuidado']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'férreo'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['débil', 'blando']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'radical'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['accidental', 'secundario', 'moderado']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'condescendiente'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['intransigente', 'intolerante']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'umbral'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['término', 'fin']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'comenzar'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['acabar', 'terminar', 'finalizar', 'concluir', 'finiquitar', 'rematar', 'ultimar', 'culminar', 'liquidar', 'consumar']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'rollizo'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['flaco', 'delgado', 'enjunto']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'bárbaro'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['bondadoso', 'prudente', 'sensato', 'juicioso', 'educado', 'refinado', 'formal', 'insignificante']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'perpetuo'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['pasajero', 'efimero', 'transitorio', 'perecedero', 'endeble', 'finito']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'hosco'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['afable', 'amable', 'abierto', 'simpático']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'díscolo'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['dócil', 'bienmandado', 'disciplinado', 'obediente']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'complejo'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['simple', 'sencillo', 'claro', 'fácil']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'azar'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['certeza', 'seguridad', 'evidencia', 'realidad']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'sinónimo'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['antónimo']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'mandar'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['obedecer', 'acatar', 'recibir']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'silencio'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['ruido', 'sonido', 'zumbido', 'estruendo', 'alboroto', 'griterío', 'barahúnda', 'bulla', 'escándalo', 'bullicio']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'universal'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['particular', 'parcial', 'local', 'limitado', 'nacional']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'orden'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['caos', 'desorden', 'contraorden', 'descolocación', 'desorganización']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }


    if(antonimo === 'aceleración'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['desaceleración', 'deceleración', 'frenada', 'retraso', 'lentitud']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }


    if(antonimo === 'fortuna'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['infortunio', 'desventura', 'fracaso', 'desgracia', 'adversidad', 'desdicha']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'cuerdo'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['loco', 'insensato', 'chiflado']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }  

    if(antonimo === 'consuelo'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['desconsuelo', 'pena', 'pesar', 'tristeza', 'aflicción', 'congoja', 'abatimiento', 'desaliento', 'desánimo', 'desfallecimiento', 'angustia']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }    

    if(antonimo === 'intencionado'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['impremeditado']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'grosero'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['cortés','educado', 'delicado', 'refinado', 'fino', 'culto']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    if(antonimo === 'enardecido'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['calmado', 'sereno', 'apaciguado']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }  

    if(antonimo === 'salubre'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['insalubre']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }
    
    if(antonimo === 'actual'){
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const solucion = prompt ('Ingresa tu respuesta: ')
          const soluciones = ['pasado', 'antiguo', 'inactual', 'acticuado']
          if(soluciones.includes(solucion)){
            cont1.innerHTML += `<p class="frase"><span class="fotoTick"></span><span class="respuestaCorrecta">${respuestaCorrecta}</span></p>`
          }
          else {
            cont1.innerHTML += `<p class="frase"><span class="fotoX"></span><span class="respuestaIncorrecta">${respuestaIncorrecta}</span></p>`
          }
         document.addEventListener("keydown", (event) => {
            if(event.key === "1" || event.key === 'NumPad1'){
              cont1.innerHTML += `<p class='frase'>Soluciones: <span class='soluciones'>${soluciones.join(", ")}</span></p>`
            }
          })
        }
      })
    }

    teclaUsada = true
  }
})