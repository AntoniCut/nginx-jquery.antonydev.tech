/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  70-spinner-decimal.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/70-spinner-decimal.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `cantidad decimal` */
    const $cantidad = $("#cantidad");

    /** @type {JQuery<HTMLParagraphElement>} - `cantidad con dos decimales` */
    const $formato = $("#formato");

    /** @type {Intl.NumberFormat} - `formato con dos decimales` */
    const formato = new Intl.NumberFormat("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    /**
     * --------------------------
     * -----  `escribir()`  -----
     * --------------------------
     * - Muestra el valor con dos decimales.
     * @return {void}
     */
    const escribir = () => {

        //  -----  publicar la cantidad  -----
        $formato.text(formato.format(Number($cantidad.spinner("value")) || 0));
    };

    //  -----  crear el control decimal  -----
    $cantidad.spinner({
        min: 0,
        step: 0.01,
        spin: escribir,
        change: escribir,
    });

    //  -----  escribir la cantidad inicial  -----
    escribir();

});
