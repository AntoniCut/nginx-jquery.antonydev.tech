/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  02-slider-colorpicker.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/11-slider/02-slider-colorpicker.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `deslizador del rojo` */
    const $rojo = $("#rojo");

    /** @type {JQuery<HTMLDivElement>} - `deslizador del verde` */
    const $verde = $("#verde");

    /** @type {JQuery<HTMLDivElement>} - `deslizador del azul` */
    const $azul = $("#azul");

    /** @type {HTMLDivElement} - `muestra de color` */
    const muestra = /** @type {HTMLDivElement} */ (document.getElementById("muestra"));

    /**
     * ------------------------
     * -----  `pintar()`  -----
     * ------------------------
     * - Compone el color y escribe los tres valores.
     * @return {void}
     */
    const pintar = () => {

        /** - `cantidad de rojo` */
        const rojo = $rojo.slider("value");

        /** - `cantidad de verde` */
        const verde = $verde.slider("value");

        /** - `cantidad de azul` */
        const azul = $azul.slider("value");

        //  -----  pintar la muestra  -----
        muestra.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;

        //  -----  escribir el rojo  -----
        $("#valor-rojo").text(rojo);

        //  -----  escribir el verde  -----
        $("#valor-verde").text(verde);

        //  -----  escribir el azul  -----
        $("#valor-azul").text(azul);
    };

    //  -----  preparar el rojo  -----
    $rojo.slider({ min: 0, max: 255, value: 255, slide: pintar, change: pintar });

    //  -----  preparar el verde  -----
    $verde.slider({ min: 0, max: 255, value: 140, slide: pintar, change: pintar });

    //  -----  preparar el azul  -----
    $azul.slider({ min: 0, max: 255, value: 60, slide: pintar, change: pintar });

});
