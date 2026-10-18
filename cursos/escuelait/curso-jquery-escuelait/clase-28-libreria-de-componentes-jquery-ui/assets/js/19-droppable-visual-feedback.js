/*
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  19-droppable-visual-feedback.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/19-droppable-visual-feedback.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - Caja del ejemplo al pasar por encima */
    const $draggable = $("#draggable");

    /** @type {JQuery<HTMLDivElement>} - Destino que reacciona al pasar por encima */
    const $droppable = $("#droppable");

    /** @type {JQuery<HTMLDivElement>} - Caja del ejemplo al activar el arrastre */
    const $draggable2 = $("#draggable2");

    /** @type {JQuery<HTMLDivElement>} - Destino que reacciona al empezar el arrastre */
    const $droppable2 = $("#droppable2");

    /**
     * ------------------------------------
     * -----  `marcarSoltado(event)`  -----
     * ------------------------------------
     * - Marca el destino y cambia su texto.
     * @param {JQuery.TriggeredEvent} event - Evento drop del destino.
     * @return {void}
     */
    const marcarSoltado = (event) => {

        /** @type {JQuery<HTMLElement>} - Zona que ha recibido el elemento */
        const $destino = $(event.target);

        //  -----  marcar la zona como ocupada  -----
        $destino.addClass("ui-state-highlight");

        //  -----  cambiar el texto de la zona  -----
        $destino.children("p").text("¡Soltado!");
    };


    //  -----  arrastrar la primera caja  -----
    $draggable.draggable();

    //  -----  cambiar el destino solo mientras el cursor está encima  -----
    $droppable.droppable({
        classes: {
            "ui-droppable-hover": "ui-state-hover",
        },
        drop: marcarSoltado,
    });

    //  -----  arrastrar la segunda caja  -----
    $draggable2.draggable();

    //  -----  cambiar el destino en cuanto empieza un arrastre aceptado  -----
    $droppable2.droppable({
        accept: "#draggable2",
        classes: {
            "ui-droppable-active": "ui-state-default",
        },
        drop: marcarSoltado,
    });

});
