/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  14-autocomplete-remote.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/14-autocomplete-remote.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------  *
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
     * ---------------------------------------------
     * -----  `alBuscar(peticion, responder)`  -----
     * ---------------------------------------------
     * - Filtra las ciudades tras una espera breve.
     * @param {{ term: string }} peticion - Texto escrito.
     * @param {(coincidencias: string[]) => void} responder - Recibe las coincidencias.
     * @return {void}
     */
    const alBuscar = (peticion, responder) => {

        /** - `texto buscado en minúsculas` */
        const filtro = peticion.term.toLowerCase();

        //  -----  avisar de que la búsqueda está en curso  -----
        $estado.text("Buscando…");

        //  -----  imitar la espera de un origen remoto  -----
        window.setTimeout(() => {

            //  -----  publicar las ciudades que coinciden  -----
            responder(ciudades.filter((ciudad) => ciudad.toLowerCase().includes(filtro)));

            //  -----  quitar el aviso de búsqueda  -----
            $estado.text("Elige una ciudad de la lista.");
        }, 300);
    };

    //  -----  buscar a partir de dos letras  -----
    $ciudad.autocomplete({
        minLength: 2,
        source: alBuscar,
    });

});
