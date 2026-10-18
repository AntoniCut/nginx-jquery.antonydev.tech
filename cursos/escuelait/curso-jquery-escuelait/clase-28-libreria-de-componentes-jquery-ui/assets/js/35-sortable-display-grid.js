/*
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  35-sortable-display-grid.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/35-sortable-display-grid.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLUListElement>} - Rejilla reordenable */
    const $sortable = $("#sortable");

    //  -----  permitir reordenar las celdas  -----
    $sortable.sortable();

    //  -----  evitar que el navegador seleccione el texto al arrastrar  -----
    $sortable.disableSelection();

});
