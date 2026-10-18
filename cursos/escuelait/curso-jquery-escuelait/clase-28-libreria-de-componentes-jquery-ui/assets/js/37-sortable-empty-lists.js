/*
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  37-sortable-empty-lists.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/37-sortable-empty-lists.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLUListElement>} - Listas que aceptan soltar en vacío */
    const $conVacio = $("ul.droptrue");

    /** @type {JQuery<HTMLUListElement>} - Lista que no acepta soltar en vacío */
    const $sinVacio = $("ul.dropfalse");

    /** @type {JQuery<HTMLUListElement>} - Las tres listas */
    const $listas = $("#sortable1, #sortable2, #sortable3");

    //  -----  conectar las listas que sí admiten un destino vacío  -----
    $conVacio.sortable({
        connectWith: "ul",
    });

    //  -----  impedir soltar sus elementos en una lista vacía  -----
    $sinVacio.sortable({
        connectWith: "ul",
        dropOnEmpty: false,
    });

    //  -----  evitar que el navegador seleccione el texto al arrastrar  -----
    $listas.disableSelection();

});
