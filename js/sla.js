const display = document.querySelector(".mostra")

function tela (nun){
	var guarda = display.value
	display.value = display.value + nun }

function linpar (nun) {
		display.value = "" }

var lista = []
function add (nun){
	lista.push(nun)
	linpar(2)}

var icone = ""
var resultado = 0

function caucula (icon){
	const value = display.value

	const result = eval(display.value)
	
	display.value = result
	console.log(result)
}
