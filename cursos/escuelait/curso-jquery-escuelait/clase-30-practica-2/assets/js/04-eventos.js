/*
    *  ---------------------------------------------------------------------------------------------------------------------  *
    *  -----  04-eventos.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-30-practica-2/assets/js/04-eventos.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar los dos formularios cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLFormElement>} - `formulario que baja la opacidad al enviar` */
    const $contacto = /** @type {JQuery<HTMLFormElement>} */ ($("#contacto"));

    /** @type {JQuery<HTMLFormElement>} - `formulario que crea su propio mensaje` */
    const $otro = /** @type {JQuery<HTMLFormElement>} */ ($("#f2"));


    //  -----  activar el primer formulario con su capa y 6 segundos  -----
    $contacto.smartform({

        /** - `capa que ya está en la página` */
        capaMensaje: "#mensaje",

        /** - `autoguardado a los 6 segundos` */
        segundos: 6
    })

        //  -----  bajar la opacidad al empezar el envío  -----
        .on("comienzoenvio", () => {

            //  -----  el formulario queda en segundo plano  -----
            $contacto.css("opacity", "0.3");
        })

        //  -----  recuperar la opacidad al terminar  -----
        .on("finalizoenvio", () => {

            //  -----  el formulario vuelve a verse entero  -----
            $contacto.css("opacity", "1");
        });


    //  -----  activar el segundo formulario a los 10 segundos  -----
    $otro.smartform({

        /** - `autoguardado a los 10 segundos` */
        segundos: 10
    });

});
