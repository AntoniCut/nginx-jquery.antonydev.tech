/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  79-tabs-sortable.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/79-tabs-sortable.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `pestañas ordenables` */
    const $pestanas = $("#tabs");

    /**
     * --------------------------
     * -----  `alSoltar()`  -----
     * --------------------------
     * - Actualiza las pestañas tras cambiar el orden.
     * @return {void}
     */
    const alSoltar = () => {

        //  -----  reconstruir las pestañas en el orden nuevo  -----
        $pestanas.tabs("refresh");
    };

    //  -----  activar las pestañas  -----
    $pestanas.tabs();

    //  -----  ordenar las cabeceras en horizontal  -----
    $pestanas.find(".ui-tabs-nav").sortable({
        axis: "x",
        stop: alSoltar,
    });

});
