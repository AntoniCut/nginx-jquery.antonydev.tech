/*
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  34-sortable-connect-lists.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/34-sortable-connect-lists.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLUListElement>} - Listas que intercambian elementos */
    const $listas = $("#sortable1, #sortable2");

    //  -----  permitir pasar elementos de una lista a la otra  -----
    $listas.sortable({
        connectWith: ".connectedSortable",
    });

    //  -----  evitar que el navegador seleccione el texto al arrastrar  -----
    $listas.disableSelection();

});
