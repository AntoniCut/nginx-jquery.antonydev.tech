/*
    *  --------------------------------------------------------------------------------------------------------------------------  *
    *  -----  script.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-jquery-ui/02-metodo-on-delegacion/script.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------  *
*/


//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {JQuery<HTMLDivElement>} - `elemento fuente` */
    const $source = /** @type {JQuery<HTMLDivElement>} */ (
        $("#source")
    );

    /** @type {JQuery<HTMLButtonElement>} - `botón de clonación` */
    const $clone = /** @type {JQuery<HTMLButtonElement>} */ (
        $("#clone")
    );

    /** @type {JQuery<HTMLDivElement>} - `elemento destino` */
    const $target = /** @type {JQuery<HTMLDivElement>} */ (
        $("#target")
    );

    /** @type {JQuery<HTMLDivElement>} - `origen y destino que delegan el click` */
    const $contenedores = /** @type {JQuery<HTMLDivElement>} */ (
        $("#source, #target")
    );


    /*
        *  --------------------- *
        *  -----  Eventos  -----  *
        *  ---------------------  *
    */

    
    //  -----  delegar el click de .boldize en el origen y en el destino  -----
    $contenedores.on("click", ".boldize", (evento) => {

        /** @type {JQuery<HTMLParagraphElement>} - `párrafo pulsado` */
        const $parrafo = /** @type {JQuery<HTMLParagraphElement>} */ (
            $(evento.currentTarget)
        );

        //  -----  poner el párrafo en negrita  -----
        $parrafo.css("font-weight", "bold");
    });


    //  -----  al pulsar clone, copiar el contenido del origen  -----
    $clone.on("click", () => {

        //  -----  vaciar el destino antes de copiar  -----
        $target.empty();

        //  -----  clonar los hijos del origen dentro del destino  -----
        $source.children().clone().appendTo($target);
    });

});
