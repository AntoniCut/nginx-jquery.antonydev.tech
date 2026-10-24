/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  66-slider-vertical-range.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/66-slider-vertical-range.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `rango vertical` */
    const $slider = $("#slider");

    /** @type {JQuery<HTMLParagraphElement>} - `intervalo visible` */
    const $importe = $("#importe");

    //  -----  activar un rango vertical  -----
    $slider.slider({
        orientation: "vertical",
        range: true,
        min: 0,
        max: 100,
        values: [20, 80],
        slide: (evento, ui) => {

            //  -----  si hay dos valores, escribirlos  -----
            if (ui.values) {

                //  -----  actualizar el intervalo  -----
                $importe.text(`${ui.values[0]} – ${ui.values[1]}`);
            }
        },
    });

});
