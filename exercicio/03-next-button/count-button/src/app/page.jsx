/*
  Criar um contador que quando chegar em 5 -> Avise ao usuário
*/
"use client";

import { useState } from "react";

const TxtCounter = () => {
	const [count, setCounter] = useState(0);
	<div>
		<p>
			{" "}
			Parabéns!! Você clicou <b>{count} vezes</b>
		</p>
	</div>;

	const divTXT =
		count === 5 ? (
			<div>
				<p>
					{" "}
					Parabéns!! Você clicou <b>{count} vezes</b>
				</p>
				<button onClick={() => setCounter(0)}> Resetar </button>
			</div>
		) : (
			<div>
				<p>
					O botão foi clicado <b>{count} vezes</b>
				</p>
			</div>
		);

	const txt = count < 5 ? "Clicar" : "Obrigado por clicar";

	return (
		<div>
			<h1>Clique no botão!!</h1>
			<button
				style={{ width: "200px", height: "30px" }}
				onClick={
					count < 5
						? () => setCounter(count + 1)
						: () => window.alert("Agradecido dms!")
				}
			>
				{" "}
				{txt}{" "}
			</button>
			{divTXT}
		</div>
	);
};

export default function App() {
	return (
		<div id="container-principal" style={{ textAlign: "center" }}>
			<h1 className="text-black">Project</h1>
			<TxtCounter />
		</div>
	);
}
