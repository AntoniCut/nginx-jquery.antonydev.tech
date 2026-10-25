/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  09-autocomplete-remote-jsonp.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/02-autocomplete/09-autocomplete-remote-jsonp.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** - `ciudades para la búsqueda` */
    const ciudades = [
        "Madrid",
        "Barcelona",
        "Valencia",
        "Sevilla",
        "Zaragoza",
        "Málaga",
        "Murcia",
        "Palma",
        "Bilbao",
        "Alicante",
        "Córdoba",
        "Valladolid",
        "Vigo",
        "Gijón",
        "Granada",
        "A Coruña",
        "Vitoria",
        "Oviedo",
        "Salamanca",
        "Santander",
        "Logroño",
        "Pamplona",
        "Donostia",
        "Toledo",
    ];

    /** @type {JQuery<HTMLInputElement>} - `campo de ciudad` */
    const $ciudad = $("#ciudad");

    /** @type {JQuery<HTMLParagraphElement>} - `aviso de la búsqueda` */
    const $estado = $("#estado");

    /**
     * ------------------------------------------------
     * -----  `recibirJsonp(termino, responder)`  -----
     * ------------------------------------------------
     * - Imita la función que recibiría el JSONP y entrega las coincidencias.
     * @param {string} termino - Texto escrito.
     * @param {(coincidencias: string[]) => void} responder - Recibe las coincidencias.
     * @return {void}
     */
    const recibirJsonp = (termino, responder) => {

        /** - `texto buscado en minúsculas` */
        const filtro = termino.toLowerCase();

        //  -----  entregar las ciudades como haría la respuesta JSONP  -----
        responder(ciudades.filter((ciudad) => ciudad.toLowerCase().includes(filtro)));

        //  -----  quitar el aviso de búsqueda  -----
        $estado.text("Respuesta recibida.");
    };

    /**
     * ---------------------------------------------
     * -----  `alBuscar(peticion, responder)`  -----
     * ---------------------------------------------
     * - Lanza la petición y entrega el resultado a la función de respuesta.
     * @param {{ term: string }} peticion - Texto escrito.
     * @param {(coincidencias: string[]) => void} responder - Recibe las coincidencias.
     * @return {void}
     */
    const alBuscar = (peticion, responder) => {

        //  -----  avisar de que la petición está en curso  -----
        $estado.text("Pidiendo datos…");

        //  -----  imitar la vuelta de la petición JSONP  -----
        window.setTimeout(() => {

            //  -----  entregar el término a la función de respuesta  -----
            recibirJsonp(peticion.term, responder);
        }, 400);
    };

    //  -----  buscar a partir de dos letras  -----
    $ciudad.autocomplete({
        minLength: 2,
        source: alBuscar,
    });

});
