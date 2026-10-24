/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  67-slider-vertical.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/67-slider-vertical.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `deslizador vertical` */
    const $slider = $("#slider");

    /** @type {JQuery<HTMLParagraphElement>} - `valor visible` */
    const $valor = $("#valor");

    //  -----  colocar el deslizador en vertical  -----
    $slider.slider({
        orientation: "vertical",
        value: 50,
        slide: (evento, ui) => {

            //  -----  escribir el valor  -----
            $valor.text(ui.value || 0);
        },
    });

});
