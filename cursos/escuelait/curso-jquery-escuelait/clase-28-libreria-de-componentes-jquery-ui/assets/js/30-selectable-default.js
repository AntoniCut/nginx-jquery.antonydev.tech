/*
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  30-selectable-default.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/30-selectable-default.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLOListElement>} - Lista que admite selección */
    const $selectable = $("#selectable");

    //  -----  permitir seleccionar elementos sueltos o con un recuadro  -----
    $selectable.selectable();

});
