/*
    *  --------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  jquery.smartform.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-30-practica-2/assets/plugins/jquery.smartform.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  registrar el plugin en jquery  -----
(function ($) {

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

        //  -----  vaciar la capa  -----
        capa
            .empty()
            //  -----  mostrar la lista  -----
            .append($lista);
    };


    /**
     * ----------------------------------
     * -----  `enviar(formulario)`  -----
     * ----------------------------------
     * - Pide texto o JSON, cancela la espera y avisa con los eventos del formulario.
     * @param {JQuery<HTMLFormElement>} formulario - Formulario que se envía.
     * @return {void}
     */
    const enviar = (formulario) => {

        /** @type {SmartformAjuste} - `ajustes guardados en este formulario` */
        const ajuste = formulario.data("smartform");

        //  -----  pedir la respuesta al php  -----
        $.ajax({

            /** - `dirección guardada en el formulario` */
            url: ajuste.url,

            /** - `campos serializados` */
            data: formulario.serialize(),

            /** - `get o post, según el ajuste` */
            type: ajuste.metodo,

            /** - `texto en la fase 1 y json en el resto` */
            dataType: ajuste.texto ? "text" : "json",

            /** - `avisar, bloquear el botón, cancelar la espera y disparar el evento` */
            beforeSend: () => {

                //  -----  texto de espera  -----
                ajuste.capa.text("Enviando...").css("color", "#999");

                //  -----  impedir otro envío  -----
                formulario.find(":submit").prop("disabled", true);

                /** @type {number | undefined} - `espera pendiente de este formulario` */
                const retardo = formulario.data("retardo");

                //  -----  cancelar el autoguardado pendiente  -----
                window.clearTimeout(retardo);

                //  -----  avisar de que el envío empieza  -----
                formulario.trigger("comienzoenvio");
            },

            /**
             * - Escribe el texto o lista los fallos del json.
             * @param {string | SmartformRespuesta} respuesta - Cuerpo devuelto por el php.
             * @return {void}
             */
            success: (respuesta) => {

                //  -----  fase 1: escribir el texto y dejar el color de espera  -----
                if (ajuste.texto) {

                    //  -----  mostrar el texto recibido  -----
                    ajuste.capa.text(String(respuesta));
                }
                //  -----  fases 2 a 4: leer el json  -----
                else {

                    /** @type {SmartformRespuesta} - `json del php` */
                    const json = /** @type {SmartformRespuesta} */ (respuesta);

                    //  -----  si la respuesta trae fallos, listarlos en rojo  -----
                    if (!json.valido) {

                        //  -----  construir la lista de textos  -----
                        mostrarErrores(ajuste.capa, json.errores || []);

                        //  -----  marcar la capa en rojo  -----
                        ajuste.capa.css("color", "red");
                    }
                    //  -----  si todo llegó, confirmarlo  -----
                    else {

                        //  -----  texto de éxito  -----
                        ajuste.capa.text("Todo correcto").css("color", "#666");
                    }
                }
            },

            /** - `avisar si la petición falla` */
            error: () => {

                //  -----  mensaje de fallo en rojo  -----
                ajuste.capa.text("Error...").css("color", "red");
            },

            /** - `volver a permitir el envío, contar la espera y disparar el evento` */
            complete: () => {

                //  -----  habilitar el botón  -----
                formulario.find(":submit").prop("disabled", false);

                //  -----  volver a contar la espera, si este formulario la tiene  -----
                autosave(formulario);

                //  -----  avisar de que el envío terminó  -----
                formulario.trigger("finalizoenvio");
            }
        });
    };


    /**
     * ------------------------------------
     * -----  `autosave(formulario)`  -----
     * ------------------------------------
     * - Deja un envío pendiente con los segundos de ese formulario.
     * - Sale si la llamada no pasó segundos o si el checkbox está apagado.
     * @param {JQuery<HTMLFormElement>} formulario - Formulario que se enviará solo.
     * @return {void}
     */
    const autosave = (formulario) => {

        /** @type {number | undefined} - `espera que ya estaba pendiente` */
        const previo = formulario.data("retardo");

        //  -----  una sola espera por formulario  -----
        window.clearTimeout(previo);

        /** @type {SmartformAjuste} - `ajustes guardados en el formulario` */
        const ajuste = formulario.data("smartform");

        //  -----  sin segundos no hay autoguardado  -----
        if (typeof ajuste.segundos !== "number") {

            //  -----  la fase 1 y la fase 2 se envían solo a mano  -----
            return;
        }

        /** @type {JQuery<HTMLInputElement>} - `interruptor del autoguardado` */
        const interruptor = /** @type {JQuery<HTMLInputElement>} */ (formulario.find("[name='autosave']"));

        //  -----  apagado: no dejar otra espera  -----
        if (interruptor.length && !interruptor.prop("checked")) {

            //  -----  el checkbox cortó el autoguardado  -----
            return;
        }

        /** - `identificador de la espera` */
        const retardo = window.setTimeout(() => {

            //  -----  enviar cuando vence la espera  -----
            enviar(formulario);
        }, ajuste.segundos * 1000);

        //  -----  recordar la espera para poder cancelarla  -----
        formulario.data("retardo", retardo);
    };


    /**
     * -----------------------------------
     * -----  `smartform(opciones)`  -----
     * -----------------------------------
     * - Sin argumento escribe el texto del PHP en `#mensaje`.
     * - Con opciones envía JSON. Con `segundos` además autoguarda.
     * - No es una flecha: `this` tiene que ser la colección jQuery.
     * @param {SmartformOpciones} [opciones] - Url, capa, método y segundos.
     * @return {JQuery} - Cadena para encadenar métodos.
     */
    $.fn.smartform = function (opciones) {

        /** - `true cuando la llamada no trae opciones: fase 1 en texto` */
        const texto = opciones === undefined;

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

        //  -----  preparar cada formulario con su propio ajuste  -----
        this.each((_, elemento) => {

            /** @type {JQuery<HTMLFormElement>} - `formulario que se envía` */
            const $elem = /** @type {JQuery<HTMLFormElement>} */ ($(elemento));

            /** @type {string} - `dirección de envío de este formulario` */
            let url = "";

            /** @type {JQuery<HTMLElement>} - `capa de mensaje de este formulario` */
            let $capa = $("#mensaje");

            /** @type {"get" | "post"} - `post, salvo que la opción pida get` */
            let metodo = "post";

            /** @type {number | undefined} - `espera del autoguardado, si la llamada la pasó` */
            let segundos;

            //  -----  fase 1: texto, capa fija y post  -----
            if (texto) {

                //  -----  usar el action del formulario  -----
                url = $elem.attr("action") || "";
            }
            
            //  -----  fases 2 a 4: json, capa y método de las opciones  -----
            else {

                /** @type {SmartformOpciones} - `opciones que pidió esta llamada` */
                const pedidas = /** @type {SmartformOpciones} */ (opciones);

                //  -----  url pedida, o el action si no hay  -----
                url = conf.url ? String(conf.url) : ($elem.attr("action") || "");

                //  -----  párrafo nuevo, por si no pidieron capa  -----
                $capa = $("<p>");

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

                //  -----  post, salvo que la opción pida get  -----
                metodo = conf.metodo === "get" ? "get" : "post";

                //  -----  guardar los segundos solo si la llamada los pasó  -----
                if (typeof pedidas.segundos === "number") {

                    //  -----  espera de este formulario  -----
                    segundos = pedidas.segundos;
                }
            }

            
            /**
             * -------------------------
             * -----  `ajuste {}`  -----
             * -------------------------
             * - `url, capa, método, modo y segundos de este formulario`
             * @type {SmartformAjuste}
             */
            const ajuste = {

                /** - `dirección de este formulario` */
                url,

                /** - `capa de mensaje de este formulario` */
                capa: $capa,

                /** - `get o post` */
                metodo,

                /** - `true cuando la respuesta es texto` */
                texto,

                /** - `espera del autoguardado, si la llamada la pasó` */
                segundos
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

            //  -----  programar el autoguardado solo si pasaron segundos  -----
            if (typeof segundos === "number") {

                //  -----  encender o apagar la espera con el checkbox  -----
                $elem.on("change", "[name='autosave']", () => {

                    //  -----  armar la espera, o cancelarla si quedó apagado  -----
                    autosave($elem);
                });

                //  -----  dejar el primer autoguardado pendiente  -----
                autosave($elem);
            }
        });

        //  -----  permitir encadenar la colección  -----
        return this;
    };

})(jQuery);
