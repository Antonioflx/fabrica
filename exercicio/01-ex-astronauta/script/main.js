const hambuguer = document.querySelector(".hamburguer");
const menuSmallScreen = document.querySelector(
	"#secondMenu-smallScreen"
);

const blur_openSecondMenu = document.querySelector(
	".blur-whenOpenMenu"
);

// abrir o menu secundario.
const showTheMenu = () => {
	menuSmallScreen.classList.toggle("show-secondMenu");
	menuSmallScreen.classList.remove("close-secondMenu");

	const divImgAstronauta = document.querySelector(".img-astronauta");
	divImgAstronauta.style.display = "none";

	hambuguer.style.display = "none";
	blur_openSecondMenu.classList.add("active");
};

hambuguer.addEventListener("click", showTheMenu);

// parte de fechar o menu secundario
const closeHamburguer = document.querySelector(
	"#secondMenu-smallScreen"
);

closeHamburguer.addEventListener("click", () => {
	menuSmallScreen.classList.toggle("close-secondMenu");
	menuSmallScreen.classList.remove("show-secondMenu");

	const divImgAstronauta = document.querySelector(".img-astronauta");
	divImgAstronauta.style.display = "block";

	hambuguer.style.display = "flex";

	blur_openSecondMenu.classList.remove("active");
});
