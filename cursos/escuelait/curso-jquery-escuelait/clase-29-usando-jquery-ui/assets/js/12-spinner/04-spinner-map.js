/*
    *  ----------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  04-spinner-map.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/12-spinner/04-spinner-map.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `latitud` */
    const $latitud = $("#latitud");

    /** @type {JQuery<HTMLInputElement>} - `longitud` */
    const $longitud = $("#longitud");

    /** @type {JQuery<HTMLIFrameElement>} - `mapa de Google` */
    const $mapa = $("#mapa");

    /**
     * -------------------------
     * -----  `centrar()`  -----
     * -------------------------
     * - Mueve el mapa de Google al centro indicado por los controles.
     * @return {void}
     */
    const centrar = () => {

        /** - `latitud actual` */
        const latitud = Number($latitud.spinner("value"));

        /** - `longitud actual` */
        const longitud = Number($longitud.spinner("value"));

        //  -----  recentrar el mapa de Google  -----
        $mapa.attr(
            "src",
            `https://maps.google.com/maps?q=${latitud},${longitud}&z=8&hl=es&output=embed`,
        );
    };

    //  -----  limitar la latitud y recentrar al cambiar  -----
    $latitud.spinner({
        min: -90,
        max: 90,
        step: 0.001,
        change: centrar,
        stop: centrar,
    });

    //  -----  limitar la longitud y recentrar al cambiar  -----
    $longitud.spinner({
        min: -180,
        max: 180,
        step: 0.001,
        change: centrar,
        stop: centrar,
    });

});
