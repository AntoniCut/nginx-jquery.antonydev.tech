/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  script.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-19-eventos-avanzados/06-eventos-personalizados2/assets/js/script.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------------  *
*/



//  -----  arrancar cuando el documento está listo  -----
$(() => {

    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {JQuery<HTMLElement>} - `bloques animados` */
    const $bloques = $(".elem");

    /** @type {JQuery<HTMLDivElement>} - `divisiones que muestran los segundos` */
    const $divisiones = /** @type {JQuery<HTMLDivElement>} */ (
        $("div")
    );


    /**
     * -----------------------------------
     * -----  `timestampSegundos()`  -----
     * -----------------------------------
     * - Devuelve los segundos actuales.
     * @return {number}
     */
    const timestampSegundos = () => {

        /** - `instante actual` */
        const fecha = new Date();

        //  -----  devolver los segundos redondeados  -----
        return Math.round(fecha.getTime() / 1000);
    };


    //  -----  animar cada bloque por separado  -----
    $bloques.each((_, elemento) => {

        /** @type {JQuery<HTMLElement>} - `bloque animado` */
        const $elemento = $(elemento);

        //  -----  ocultar y mostrar el bloque  -----
        $elemento.slideUp(2000).slideDown(2000, () => {

            //  -----  avisar de que la animación terminó  -----
            $elemento.trigger("termine");
        });
    });


    //  -----  al terminar, pintar el fondo  -----
    $bloques.on("termine", (evento) => {

        /** @type {JQuery<HTMLElement>} - `bloque que terminó` */
        const $elemento = /** @type {JQuery<HTMLElement>} */ (
            $(evento.currentTarget)
        );

        //  -----  cambiar el fondo del bloque  -----
        $elemento.css("background-color", "#9fd");
    });


    //  -----  al terminar, repetir el fundido y volver a avisar  -----
    $bloques.on("termine", (evento) => {

        /** @type {JQuery<HTMLElement>} - `bloque que terminó` */
        const $elemento = /** @type {JQuery<HTMLElement>} */ (
            $(evento.currentTarget)
        );

        //  -----  fundir la salida y la entrada  -----
        $elemento.fadeOut(2000).fadeIn(2000);

        //  -----  encolar otro aviso termine  -----
        $elemento.queue((siguiente) => {

            //  -----  disparar termine otra vez  -----
            $elemento.trigger("termine");

            //  -----  seguir con la cola  -----
            siguiente();
        });
    });


    //  -----  al terminar una división, escribir los segundos  -----
    $divisiones.on("termine", (evento) => {

        /** @type {JQuery<HTMLDivElement>} - `división que terminó` */
        const $division = /** @type {JQuery<HTMLDivElement>} */ (
            $(evento.currentTarget)
        );

        //  -----  mostrar la marca de tiempo  -----
        $division.text(timestampSegundos());
    });

});
