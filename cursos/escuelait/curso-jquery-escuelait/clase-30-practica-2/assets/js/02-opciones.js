/*
    *  -----------------------------------------------------------------------------------------------------------------------  *
    *  -----  02-opciones.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-30-practica-2/assets/js/02-opciones.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  registrar el plugin en jquery  -----
(($) => {

    /**
     * --------------------------------------------
     * -----  `mostrarErrores(capa, textos)`  -----
     * --------------------------------------------
     * - Sustituye el contenido de la capa por una lista de textos.
     * @param {JQuery} capa - Capa de mensaje del formulario.
     * @param {string[]} textos - Fallos devueltos por el php.
     * @return {void}
     */
    const mostrarErrores = (capa, textos) => {

        /** @type {JQuery<HTMLElement>} - `lista de fallos` */
        const $lista = $("<ul>");

        //  -----  un ítem por cada texto  -----
        textos.forEach((texto) => {

            /** @type {JQuery<HTMLElement>} - `línea del fallo` */
            const $item = $("<li>");

            //  -----  texto del fallo, sin html  -----
            $item.text(texto);

            //  -----  añadir la línea a la lista  -----
            $lista.append($item);
        });

        //  -----  vaciar la capa y mostrar la lista  -----
        capa
            .empty()
            .append($lista);
    };


    /**
     * ----------------------------------
     * -----  `enviar(formulario)`  -----
     * ----------------------------------
     * - Pide el JSON con los ajustes guardados en ese formulario.
     * @param {JQuery<HTMLFormElement>} formulario - Formulario que se envía.
     * @return {void}
     */
    const enviar = (formulario) => {

        /** @type {SmartformAjuste} - `url, capa y método de este formulario` */
        const ajuste = formulario.data("smartform");

        //  -----  pedir el json al php  -----
        $.ajax({

            /** - `dirección guardada en el formulario` */
            url: ajuste.url,

            /** - `campos serializados` */
            data: formulario.serialize(),

            /** - `get o post, según la opción` */
            type: ajuste.metodo,

            /** - `respuesta json` */
            dataType: "json",

            /** - `avisar y bloquear el botón` */
            beforeSend: () => {

                //  -----  texto de espera  -----
                ajuste.capa.text("Enviando...").css("color", "#999");

                //  -----  impedir otro envío  -----
                formulario.find(":submit").prop("disabled", true);
            },

            /**
             * - Lista los fallos o confirma el envío.
             * @param {SmartformRespuesta} respuesta - JSON del php.
             * @return {void}
             */
            success: (respuesta) => {

                //  -----  si la respuesta trae fallos, listarlos en rojo  -----
                if (!respuesta.valido) {

                    //  -----  construir la lista de textos  -----
                    mostrarErrores(ajuste.capa, respuesta.errores || []);

                    //  -----  marcar la capa en rojo  -----
                    ajuste.capa.css("color", "red");
                }
                //  -----  si todo llegó, confirmarlo  -----
                else {

                    //  -----  texto de éxito  -----
                    ajuste.capa.text("Todo correcto").css("color", "#666");
                }
            },

            /** - `avisar si la petición falla` */
            error: () => {

                //  -----  mensaje de fallo en rojo  -----
                ajuste.capa.text("Error...").css("color", "red");
            },

            /** - `volver a permitir el envío` */
            complete: () => {

                //  -----  habilitar el botón  -----
                formulario.find(":submit").prop("disabled", false);
            }
        });
    };


    /**
     * -----------------------------------
     * -----  `smartform(opciones)`  -----
     * -----------------------------------
     * - Envía el formulario con la url, la capa de mensaje y el método de las opciones.
     * - No es una flecha: `this` tiene que ser la colección jQuery.
     * @param {SmartformOpciones} [opciones] - Url, capa de mensaje y método.
     * @return {JQuery} - Cadena para encadenar métodos.
     */
    $.fn.smartform = function (opciones) {

        /**
         * -----------------------
         * -----  `conf {}`  -----
         * -----------------------
         * - `opciones de esta llamada, fusionadas con los valores por defecto`
         * @type {SmartformOpciones}
         */
        const conf = $.extend(
            {
                /** - `si no hay url, se usa el action` */
                url: false,

                /** - `si no hay capa, se crea un párrafo` */
                capaMensaje: false,

                /** - `post salvo que se pida get` */
                metodo: "post"
            },
            opciones
        );

        //  -----  preparar cada formulario con su propia url y su propia capa  -----
        this.each((_, elemento) => {

            /** @type {JQuery<HTMLFormElement>} - `formulario que se envía` */
            const $elem = /** @type {JQuery<HTMLFormElement>} */ ($(elemento));

            /** @type {string} - `dirección de envío de este formulario` */
            const url = conf.url ? String(conf.url) : ($elem.attr("action") || "");

            /** @type {JQuery<HTMLElement>} - `párrafo nuevo, por si no pidieron capa` */
            let $capa = $("<p>");

            //  -----  si no pidieron capa, insertar el párrafo en el formulario  -----
            if (!conf.capaMensaje) {

                //  -----  colocar el párrafo al principio  -----
                $capa.prependTo($elem);
            }
            //  -----  si pidieron capa, usar ese elemento  -----
            else {

                //  -----  resolver el selector de la capa  -----
                $capa = $(String(conf.capaMensaje));
            }

            /** - `post, salvo que la opción pida get` */
            const metodo = conf.metodo === "get" ? "get" : "post";

            /**
             * -------------------------
             * -----  `ajuste {}`  -----
             * -------------------------
             * - `url, capa y método de este formulario`
             * @type {SmartformAjuste}
             */
            const ajuste = {
                /** - `dirección de este formulario` */
                url,

                /** - `capa de mensaje de este formulario` */
                capa: $capa,

                /** - `get o post` */
                metodo
            };

            //  -----  guardar los ajustes en el formulario  -----
            $elem.data("smartform", ajuste);

            //  -----  interceptar el envío del navegador  -----
            $elem.on("submit", (evento) => {

                //  -----  no recargar la página  -----
                evento.preventDefault();

                //  -----  enviar este formulario  -----
                enviar($elem);
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

    //  -----  activar el plugin con capa y método explícitos  -----
    $contacto.smartform({

        /** - `capa que ya está en la página` */
        capaMensaje: "#mensaje",

        /** - `envío por post` */
        metodo: "post"
    });

});
