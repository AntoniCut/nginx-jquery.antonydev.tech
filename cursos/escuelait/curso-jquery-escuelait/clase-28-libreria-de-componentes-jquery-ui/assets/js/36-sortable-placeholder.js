/*
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  36-sortable-placeholder.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/36-sortable-placeholder.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLUListElement>} - Lista que enseña el hueco al arrastrar */
    const $sortable = $("#sortable");

    //  -----  marcar el hueco con la clase de resalte  -----
    $sortable.sortable({
        placeholder: "ui-state-highlight",
        forcePlaceholderSize: true,
    });

    //  -----  evitar que el navegador seleccione el texto al arrastrar  -----
    $sortable.disableSelection();

});
