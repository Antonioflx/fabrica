/* 
	Como coloquei no gitHub. E provavel que irão abrir file:// -> os imports não funcionará.
	Teria que abrir o index.html em live server para ficar legal.
	
*/

/*
	import arrayResult from "./script/resultado.js"
	import operation from "./script/operation.js"
	import put_inp_spn_txtResult from "./script/history.js"
	import fixString from "./script/fixString.js"

*/

const form = document.querySelector("#form");

const arrayResult = ["...", "...", "...", "...", "..."];

const operation = {
	"+": (num1, num2) => num1 + num2,
	"-": (num1, num2) => num1 - num2,
	"*": (num1, num2) => num1 * num2,
	"/": (num1, num2) => (num2 !== 0 ? num1 / num2 : "Error "),
};

const organizeArray = (txtResultado) => {
	arrayResult.length < 5
		? arrayResult.unshift(txtResultado)
		: (arrayResult.pop(), arrayResult.unshift(txtResultado));
};

const allSpnResult = document.querySelectorAll(".spn-result");

const put_inp_spn_txtResult = (arrayResult) => {
	let indice = 0;
	allSpnResult.forEach((item) => {
		item.innerHTML = arrayResult[indice];
		indice++;
	});
	/*
	
		li.1 -> 1 resultado 
		li.2 -> 2 resultado 
		li.3 -> 3 resultado 
		li.4 -> 4 resultado 
		li.5 -> 5 resultado. 
	
		input -> 10
	
		Novo resultado (10)
	
		li.1 -> Novo resultado (10)
		li.2 -> resultado anterior do li.1
		li.3 -> resultado anterior do li.2
		li.4 -> resultado anterior do li.3
		li.5 -> resultado anterior do li.4
	*/
};

const fixString = (string) =>
	string.length > 6 ? `${string.substring(0, 6)}.` : string;

form.addEventListener("submit", (evt) => {
	evt.preventDefault();

	const firstNumber = document.querySelector("#first-number").value;
	const secondNumber = document.querySelector("#second-number").value;
	const inputResult = document.querySelector("#inp-resultado");

	const operador = document.querySelector("#options-operation").value;

	let result = operation[operador](
		Number(firstNumber),
		Number(secondNumber)
	);
	inputResult.value = result;

	// prettier-ignore
	const txt =  `${fixString(firstNumber)} ${operador === "*" ? "x" : operador === "/" ? "÷" : operador} ${fixString(secondNumber)} = ${fixString(String(result))}`;

	organizeArray(txt);
	put_inp_spn_txtResult(arrayResult);
});
