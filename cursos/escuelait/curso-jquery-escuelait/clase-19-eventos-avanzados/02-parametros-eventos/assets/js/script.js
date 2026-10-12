/*
    *  ------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  script.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-19-eventos-avanzados/02-parametros-eventos/assets/js/script.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------------------  *
*/



//  -----  arrancar cuando el documento está listo  -----
$(() => {

    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {JQuery<HTMLDivElement>} - `primer bloque` */
    const $uno = /** @type {JQuery<HTMLDivElement>} */ (
        $(".uno")
    );

    /** @type {JQuery<HTMLDivElement>} - `segundo bloque` */
    const $dos = /** @type {JQuery<HTMLDivElement>} */ (
        $(".dos")
    );


    /**
     * @typedef {Object} DatosSaludo
     * @property {string} nombre - Nombre incluido en el evento.
     * @property {string} periodo - Periodo incluido en el evento.
     */

    /**
     * -------------------------------
     * -----  `saludar(evento)`  -----
     * -------------------------------
     * - Escribe el nombre y el periodo guardados en el evento.
     * @param {JQuery.ClickEvent<HTMLDivElement, DatosSaludo, HTMLDivElement>} evento - Click con los datos del manejador.
     * @return {void}
     */
    const saludar = (evento) => {

        /** @type {JQuery<HTMLDivElement>} - `bloque pulsado` */
        const $bloque = /** @type {JQuery<HTMLDivElement>} */ (
            $(evento.currentTarget)
        );

        //  -----  pintar el saludo con los datos del evento  -----
        $bloque.text(
            "hola " + evento.data.nombre + " buenos " + evento.data.periodo
        );
    };


    //  -----  click en el primer bloque con sus datos  -----
    $uno.on("click", {
        nombre: "Iván",
        periodo: "dias",
    }, saludar);


    //  -----  click en el segundo bloque con sus datos  -----
    $dos.on("click", {
        nombre: "Marco",
        periodo: "noches",
    }, saludar);

});
