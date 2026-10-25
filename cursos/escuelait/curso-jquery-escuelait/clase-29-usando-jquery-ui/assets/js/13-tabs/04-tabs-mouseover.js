/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  04-tabs-mouseover.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/13-tabs/04-tabs-mouseover.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `pestañas que se abren al pasar el ratón` */
    const $pestanas = $("#tabs");

    //  -----  abrir el panel al pasar el puntero  -----
    $pestanas.tabs({
        event: "mouseover",
    });

});
