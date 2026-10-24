/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  62-slider-range-max.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/62-slider-range-max.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `deslizador con máximo fijo` */
    const $slider = $("#slider");

    /** @type {JQuery<HTMLParagraphElement>} - `valor visible` */
    const $valor = $("#valor");

    //  -----  rellenar desde el asa hasta el máximo  -----
    $slider.slider({
        range: "max",
        min: 1,
        max: 10,
        value: 2,
        slide: (evento, ui) => {

            //  -----  escribir el valor  -----
            $valor.text(`${ui.value || 0} de 10`);
        },
    });

});
