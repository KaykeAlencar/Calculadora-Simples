alert("faça apenas duas operações por vez")

const trabalho = document.querySelector(".visor")
const display = document.querySelector(".mostra")

function tela (nun){
	var guarda = display.value
	display.value = display.value + nun }

function butao(nun){
	tela(nun)

	var guarda = trabalho.value
	trabalho.value = trabalho.value + nun }

function linpar (nun) {
	if(nun == 1){
		display.value = "" }
	if(nun == 2){
		trabalho.value = "" }
	else{
		display.value = ""
		trabalho.value = "" } }

var lista = []
function add (nun){
	lista.push(nun)
	linpar(2)}

var icone = ""
var resultado = 0
function verifica (ic, v, op) {
	const m = parseInt(lista[0]) * parseInt(lista[1])
	const d = parseInt(lista[0]) / parseInt(lista[1])
	const a = parseInt(lista[0]) + parseInt(lista[1])
	const s = parseInt(lista[0]) - parseInt(lista[1])
	
	math = [m, d, a, s]

	if( ic == v ){
		icone = ic
		if(lista.length == 2){
			resultado = math[op]; lista = []; icone = ""  } } }

function caucula (icon){
	add(trabalho.value)
	tela(icon)

	verifica(icon, "X", 0)
	verifica(icon, "/", 1)
	verifica(icon, "+", 2)
	verifica(icon, "_", 3)

	return resultado }

function mostra (){
	var resultado = caucula(icone)
	trabalho.value = resultado 
	display.value = resultado }
