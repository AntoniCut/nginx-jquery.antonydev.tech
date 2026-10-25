/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  03-tabs-ajax.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/13-tabs/03-tabs-ajax.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `pestañas con paneles remotos` */
    const $pestanas = $("#tabs");

    /**
     * -------------------------------------------
     * -----  `escribirTexto(panel, texto)`  -----
     * -------------------------------------------
     * - Sustituye el panel por un párrafo.
     * @param {HTMLElement} panel - Panel de la pestaña.
     * @param {string} texto - Texto del párrafo.
     * @return {void}
     */
    const escribirTexto = (panel, texto) => {

        /** @type {HTMLParagraphElement} - `aviso del panel` */
        const parrafo = document.createElement("p");

        //  -----  escribir el aviso  -----
        parrafo.textContent = texto;

        //  -----  dejar solo ese párrafo  -----
        panel.replaceChildren(parrafo);
    };

    /**
     * --------------------------------------------
     * -----  `pintarRespuesta(panel, html)`  -----
     * --------------------------------------------
     * - Coloca en el panel el html recibido por Ajax.
     * @param {HTMLElement} panel - Panel de la pestaña.
     * @param {string} html - Fragmento devuelto por el servidor.
     * @return {void}
     */
    const pintarRespuesta = (panel, html) => {

        /** @type {Document} - `documento del fragmento` */
        const documento = new DOMParser().parseFromString(html, "text/html");

        //  -----  sustituir el panel por el fragmento recibido  -----
        panel.replaceChildren(...documento.body.childNodes);
    };

    /**
     * -------------------------------------------
     * -----  `alAntesDeCargar(evento, ui)`  -----
     * -------------------------------------------
     * - Pide el panel remoto con Ajax.
     * @param {Event} evento - Inicio de la carga del widget.
     * @param {JQueryUI.TabsBeforeLoadUIParams} ui - Pestaña, panel y petición.
     * @return {void}
     */
    const alAntesDeCargar = (evento, ui) => {

        //  -----  cancelar la petición del widget para hacerla aquí  -----
        evento.preventDefault();

        /** @type {HTMLElement} - `panel que se está cargando` */
        const panel = /** @type {HTMLElement} */ (ui.panel.get(0));

        /** - `dirección del panel remoto` */
        const url = String(ui.ajaxSettings.url || "");

        //  -----  avisar de que la petición está en curso  -----
        escribirTexto(panel, "Cargando…");

        //  -----  pedir el panel por ajax  -----
        $.ajax({
            url,
            dataType: "html",
        })
            .done((
                /** @type {string} - `html del panel remoto` */
                respuesta
            ) => {

                //  -----  pintar el html recibido  -----
                pintarRespuesta(panel, respuesta);
            })
            .fail(() => {

                //  -----  avisar de que la carga ha fallado  -----
                escribirTexto(panel, "No se ha podido cargar esta pestaña.");
            });
    };

    //  -----  cargar los paneles remotos con ajax al abrirlos  -----
    $pestanas.tabs({
        beforeLoad: alAntesDeCargar,
    });

});
