/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  69-spinner-currency.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/69-spinner-currency.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `importe` */
    const $importe = $("#importe");

    /** @type {JQuery<HTMLParagraphElement>} - `importe en euros` */
    const $formato = $("#formato");

    /** @type {Intl.NumberFormat} - `formato de euros` */
    const euros = new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" });

    /**
     * --------------------------
     * -----  `escribir()`  -----
     * --------------------------
     * - Muestra el valor como euros.
     * @return {void}
     */
    const escribir = () => {

        //  -----  publicar el importe con formato de moneda  -----
        $formato.text(euros.format(Number($importe.spinner("value")) || 0));
    };

    //  -----  crear el control de céntimos  -----
    $importe.spinner({
        min: 0,
        step: 0.05,
        spin: escribir,
        change: escribir,
    });

    //  -----  escribir el importe inicial  -----
    escribir();

});
