const allSpnResult = document.querySelectorAll(".spn-result");

const criarTxt = (arrayResult) => {
	let indice = 0;
	allSpnResult.forEach((item) => {
		item.innerHTML = arrayResult[indice];
		indice++;
	});
};
export default criarTxt;

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
