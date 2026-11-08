/*
    *  -------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  03-autoguardado.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-30-practica-2/assets/js/03-autoguardado.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------  *
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

        /** @type {SmartformAjuste} - `url, capa, método y segundos de este formulario` */
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

            /** - `avisar, bloquear el botón y cancelar la espera` */
            beforeSend: () => {

                //  -----  texto de espera  -----
                ajuste.capa.text("Enviando...").css("color", "#999");

                //  -----  impedir otro envío  -----
                formulario.find(":submit").prop("disabled", true);

                /** @type {number | undefined} - `espera pendiente de este formulario` */
                const retardo = formulario.data("retardo");

                //  -----  cancelar el autoguardado pendiente  -----
                window.clearTimeout(retardo);
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

            /** - `volver a permitir el envío y a contar la espera` */
            complete: () => {

                //  -----  habilitar el botón  -----
                formulario.find(":submit").prop("disabled", false);

                //  -----  volver a contar la espera  -----
                autosave(formulario);
            }
        });
    };


    /**
     * ------------------------------------
     * -----  `autosave(formulario)`  -----
     * ------------------------------------
     * - Deja un envío pendiente con los segundos de ese formulario.
     * - Si el checkbox está apagado, cancela la espera y no arma otra.
     * @param {JQuery<HTMLFormElement>} formulario - Formulario que se enviará solo.
     * @return {void}
     */
    const autosave = (formulario) => {

        /** @type {number | undefined} - `espera que ya estaba pendiente` */
        const previo = formulario.data("retardo");

        //  -----  una sola espera por formulario  -----
        window.clearTimeout(previo);

        /** @type {JQuery<HTMLInputElement>} - `interruptor del autoguardado` */
        const interruptor = /** @type {JQuery<HTMLInputElement>} */ (formulario.find("[name='autosave']"));

        //  -----  apagado: no dejar otra espera  -----
        if (interruptor.length && !interruptor.prop("checked")) {
            return;
        }

        /** @type {SmartformAjuste} - `ajustes guardados en el formulario` */
        const ajuste = formulario.data("smartform");

        /** - `identificador de la espera` */
        const retardo = window.setTimeout(() => {

            //  -----  enviar cuando vence la espera  -----
            enviar(formulario);

        }, Number(ajuste.segundos) * 1000);

        //  -----  recordar la espera para poder cancelarla  -----
        formulario.data("retardo", retardo);
    };


    /**
     * -----------------------------------
     * -----  `smartform(opciones)`  -----
     * -----------------------------------
     * - Envía el formulario al momento y otra vez cuando pasan los segundos.
     * - No es una flecha: `this` tiene que ser la colección jQuery.
     * @param {SmartformOpciones} [opciones] - Url, capa, método y segundos.
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
                metodo: "post",

                /** - `segundos para el autoguardado` */
                segundos: 6
            },
            opciones
        );

        //  -----  preparar cada formulario con su propia url, capa y espera  -----
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
             * - `url, capa, método y segundos de este formulario`
             * @type {SmartformAjuste}
             */
            const ajuste = {
                /** - `dirección de este formulario` */
                url,

                /** - `capa de mensaje de este formulario` */
                capa: $capa,

                /** - `get o post` */
                metodo,

                /** - `espera del autoguardado, en segundos` */
                segundos: Number(conf.segundos)
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

            //  -----  encender o apagar la espera con el checkbox  -----
            $elem.on("change", "[name='autosave']", () => {

                //  -----  armar la espera, o cancelarla si quedó apagado  -----
                autosave($elem);
            });

            //  -----  dejar el primer autoguardado pendiente  -----
            autosave($elem);
        });

        //  -----  permitir encadenar la colección  -----
        return this;
    };

})(jQuery);


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
