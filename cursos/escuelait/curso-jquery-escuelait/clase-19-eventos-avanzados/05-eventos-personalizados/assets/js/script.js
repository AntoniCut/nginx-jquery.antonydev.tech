/*
    *  ----------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  script.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-19-eventos-avanzados/05-eventos-personalizados/assets/js/script.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------------------  *
*/



//  -----  arrancar cuando el documento está listo  -----
$(() => {

    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {JQuery<HTMLElement>} - `bloques e ítems que escuchan despertarse` */
    const $oyentes = $(".elem, li");

    /** @type {JQuery<HTMLElement>} - `divisiones e ítems que se despiertan` */
    const $objetivos = $("div.elem, li");


    //  -----  escuchar el evento propio despertarse  -----
    $oyentes.on("despertarse", (evento) => {

        /** @type {JQuery<HTMLElement>} - `elemento que despierta` */
        const $elemento = /** @type {JQuery<HTMLElement>} */ (
            $(evento.currentTarget)
        );

        //  -----  sustituir el texto al despertar  -----
        $elemento.text("ahhhhhhhh");
    });


    //  -----  despertar las divisiones y los ítems  -----
    $objetivos.trigger("despertarse");

});
