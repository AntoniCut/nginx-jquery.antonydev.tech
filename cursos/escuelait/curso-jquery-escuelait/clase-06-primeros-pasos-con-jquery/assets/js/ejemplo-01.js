/*
    *  ------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  ejemplo-01.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-06-primeros-pasos-con-jquery/assets/js/ejemplo-01.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------------  *
*/

/**
 * -------------------------
 * -----  `mostrar()`  -----
 * -------------------------
 * - Muestra todos los párrafos.
 * @return {void}
 */
const mostrar = () => {

    //  -----  mostrar los párrafos durante dos segundos  -----
    $("p").show(2000);
};


//  -----  arrancar cuando el documento está listo  -----
$(() => {

    //  -----  ocultar los párrafos de la clase durante dos segundos  -----
    $(".miclase").hide(2000);

    /** @type {JQuery<HTMLDivElement>} - `caja añadida al párrafo` */
    const $caja = $("<div>", {
        /** - `clase de la caja` */
        class: "h",
    });

    /** @type {JQuery<HTMLParagraphElement>} - `párrafo dentro de la caja` */
    const $parrafo = $("<p>");

    //  -----  texto del párrafo  -----
    $parrafo.text("parrafo");

    /** @type {JQuery<HTMLElement>} - `negrita dentro de la caja` */
    const $negrita = $("<strong>");

    //  -----  texto de la negrita  -----
    $negrita.text("negrita");

    //  -----  meter el texto, el párrafo y la negrita en la caja  -----
    $caja.append(document.createTextNode("texto"), $parrafo, $negrita);

    //  -----  colocar la caja al final del párrafo  -----
    $caja.appendTo("#algo");

    //  -----  color del texto de la caja  -----
    $caja.css("color", "red");
});


//  -----  mostrar los párrafos en un segundo arranque  -----
$(mostrar);
