/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  01-selectmenu-default.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/10-selectmenu/01-selectmenu-default.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLSelectElement>} - `velocidad` */
    const $velocidad = $("#velocidad");

    /** @type {JQuery<HTMLSelectElement>} - `archivo con grupos` */
    const $archivo = $("#archivo");

    /** @type {JQuery<HTMLSelectElement>} - `lista larga` */
    const $numero = $("#numero");

    /** @type {JQuery<HTMLSelectElement>} - `trato` */
    const $trato = $("#trato");

    //  -----  sustituir el select de velocidad  -----
    $velocidad.selectmenu();

    //  -----  sustituir el select de archivos  -----
    $archivo.selectmenu();

    //  -----  sustituir el select de números  -----
    $numero.selectmenu();

    //  -----  limitar la altura del menú de números  -----
    $numero.selectmenu("menuWidget").addClass("lista-larga");

    //  -----  sustituir el select de trato  -----
    $trato.selectmenu();

});
