/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  02-menu-categories.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/08-menu/02-menu-categories.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLUListElement>} - `menú con categorías` */
    const $menu = $("#menu");

    //  -----  activar el menú saltando las cabeceras  -----
    $menu.menu({
        items: "> :not(.ui-widget-header)",
    });

});
