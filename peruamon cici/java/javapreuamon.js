const sectionReiniciar=document.getElementById('reiniciar')
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const botonMascotaJugador = document.getElementById("boton-mascota")

const botonReiniciar=document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador=document.getElementById('vidas-jugador')

const spanVidasEnemigo=document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const contenedorTarjetas = document.getElementById("contenedorTarjetas")

document.getElementById("boton-reiniciar").classList.remove("reiniciar");

const contenedorAtaques = document.getElementById("contenedorAtaques")

let peruamones = []
let ataqueJugador = []
let peruamonOptions
let ataqueEnemigo
let botonAgua
let botonTierra
let botonFuego
let ataquesPeruamon
let mascotaJugador
let botones = []
let inputTierrifuego
let vidasJugador = 3
let vidasEnemigo = 3

class Peruamon{
	constructor(nombre, foto, vida, ataques){
		this.nombre = nombre 
		this.foto = foto
		this.vida = vida
		this.ataques = []
	}
}

let Fuegin = new Peruamon("Fuegin", "./assets/fuegin.png", 5)
let Aquañon = new Peruamon("Aquañon", "./assets/Aquañon.png", 5)
let Terramatador = new Peruamon("Terramatador", "./assets/Terramatador.png", 5)

peruamones.push(Fuegin, Aquañon, Terramatador)

Fuegin.ataques.push (
	{nombres:"fuego", id: "boton-fuego"},
	{nombres:"fuego", id: "boton-fuego"},
	{nombres:"fuego", id: "boton-fuego"},
	{nombres:"agua", id: "boton-agua"},
	{nombres:"tierra", id: "boton-tierra"},
)
Aquañon.ataques.push (
	{nombres:"💧", id: "boton-agua"},
	{nombres:"💧", id: "boton-agua"},
	{nombres:"💧", id: "boton-agua"},
	{nombres:"🔥", id: "boton-fuego"},
	{nombres:"🌱", id: "boton-tierra"},
)
Terramatador.ataques.push (
	{nombres:"🌱", id: "boton-tierra"},
	{nombres:"🌱", id: "boton-tierra"},
	{nombres:"🌱", id: "boton-tierra"},
	{nombres:"🔥", id: "boton-fuego"},
	{nombres:"💧", id: "boton-agua"},
)

function iniciarJuego(){	
	
	sectionReiniciar.style.display='none'		
	
		peruamones.forEach((peruamon)=>{
			peruamonOptions=`
        <input type="radio" name="mascota" id=${peruamon.nombre} />
        <label class="tarjeta-de-peruamon" for=${peruamon.nombre}>
            <p>${peruamon.nombre}</p>
            <img src=${peruamon.foto} alt=${peruamon.nombre} class="dibujo">
        </label>`

	contenedorTarjetas.innerHTML += peruamonOptions

		inputFuegin = document.getElementById('Fuegin')
		inputAquañon = document.getElementById("Aquañon")
		inputTerramatador = document.getElementById("Terramatador")

	});	
	
	sectionSeleccionarAtaque.style.display = "none"	

	botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)	

	botonReiniciar.addEventListener('click',reiniciarJuego)
}

