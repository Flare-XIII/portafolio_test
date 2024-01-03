//CÓDIGO PARA ACTIVAR LOS POPOVER DE BOOTSTRAP
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));


/* ACTIVAR EVENTOS DE TITULOS */
const titulos = document.querySelectorAll(".titulosAnimados");


const opcionesOberdavor = {
    root: null,
    threshold: 0.5
};

const observador = new IntersectionObserver((elementosObervados) => {
    elementosObervados.forEach(elementoObservado => {
        let elemento = elementoObservado.target.firstElementChild;
        if(elementoObservado.isIntersecting){
            elemento.classList.add("animate__animated", "animate__lightSpeedInLeft", "animate__slower");
        }else {
            elemento.classList.remove("animate__animated", "animate__lightSpeedInLeft", "animate__slower");
        }
    })

}, opcionesOberdavor);

titulos.forEach((titulo)=> {
    observador.observe(titulo);
})

