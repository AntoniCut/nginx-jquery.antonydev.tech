/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  06-accordion-sortable.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/06-accordion-sortable.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `acordeón que también se ordena` */
    const $acordeon = $("#accordion");

    /**
     * ------------------------------------
     * -----  `alSoltar(evento, ui)`  -----
     * ------------------------------------
     * - Quita el foco de la cabecera y actualiza el acordeón.
     * @param {JQueryEventObject} evento - Fin del arrastre.
     * @param {JQueryUI.SortableUIParams} ui - Panel que se ha soltado.
     * @return {void}
     */
    const alSoltar = (evento, ui) => {

        //  -----  el evento de soltar no navega  -----
        evento.preventDefault();

        //  -----  cerrar el estado de foco de la cabecera arrastrada  -----
        ui.item.children("h3").triggerHandler("focusout");

        //  -----  reconstruir los paneles en el orden nuevo  -----
        $acordeon.accordion("refresh");
    };

    //  -----  abrir paneles por la cabecera de cada grupo  -----
    $acordeon.accordion({
        header: "> div > h3",
    });

    //  -----  ordenar los grupos en vertical por la cabecera  -----
    $acordeon.sortable({
        axis: "y",
        handle: "h3",
        stop: alSoltar,
    });

});
