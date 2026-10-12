/*
    *  --------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  script.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-19-eventos-avanzados/04-disparar-manejadores/assets/js/script.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------------------------  *
*/



//  -----  arrancar cuando el documento está listo  -----
$(() => {

    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {JQuery<HTMLFormElement>} - `formulario del ejercicio` */
    const $form = /** @type {JQuery<HTMLFormElement>} */ (
        $("form")
    );

    /** @type {JQuery<HTMLAnchorElement>} - `enlace del ejercicio` */
    const $enlace = /** @type {JQuery<HTMLAnchorElement>} */ (
        $("span a")
    );

    /** @type {JQuery<HTMLElement>} - `contenedores que escuchan el burbujeo` */
    const $contenedores = $("div, span");


    //  -----  al enviar el formulario, pintar su fondo  -----
    $form.on("submit", (evento) => {

        /** @type {JQuery<HTMLFormElement>} - `formulario enviado` */
        const $enviado = /** @type {JQuery<HTMLFormElement>} */ (
            $(evento.currentTarget)
        );

        //  -----  poner el formulario en rojo  -----
        $enviado.css("background-color", "red");
    });


    //  -----  lanzar el manejador sin enviar el formulario  -----
    $form.triggerHandler("submit");


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


    //  -----  disparar el click del enlace  -----
    $enlace.trigger("click");

});
