/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  ejemplo-01.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-07-manipulacion-basica-de-elementos/assets/js/ejemplo-01.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------  *
*/


//  -----  arrancar cuando el documento está listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `capa de partida` */
    const $capa = $("#capa");

    //  -----  anotar el html original en la consola  -----
    console.log($capa.html());

    /** @type {JQuery<HTMLParagraphElement>} - `párrafo con text` */
    const $conTexto = $("#con-texto");

    //  -----  escribir las etiquetas como texto  -----
    $conTexto.text("otro <b>texto</b>...");

    /** @type {JQuery<HTMLParagraphElement>} - `párrafo con html` */
    const $conHtml = $("#con-html");

    //  -----  interpretar la negrita como html  -----
    $conHtml.html("otro <b>texto</b>...");
});
