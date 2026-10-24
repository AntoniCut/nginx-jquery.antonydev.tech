/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  83-tooltip-content.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/83-tooltip-content.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {NodeListOf<HTMLAnchorElement>} - `términos con detalle` */
    const terminos = document.querySelectorAll(".termino");

    //  -----  crear una ayuda por término con su detalle  -----
    terminos.forEach((termino) => {

        //  -----  usar el detalle como contenido de la ayuda  -----
        $(termino).tooltip({
            items: ".termino",
            content: termino.dataset.detalle || "",
        });
    });

});
