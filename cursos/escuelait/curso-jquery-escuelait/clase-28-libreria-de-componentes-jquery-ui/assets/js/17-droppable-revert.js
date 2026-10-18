/*
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  17-droppable-revert.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/17-droppable-revert.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - Caja que vuelve tras un drop válido */
    const $draggable = $("#draggable");

    /** @type {JQuery<HTMLDivElement>} - Caja que vuelve si el drop no es válido */
    const $draggable2 = $("#draggable2");

    /** @type {JQuery<HTMLDivElement>} - Zona de destino */
    const $droppable = $("#droppable");

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


    //  -----  volver al sitio de origen cuando el destino acepta la caja  -----
    $draggable.draggable({ revert: "valid" });

    //  -----  volver al sitio de origen cuando el destino no la acepta  -----
    $draggable2.draggable({ revert: "invalid" });

    //  -----  aceptar las dos cajas y marcar la zona al soltar  -----
    $droppable.droppable({
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover",
        },
        drop: marcarSoltado,
    });

});
