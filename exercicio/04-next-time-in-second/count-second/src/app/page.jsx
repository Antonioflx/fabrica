/*
  Criar um contador de tempo só 

*/
"use client";

import { useState, useEffect } from "react";

const Counter = () => {
	const [count, setCounter] = useState(0);
	const [active, setActive] = useState(false);

	const time = useEffect(() => {
		if (!active) return;

		const interval = setInterval(() => {
			setCounter((prev) => prev + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, [active]);

	const txt = active ? (
		<div>
			<p>
				{" "}
				<b>{count} segundo(s)</b>
			</p>
		</div>
	) : (
		<div>
			<p>
				{" "}
				Você parou em <b>{count} segundo(s)</b>{" "}
			</p>
		</div>
	);

	return (
		<div>
			<div>
				<button
					onClick={() => {
						setActive(!active);
					}}
				>
					{" "}
					{active ? "Parar" : "Clicar"}{" "}
				</button>
			</div>
			<div>
				{txt}
				<p>Clique no botão!</p>
			</div>
		</div>
	);
};

export default function App() {
	return (
		<div style={{ textAlign: "center" }}>
			<h1 className="text-black"> My Project</h1>
			<Counter />
		</div>
	);
}
