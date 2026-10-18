/*
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  14-droppable-default.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/14-droppable-default.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - Caja que se arrastra */
    const $draggable = $("#draggable");

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


    //  -----  permitir arrastrar la caja  -----
    $draggable.draggable();

    //  -----  marcar la zona cuando la caja se suelta encima  -----
    $droppable.droppable({
        drop: marcarSoltado,
    });

});
