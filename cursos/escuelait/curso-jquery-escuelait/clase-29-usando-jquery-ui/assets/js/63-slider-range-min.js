/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  63-slider-range-min.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/63-slider-range-min.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `deslizador con mínimo fijo` */
    const $slider = $("#slider");

    /** @type {JQuery<HTMLParagraphElement>} - `valor visible` */
    const $valor = $("#valor");

    //  -----  rellenar desde el mínimo hasta el asa  -----
    $slider.slider({
        range: "min",
        min: 0,
        max: 100,
        value: 60,
        slide: (evento, ui) => {

            //  -----  escribir el porcentaje  -----
            $valor.text(`${ui.value || 0} %`);
        },
    });

});
