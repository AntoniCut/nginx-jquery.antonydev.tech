/*
    *  -----------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  65-slider-snap.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/65-slider-snap.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `deslizador por incrementos` */
    const $slider = $("#slider");

    /** @type {JQuery<HTMLParagraphElement>} - `valor visible` */
    const $valor = $("#valor");

    //  -----  ajustar el asa de 50 en 50  -----
    $slider.slider({
        min: 0,
        max: 500,
        step: 50,
        value: 100,
        slide: (evento, ui) => {

            //  -----  escribir el valor ajustado  -----
            $valor.text(ui.value || 0);
        },
    });

});
