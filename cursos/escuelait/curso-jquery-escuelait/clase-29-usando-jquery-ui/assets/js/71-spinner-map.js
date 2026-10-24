/*
    *  -----------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  71-spinner-map.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/71-spinner-map.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `latitud` */
    const $latitud = $("#latitud");

    /** @type {JQuery<HTMLInputElement>} - `longitud` */
    const $longitud = $("#longitud");

    //  -----  limitar la latitud  -----
    $latitud.spinner({ min: -90, max: 90, step: 0.1 });

    //  -----  limitar la longitud  -----
    $longitud.spinner({ min: -180, max: 180, step: 0.1 });

});
