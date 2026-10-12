/*
    *  ------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  script.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-18-formularios-ajax/ejemplo-04/assets/js/script.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------  *
*/



/**
 * @typedef {Object} RespuestaValidacion
 * @property {boolean} valido - Indica si el servidor aceptó el envío.
 * @property {string} mensaje - Texto devuelto por el servidor.
 */

//  -----  arrancar cuando el documento está listo  -----
$(() => {

    /**
     * -----------------------------------------------
     * -----  `mostrarErrores(aviso, mensajes)`  -----
     * -----------------------------------------------
     * - Escribe cada mensaje en el aviso del formulario.
     * @param {JQuery<HTMLElement>} aviso - Contenedor del error.
     * @param {string[]} mensajes - Textos a mostrar.
     * @return {void}
     */
    const mostrarErrores = (aviso, mensajes) => {

        //  -----  vaciar el aviso anterior  -----
        aviso.empty();

        //  -----  recorrer cada mensaje  -----
        mensajes.forEach((mensaje, indice) => {

            //  -----  separar los mensajes con un salto  -----
            if (indice > 0) {

                //  -----  añadir un salto de línea  -----
                aviso.append(document.createElement("br"));
            }

            //  -----  añadir el texto del mensaje  -----
            aviso.append(document.createTextNode(mensaje));
        });
    };


    /**
     * ---------------------------------------------
     * -----  `validarCliente(nombre, email)`  -----
     * ---------------------------------------------
     * - Comprueba la longitud del nombre y del email.
     * @param {string} nombre - Texto del campo nombre.
     * @param {string} email - Texto del campo email.
     * @return {string[]} - Mensajes de error. Vacío si todo es válido.
     */
    const validarCliente = (nombre, email) => {

        /** @type {string[]} - `mensajes de error del cliente` */
        const errores = [];

        //  -----  si el nombre es demasiado corto, anotarlo  -----
        if (nombre.length < 3) {

            //  -----  registrar el nombre no válido  -----
            errores.push("No es un nombre válido");
        }

        //  -----  si el email es demasiado corto, anotarlo  -----
        if (email.length < 5) {

            //  -----  registrar el email no válido  -----
            errores.push("No es un email válido");
        }

        //  -----  devolver los mensajes recogidos  -----
        return errores;
    };


    /**
     * -----------------------------------
     * -----  `marcarNombre(campo)`  -----
     * -----------------------------------
     * - Marca el nombre si no llega a tres caracteres.
     * @param {JQuery<HTMLInputElement>} campo - Input del nombre.
     * @return {void}
     */
    const marcarNombre = (campo) => {

        /** @type {string} - `texto actual del nombre` */
        const nombre = String(campo.val() ?? "");

        //  -----  si el nombre es demasiado corto, marcarlo  -----
        if (nombre.length < 3) {

            //  -----  marcar el campo con error  -----
            campo.addClass("inputerror");
        }
        //  -----  si el nombre cumple la longitud, quitar la marca  -----
        else {

            //  -----  quitar la marca de error  -----
            campo.removeClass("inputerror");
        }
    };

    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {JQuery<HTMLFormElement>} - `formulario de envío` */
    const $formulario = $("#f1");

    /** @type {JQuery<HTMLInputElement>} - `campo nombre` */
    const $nombre = $("#nombre");

    /** @type {JQuery<HTMLInputElement>} - `campo email` */
    const $email = $("#email");

    /** @type {JQuery<HTMLButtonElement>} - `botón de envío` */
    const $envio = $formulario.find("button[type='submit']");

    /** @type {JQuery<HTMLElement>} - `aviso de errores` */
    const $muestraerror = $("#muestraerror");

    /** @type {JQuery<HTMLElement>} - `contenedor de la respuesta` */
    const $resultado = $("#resultado");


    //  -----  revisar el nombre al cambiar  -----
    $nombre.on("change", () => {

        //  -----  marcar o limpiar el nombre  -----
        marcarNombre($nombre);
    });


    //  -----  validar en el cliente y consultar al servidor  -----
    $formulario.on("submit", (event) => {

        //  -----  evitar el envío nativo del navegador  -----
        event.preventDefault();

        /** @type {string} - `texto del nombre` */
        const nombre = String($nombre.val() ?? "");

        /** @type {string} - `texto del email` */
        const email = String($email.val() ?? "");

        /** @type {string[]} - `errores de la validación en cliente` */
        const errores = validarCliente(nombre, email);

        //  -----  si hay errores, mostrarlos y no enviar  -----
        if (errores.length > 0) {

            //  -----  pintar los mensajes en el aviso  -----
            mostrarErrores($muestraerror, errores);
        }
        //  -----  si el cliente no detecta errores, pedir la validación al servidor  -----
        else {

            //  -----  limpiar el aviso anterior  -----
            $muestraerror.empty();

            //  -----  bloquear el envío mientras dura la petición  -----
            $envio.prop("disabled", true);

            /** @type {string} - `url del action del formulario` */
            const url = String($formulario.attr("action"));

            /** @type {string} - `campos serializados` */
            const datos = $formulario.serialize();

            /** @type {JQuery.jqXHR<RespuestaValidacion>} - `petición del formulario` */
            const peticion = $.post(url, datos, (respuesta) => {

                /** @type {RespuestaValidacion} - `json devuelto por el servidor` */
                const datosRespuesta = /** @type {RespuestaValidacion} */ (respuesta);

                //  -----  si el servidor acepta el envío, mostrar el mensaje  -----
                if (datosRespuesta.valido) {

                    //  -----  escribir el mensaje de éxito  -----
                    $resultado.text(datosRespuesta.mensaje);
                }
                //  -----  si el servidor rechaza el envío, mostrar el error  -----
                else {

                    //  -----  escribir el mensaje de error  -----
                    $muestraerror.text(datosRespuesta.mensaje);
                }
            }, "json");

            //  -----  volver a habilitar el envío al terminar la petición  -----
            peticion.always(() => {

                //  -----  habilitar el botón de envío  -----
                $envio.prop("disabled", false);
            });
        }
    });

});
