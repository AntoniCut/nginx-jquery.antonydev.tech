/*
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  03-metodo-on-tercer-parametro-datos.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/03-metodo-on-tercer-parametro-datos.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {JQuery<HTMLDivElement>} - `elemento fuente` */
    const $source = /** @type {JQuery<HTMLDivElement>} */ (
        $("#source")
    );

    /** @type {JQuery<HTMLButtonElement>} - `botón de clonación` */
    const $clone = /** @type {JQuery<HTMLButtonElement>} */ (
        $("#clone")
    );

    /** @type {JQuery<HTMLDivElement>} - `elemento destino` */
    const $target = /** @type {JQuery<HTMLDivElement>} */ (
        $("#target")
    );

    /** @type {JQuery<HTMLDivElement>} - `origen y destino que delegan el click` */
    const $contenedores = /** @type {JQuery<HTMLDivElement>} */ (
        $("#source, #target")
    );


    /**
     * @typedef {Object} DatosNegrita
     * @property {string} peso - Valor de font-weight que se aplica al pulsar.
     * @property {string} color - Color del texto que se aplica al pulsar.
     */

    /**
     * ------------------------
     * -----  `datos {}`  -----
     * ------------------------
     * - `peso y color que el manejador aplica al pulsar`
     */
    const datos = {
        /** - `valor de font-weight` */
        peso: "bold",

        /** - `color del texto` */
        color: "#c0392b",
    };


    /**
     * ------------------------------------
     * -----  `ponerNegrita(evento)`  -----
     * ------------------------------------
     * - Pone en negrita el párrafo con el peso y el color recibidos en el evento.
     * @param {JQuery.ClickEvent<HTMLDivElement, DatosNegrita, HTMLParagraphElement>} evento - Click delegado con los datos del manejador.
     * @return {void}
     */
    const ponerNegrita = (evento) => {

        /** @type {JQuery<HTMLParagraphElement>} - `párrafo pulsado` */
        const $parrafo = /** @type {JQuery<HTMLParagraphElement>} */ (
            $(evento.currentTarget)
        );

        //  -----  aplicar el peso recibido en el tercer argumento  -----
        $parrafo.css("font-weight", evento.data.peso);

        //  -----  aplicar el color recibido en el tercer argumento  -----
        $parrafo.css("color", evento.data.color);
    };


    /*
        *  ---------------------  *
        *  -----  Eventos  -----  *
        *  ---------------------  *
    */


    //  -----  delegar el click y pasar los datos en el tercer argumento  -----
    $contenedores.on("click", ".boldize", datos, ponerNegrita);


    //  -----  al pulsar clone, copiar el contenido del origen  -----
    $clone.on("click", () => {

        //  -----  vaciar el destino antes de copiar  -----
        $target.empty();

        //  -----  clonar los hijos del origen dentro del destino  -----
        $source.children().clone().appendTo($target);
    });

});
