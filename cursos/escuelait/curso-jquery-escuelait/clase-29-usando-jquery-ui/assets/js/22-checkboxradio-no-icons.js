/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  22-checkboxradio-no-icons.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/22-checkboxradio-no-icons.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `radios de ubicación` */
    const $entradas = $("input");

    //  -----  convertir los radios en botones sin icono  -----
    $entradas.checkboxradio({
        icon: false,
    });

});
