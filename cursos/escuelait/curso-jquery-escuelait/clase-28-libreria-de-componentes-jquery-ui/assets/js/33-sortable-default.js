/*
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  33-sortable-default.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/33-sortable-default.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLUListElement>} - Lista reordenable */
    const $sortable = $("#sortable");

    /** @type {JQuery<HTMLElement>} - Lista y elementos, para no seleccionar el texto */
    const $seleccionables = $("#sortable, #sortable li");

    //  -----  permitir reordenar la lista  -----
    $sortable.sortable();

    //  -----  evitar que el navegador seleccione el texto al arrastrar  -----
    $seleccionables.disableSelection();

});
