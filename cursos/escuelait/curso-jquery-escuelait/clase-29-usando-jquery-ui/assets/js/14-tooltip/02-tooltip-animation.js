/*
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  02-tooltip-animation.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/14-tooltip/02-tooltip-animation.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLAnchorElement>} - `ayuda con animación de entrada` */
    const $entrada = $("#entrada");

    /** @type {JQuery<HTMLAnchorElement>} - `ayuda con animación de salida` */
    const $salida = $("#salida");

    /** @type {JQuery<HTMLAnchorElement>} - `ayuda con las dos animaciones` */
    const $ambas = $("#ambas");

    //  -----  deslizar la ayuda al abrirla  -----
    $entrada.tooltip({
        show: { effect: "slideDown", delay: 200 },
    });

    //  -----  fundir la ayuda al cerrarla  -----
    $salida.tooltip({
        hide: { effect: "fade", duration: 400 },
    });

    //  -----  animar la entrada y la salida  -----
    $ambas.tooltip({
        show: { effect: "slideDown", delay: 150 },
        hide: { effect: "fade", duration: 300 },
    });

});
