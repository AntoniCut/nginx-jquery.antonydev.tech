/*
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  01-metodo-on-sin-delegacion.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/01-metodo-on-sin-delegacion.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(function () {


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */


    /** @type {JQuery<HTMLDivElement>} - Elemento fuente */
     const $source = $('#source');
   
    /** @type {JQuery<HTMLParagraphElement>} - Elemento a convertir en negrita */
    const $boldize = $('.boldize');

    /** @type {JQuery<HTMLButtonElement>} - Botón de clonación */
    const $clone = $('#clone');

    /** @type {JQuery<HTMLDivElement>} - Elemento destino */
    const $target = $('#target');


    /*
        *  --------------------- *
        *  -----  Eventos  -----  *
        *  ---------------------  *
    */

    $boldize.on('click', function () {
        $(this).css('font-weight', 'bold');
    });


    $clone.on('click', function () {
        $target.html($source.html());
    });

});
