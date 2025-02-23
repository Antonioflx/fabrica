import operation from "./operation.js";
import arrayResult from "./resultados.js";
import put_inp_spn_txtResult from "./history.js";
import fixString from "./fixString.js";

const form = document.querySelector("#form");

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

const organizeArray = (txtResultado) => {
	arrayResult.length < 5
		? arrayResult.unshift(txtResultado)
		: (arrayResult.pop(), arrayResult.unshift(txtResultado));
};
