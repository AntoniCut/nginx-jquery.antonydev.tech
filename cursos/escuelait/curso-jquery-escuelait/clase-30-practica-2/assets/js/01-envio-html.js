/*
    *  ---------------------------------------------------------------------------------------------------------------------------  *
    *  -----  01-envio-html.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-30-practica-2/assets/js/01-envio-html.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar el formulario cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLFormElement>} - `formulario de contacto` */
    const $contacto = /** @type {JQuery<HTMLFormElement>} */ ($("#contacto"));

    //  -----  activar el plugin sin opciones  -----
    $contacto.smartform();

});
