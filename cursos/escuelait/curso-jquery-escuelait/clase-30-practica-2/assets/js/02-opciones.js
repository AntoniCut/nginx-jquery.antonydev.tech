/*
    *  -----------------------------------------------------------------------------------------------------------------------  *
    *  -----  02-opciones.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-30-practica-2/assets/js/02-opciones.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar el formulario cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLFormElement>} - `formulario de contacto` */
    const $contacto = /** @type {JQuery<HTMLFormElement>} */ ($("#contacto"));

    //  -----  activar el plugin con capa y método explícitos  -----
    $contacto.smartform({

        /** - `capa que ya está en la página` */
        capaMensaje: "#mensaje",

        /** - `envío por post` */
        metodo: "post"
    });

});
