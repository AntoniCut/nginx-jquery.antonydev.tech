/*
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  31-selectable-display-grid.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/31-selectable-display-grid.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLOListElement>} - Rejilla que admite selección */
    const $selectable = $("#selectable");

    //  -----  permitir seleccionar las celdas  -----
    $selectable.selectable();

});
