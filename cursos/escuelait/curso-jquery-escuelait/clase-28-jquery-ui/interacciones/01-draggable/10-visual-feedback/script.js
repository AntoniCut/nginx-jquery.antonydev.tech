/*
    *  ------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  script.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-jquery-ui/interacciones/draggable/visual-feedback/script.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------------------  *
*/


//  -----  iniciar la demo cuando el dom esté listo  -----
$(function () {

    /** @type {JQuery<HTMLDivElement>} - Caja que se mueve ella misma */
    const $draggable = $("#draggable");

    /** @type {JQuery<HTMLDivElement>} - Caja que arrastra un clon semitransparente */
    const $draggable2 = $("#draggable2");

    /** @type {JQuery<HTMLDivElement>} - Caja que arrastra un helper propio */
    const $draggable3 = $("#draggable3");

    /** @type {JQuery<HTMLDivElement>} - Cajas cuyo orden visual cambia al arrastrar */
    const $apiladas = $("#set div");


    /**
     * ------------------------------------------
     * -----  `crearHelperPersonalizado()`  -----
     * ------------------------------------------
     * - Crea el elemento que sigue al cursor al arrastrar.
     * @return {HTMLDivElement}
     */
    const crearHelperPersonalizado = () => {

        /** - `elemento que se muestra junto al cursor` */
        const helper = document.createElement("div");

        //  -----  aplicar la clase de cabecera de jquery ui  -----
        helper.classList.add("ui-widget-header");

        //  -----  escribir el texto del helper  -----
        helper.textContent = "I'm a custom helper";

        //  -----  devolver el helper  -----
        return helper;
    };


    //  -----  mover la caja original junto al cursor  -----
    $draggable.draggable({ helper: "original" });

    //  -----  arrastrar un clon al 70 % de opacidad  -----
    $draggable2.draggable({ opacity: 0.7, helper: "clone" });

    //  -----  arrastrar un helper propio con el cursor desplazado  -----
    $draggable3.draggable({
        cursor: "move",
        cursorAt: { top: -12, left: -20 },
        helper: crearHelperPersonalizado,
    });

    //  -----  traer al frente la caja que se acaba de arrastrar  -----
    $apiladas.draggable({ stack: "#set div" });

});
