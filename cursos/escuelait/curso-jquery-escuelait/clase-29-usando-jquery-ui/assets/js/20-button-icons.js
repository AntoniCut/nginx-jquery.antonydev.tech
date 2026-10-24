/*
    *  -------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  20-button-icons.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/20-button-icons.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLButtonElement>} - `botón de reproducir` */
    const $reproducir = $("#reproducir");

    /** @type {JQuery<HTMLButtonElement>} - `botón de anterior` */
    const $anterior = $("#anterior");

    /** @type {JQuery<HTMLButtonElement>} - `botón de siguiente` */
    const $siguiente = $("#siguiente");

    /** @type {JQuery<HTMLButtonElement>} - `botón de parar` */
    const $parar = $("#parar");

    //  -----  mostrar solo el icono de reproducir  -----
    $reproducir.button({
        icon: "ui-icon-play",
        showLabel: false,
    });

    //  -----  colocar el icono al inicio del texto  -----
    $anterior.button({
        icon: "ui-icon-seek-prev",
        iconPosition: "beginning",
    });

    //  -----  colocar el icono al final del texto  -----
    $siguiente.button({
        icon: "ui-icon-seek-next",
        iconPosition: "end",
    });

    //  -----  colocar el icono encima del texto  -----
    $parar.button({
        icon: "ui-icon-stop",
        iconPosition: "top",
    });

});
