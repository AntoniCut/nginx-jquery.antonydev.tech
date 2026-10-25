/*
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  01-checkboxradio-default.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/04-checkboxradio/01-checkboxradio-default.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `radios y casillas` */
    const $entradas = $("input");

    //  -----  convertir radios y casillas en botones  -----
    $entradas.checkboxradio();

});
