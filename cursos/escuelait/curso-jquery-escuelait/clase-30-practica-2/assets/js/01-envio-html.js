/*
    *  ---------------------------------------------------------------------------------------------------------------------------  *
    *  -----  01-envio-html.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-30-practica-2/assets/js/01-envio-html.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  registrar el plugin en jquery  -----
(($) => {

    /**
     * ---------------------------
     * -----  `smartform()`  -----
     * ---------------------------
     * - Envía el formulario por ajax y escribe el texto de la respuesta en `#mensaje`.
     * - No es una flecha: `this` tiene que ser la colección jQuery.
     * @return {JQuery} - Cadena para encadenar métodos.
     */
    $.fn.smartform = function () {

        //  -----  preparar cada formulario de la colección  -----
        this.each((_, elemento) => {

            /** @type {JQuery<HTMLFormElement>} - `formulario que se envía` */
            const $elem = /** @type {JQuery<HTMLFormElement>} */ ($(elemento));

            //  -----  interceptar el envío del navegador  -----
            $elem.on("submit", (evento) => {

                //  -----  no recargar la página  -----
                evento.preventDefault();

                //  -----  pedir la respuesta de texto al action  -----
                $.ajax({

                    /** - `dirección del atributo action` */
                    url: $elem.attr("action"),

                    /** - `campos serializados` */
                    data: $elem.serialize(),

                    /** - `método post` */
                    type: "post",

                    /** - `respuesta de texto` */
                    dataType: "text",

                    /** - `avisar y bloquear el botón` */
                    beforeSend: () => {

                        //  -----  texto de espera en la capa fija  -----
                        $("#mensaje").text("Enviando...").css("color", "#999");

                        //  -----  impedir otro envío  -----
                        $elem.find(":submit").prop("disabled", true);
                    },

                    /**
                     * - Escribe el texto que devolvió el php.
                     * @param {string} respuesta - Cuerpo de la respuesta.
                     * @return {void}
                     */
                    success: (respuesta) => {

                        //  -----  mostrar el texto recibido  -----
                        $("#mensaje").text(respuesta);
                    },

                    /** - `avisar si la petición falla` */
                    error: () => {

                        //  -----  mensaje de fallo en rojo  -----
                        $("#mensaje").text("Error...").css("color", "red");
                    },

                    /** - `volver a permitir el envío` */
                    complete: () => {

                        //  -----  habilitar el botón  -----
                        $elem.find(":submit").prop("disabled", false);
                    }
                });
            });
        });

        //  -----  permitir encadenar la colección  -----
        return this;
    };

})(jQuery);


//  -----  iniciar el formulario cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLFormElement>} - `formulario de contacto` */
    const $contacto = /** @type {JQuery<HTMLFormElement>} */ ($("#contacto"));

    //  -----  activar el plugin sin opciones  -----
    $contacto.smartform();

});
