/*
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  04-accordion-fill-space.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/01-accordion/04-accordion-fill-space.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `marco que se puede redimensionar` */
    const $marco = $("#accordion-resizer");

    /** @type {JQuery<HTMLDivElement>} - `acordeón que ocupa la altura del marco` */
    const $acordeon = $("#accordion");

    /**
     * ---------------------------------
     * -----  `alRedimensionar()`  -----
     * ---------------------------------
     * - Recalcula la altura del panel abierto.
     * @return {void}
     */
    const alRedimensionar = () => {

        //  -----  ajustar el panel a la nueva altura del marco  -----
        $acordeon.accordion("refresh");
    };

    //  -----  hacer que el panel abierto rellene el marco  -----
    $acordeon.accordion({
        heightStyle: "fill",
    });

    //  -----  permitir cambiar el tamaño del marco  -----
    $marco.resizable({
        minHeight: 180,
        minWidth: 240,
        resize: alRedimensionar,
    });

});
