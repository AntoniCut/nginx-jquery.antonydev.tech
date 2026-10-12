/*
    *  ----------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  script.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-19-eventos-avanzados/03-disparar-eventos/assets/js/script.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------------  *
*/



//  -----  arrancar cuando el documento está listo  -----
$(() => {

    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {JQuery<HTMLAnchorElement>} - `enlace del ejercicio` */
    const $enlace = /** @type {JQuery<HTMLAnchorElement>} */ (
        $("span a")
    );

    /** @type {JQuery<HTMLElement>} - `contenedores que escuchan el burbujeo` */
    const $contenedores = $("div, span");


    //  -----  al pulsar el enlace, cambiar su texto  -----
    $enlace.on("click", (evento) => {

        /** @type {JQuery<HTMLAnchorElement>} - `enlace pulsado` */
        const $pulsado = /** @type {JQuery<HTMLAnchorElement>} */ (
            $(evento.currentTarget)
        );

        //  -----  escribir hola en el enlace  -----
        $pulsado.text("hola");
    });


    //  -----  al pulsar el enlace, ponerlo en rojo  -----
    $enlace.on("click", (evento) => {

        /** @type {JQuery<HTMLAnchorElement>} - `enlace pulsado` */
        const $pulsado = /** @type {JQuery<HTMLAnchorElement>} */ (
            $(evento.currentTarget)
        );

        //  -----  pintar el enlace de rojo  -----
        $pulsado.css("color", "red");
    });


    //  -----  registrar el click que burbujea en div y span  -----
    $contenedores.on("click", (evento) => {

        //  -----  anotar el objetivo y el elemento del manejador  -----
        console.log("Click sobre ", evento.target, evento.currentTarget);
    });


    //  -----  disparar el click del enlace a los 5 segundos  -----
    setTimeout(() => {

        //  -----  lanzar el click sin intervención del usuario  -----
        $enlace.trigger("click");
    }, 5000);

});
