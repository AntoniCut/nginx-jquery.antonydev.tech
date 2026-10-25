/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  02-autocomplete-accent-folding.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/02-autocomplete/02-autocomplete-accent-folding.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** - `nombres con acentos` */
    const nombres = [
        "Álvaro",
        "Andrés",
        "Begoña",
        "Belén",
        "César",
        "Érica",
        "Íñigo",
        "José",
        "María",
        "Mónica",
        "Núria",
        "Óscar",
        "Úrsula",
    ];

    /** @type {JQuery<HTMLInputElement>} - `campo de nombres` */
    const $nombre = $("#nombre");

    /**
     * ---------------------------------
     * -----  `sinAcentos(texto)`  -----
     * ---------------------------------
     * - Quita las marcas de acento y pasa el texto a minúsculas.
     * @param {string} texto - Texto original.
     * @return {string}
     */
    const sinAcentos = (texto) => {

        //  -----  separar las marcas y eliminarlas  -----
        return texto.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
    };

    /**
     * ---------------------------------------------
     * -----  `alBuscar(peticion, responder)`  -----
     * ---------------------------------------------
     * - Devuelve los nombres que coinciden sin tener en cuenta los acentos.
     * @param {{ term: string }} peticion - Texto escrito.
     * @param {(coincidencias: string[]) => void} responder - Recibe las coincidencias.
     * @return {void}
     */
    const alBuscar = (peticion, responder) => {

        /** - `texto buscado, sin acentos` */
        const filtro = sinAcentos(peticion.term);

        //  -----  si no hay texto, no hay sugerencias  -----
        if (!filtro) {

            //  -----  vaciar la lista  -----
            responder([]);

            //  -----  no seguir filtrando  -----
            return;
        }

        //  -----  devolver los nombres equivalentes sin acentos  -----
        responder(nombres.filter((nombre) => sinAcentos(nombre).includes(filtro)));
    };

    //  -----  buscar nombres aunque el acento no coincida  -----
    $nombre.autocomplete({
        source: alBuscar,
    });

});
