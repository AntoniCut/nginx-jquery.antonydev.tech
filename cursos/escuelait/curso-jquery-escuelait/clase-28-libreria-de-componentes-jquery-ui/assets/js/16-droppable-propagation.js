/*
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  16-droppable-propagation.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/16-droppable-propagation.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - Caja que se suelta en los destinos anidados */
    const $draggable = $("#draggable");

    /** @type {JQuery<HTMLDivElement>} - Pareja exterior e interior sin greedy */
    const $sinGreedy = $("#droppable, #droppable-inner");

    /** @type {JQuery<HTMLDivElement>} - Pareja exterior e interior con greedy */
    const $conGreedy = $("#droppable2, #droppable2-inner");

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


    //  -----  permitir arrastrar la caja  -----
    $draggable.draggable();

    //  -----  dejar que el drop llegue también al destino padre  -----
    $sinGreedy.droppable({
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover",
        },
        drop: marcarSoltado,
    });

    //  -----  quedarse con el drop en el destino hijo  -----
    $conGreedy.droppable({
        greedy: true,
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover",
        },
        drop: marcarSoltado,
    });

});
