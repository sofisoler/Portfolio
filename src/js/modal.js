const contenedorModalMenu = document.querySelector(".modal-nav__container");
const abrirMenu = document.querySelector(".modal-nav__open");
const cerrarMenu = document.querySelector(".modal-nav__close");

abrirMenu.addEventListener("click", () => {
    contenedorModalMenu.classList.add("modal-active");
});

cerrarMenu.addEventListener("click", () => {
    contenedorModalMenu.classList.remove("modal-active");
});

contenedorModalMenu.addEventListener("click", () => {
    cerrarMenu.click();
});