function seleccionarMascotaJugador(){
	
	sectionSeleccionarMascota.style.display = "none"
	sectionSeleccionarAtaque.style.display = "flex"		

		if (inputFuegin.checked){
			spanMascotaJugador.innerHTML = inputFuegin.id
			mascotaJugador = inputFuegin.id
		}
		else if (inputAquañon.checked){
			spanMascotaJugador.innerHTML = inputAquañon.id
			mascotaJugador = inputAquañon.id
		}
		else if (Terramatador.checked){
			spanMascotaJugador.innerHTML = inputTerramatador.id
			mascotaJugador = inputTerramatador.id
		}
		else {
			alert("selecciona algo p")
		}

	extraerAtaque(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaque(mascotaJugador){
	let ataques 
	for (let i = 0; i < peruamones.length; i++) {
		if (mascotaJugador === peruamones[i].nombre){
			ataques = peruamones[i].ataques
		}
		
	}	
	mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
	ataques.forEach((ataque) => {
		ataquesPeruamon =`
		<button id=${ataque.id} class="boton-de-ataque BATataques">${ataque.nombre}</button>
		`
		contenedorAtaques.innerHTML += ataquesPeruamon
	})

		botonAgua = document.getElementById('boton-agua')
		botonTierra = document.getElementById('boton-tierra')
		botonFuego = document.getElementById('boton-fuego')
		botones = document.querySelectorAll(".BATataques")
}

function secuenciaAtaque(){
	botones.forEach((boton)=>{boton.addEventListener
		('click',(e)=>{
			if(e.target.textContent==='fuego'){
				ataqueJugador.push('Fuego')
						console.log(ataqueJugador)
				boton.style.background='#112f58'
			}
			else if(e.target.textContent==='agua'){
				ataqueJugador.push('Agua')
					console.log(ataqueJugador)
				boton.style.background='#112f58'
			}
			else{ataqueJugador.push('Tierra')
					console.log(ataqueJugador)
				boton.style.background='#112f58'
					}
				}	
			)
		}
	)
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorioUwU(0,peruamones.length -1)
    
	spanMascotaEnemigo.innerHTML = peruamones[mascotaAleatoria].nombre
	secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
	let ataqueAleatorio = aleatorioUwU(1,3)
	
	if(ataqueAleatorio == 1 ){
		ataqueEnemigo = "Fuego"}
	
	else if(ataqueAleatorio == 2){
		ataqueEnemigo ="Agua"}
	
	else{
		ataqueEnemigo = "Fuego"}
	combate()
}

function combate(){
		
		if(ataqueEnemigo==ataqueJugador){
		crearMensaje("EMPATE")
	}
		else if(ataqueJugador=='Fuego'&&ataqueEnemigo=='Tierra'){
			crearMensaje("GANASTE")
		vidasEnemigo--
		spanVidasEnemigo.innerHTML=vidasEnemigo
	}
		else if(ataqueJugador=='Agua'&&ataqueEnemigo=='Fuego'){
			crearMensaje("GANASTE")
		vidasEnemigo--
		spanVidasEnemigo.innerHTML=vidasEnemigo
	}
		else if(ataqueJugador=='Tierra'&&ataqueEnemigo=='Agua'){
			crearMensaje("GANASTE")
		vidasEnemigo--
		spanVidasEnemigo.innerHTML=vidasEnemigo
	}
		else{
			crearMensaje("PERDISTE")
		vidasJugador--
		spanVidasJugador.innerHTML=vidasJugador
	}
	revisarVidas()

	sectionReiniciar.style.display='block'
}

function revisarVidas(){
	if (vidasEnemigo == 0){
		crearMensajeFinal(":D")
	}
	else if (vidasJugador == 0){
		crearMensajeFinal(":C")
	}
}

function crearMensaje(resultado) {    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){

	let parrafo = document.createElement("p")
	parrafo.innerHTML = resultadoFinal
	sectionMensajes.appendChild(parrafo)
	botonFuego.disabled = true	
	botonAgua.disabled = true	
	botonTierra.disabled = true

    //si esta función es para enviar mensaje al terminar la partida
    //ya pones esto de arriba para quitar la clase y ya	
}

function aleatorioUwU(min, max){
	return Math.floor(Math.random()*(max - min + 1)+min)
}

window.addEventListener("load", iniciarJuego)

function ataqueFuego(){
	ataqueJugador='Fuego'
ataqueAleatorioEnemigo()
}
function ataqueAgua(){
	ataqueJugador='Agua'
ataqueAleatorioEnemigo()
}
function ataqueTierra(){
	ataqueJugador='Tierra'
ataqueAleatorioEnemigo()
}
function reiniciarJuego(){	

		location.reload()
}












