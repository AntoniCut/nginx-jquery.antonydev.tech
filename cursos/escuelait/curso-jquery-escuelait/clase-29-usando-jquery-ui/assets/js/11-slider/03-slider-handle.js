/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  03-slider-handle.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/11-slider/03-slider-handle.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `deslizador` */
    const $slider = $("#slider");

    /** @type {JQuery<HTMLDivElement>} - `asa con el valor` */
    const $asa = $("#custom-handle");

    /**
     * -------------------------------
     * -----  `escribir(valor)`  -----
     * -------------------------------
     * - Escribe el valor en el asa.
     * @param {number} valor - Valor del deslizador.
     * @return {void}
     */
    const escribir = (valor) => {

        //  -----  mostrar el valor en el asa  -----
        $asa.text(valor);
    };

    //  -----  usar un asa que muestra el valor  -----
    $slider.slider({
        value: 40,
        create: () => {

            //  -----  escribir el valor inicial  -----
            escribir($slider.slider("value"));
        },
        slide: (evento, ui) => {

            //  -----  escribir el valor mientras se arrastra  -----
            escribir(ui.value || 0);
        },
    });

});
