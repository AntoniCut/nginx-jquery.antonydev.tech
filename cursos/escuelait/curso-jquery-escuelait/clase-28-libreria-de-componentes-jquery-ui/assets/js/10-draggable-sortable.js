/*
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  10-draggable-sortable.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/10-draggable-sortable.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(function () {

    /** @type {JQuery<HTMLUListElement>} - Lista que acepta el elemento arrastrado */
    const $sortable = $("#sortable");

    /** @type {JQuery<HTMLLIElement>} - Elemento que se puede soltar en la lista */
    const $draggable = $("#draggable");

    /** @type {JQuery<HTMLElement>} - Listas y elementos de la demo */
    const $seleccionables = $("ul, li");

    //  -----  permitir reordenar la lista y volver si el movimiento no es válido  -----
    $sortable.sortable({ revert: true });

    //  -----  conectar el arrastre con la lista ordenable  -----
    $draggable.draggable({
        connectToSortable: "#sortable",
        helper: "clone",
        revert: "invalid",
    });

    //  -----  evitar que el navegador seleccione el texto al arrastrar  -----
    $seleccionables.disableSelection();

});
