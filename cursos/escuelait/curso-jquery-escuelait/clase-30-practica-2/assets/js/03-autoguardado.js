/*
    *  -------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  03-autoguardado.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-30-practica-2/assets/js/03-autoguardado.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar el formulario cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLFormElement>} - `formulario de contacto` */
    const $contacto = /** @type {JQuery<HTMLFormElement>} */ ($("#contacto"));

    //  -----  activar el plugin con la capa y los 6 segundos  -----
    $contacto.smartform({

        /** - `capa que ya está en la página` */
        capaMensaje: "#mensaje",

        /** - `envío por post` */
        metodo: "post",

        /** - `autoguardado a los 6 segundos` */
        segundos: 6
    });

});
