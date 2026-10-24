/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  78-tabs-manipulation.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/78-tabs-manipulation.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `pestañas` */
    const $pestanas = $("#tabs");

    /** @type {HTMLDivElement} - `contenedor de las pestañas` */
    const contenedor = /** @type {HTMLDivElement} */ (document.getElementById("tabs"));

    /** @type {HTMLUListElement} - `lista de cabeceras` */
    const lista = /** @type {HTMLUListElement} */ (contenedor.querySelector("ul"));

    /** - `siguiente número de pestaña` */
    let siguiente = 4;

    /**
     * --------------------------------
     * -----  `alAnadir(evento)`  -----
     * --------------------------------
     * - Crea una cabecera y un panel nuevos.
     * @param {JQuery.TriggeredEvent} evento - Clic en añadir.
     * @return {void}
     */
    const alAnadir = (evento) => {

        //  -----  no salir de la página  -----
        evento.preventDefault();

        /** - `id del panel nuevo` */
        const id = `panel-${siguiente}`;

        /** @type {HTMLLIElement} - `cabecera nueva` */
        const item = document.createElement("li");

        /** @type {HTMLAnchorElement} - `enlace de la cabecera` */
        const enlace = document.createElement("a");

        /** @type {HTMLDivElement} - `panel nuevo` */
        const panel = document.createElement("div");

        /** @type {HTMLParagraphElement} - `texto del panel` */
        const parrafo = document.createElement("p");

        //  -----  apuntar la cabecera al panel  -----
        enlace.href = `#${id}`;

        //  -----  escribir el título  -----
        enlace.textContent = `Pestaña ${siguiente}`;

        //  -----  guardar la cabecera  -----
        item.append(enlace);

        //  -----  identificar el panel  -----
        panel.id = id;

        //  -----  escribir el contenido  -----
        parrafo.textContent = `Contenido de la pestaña ${siguiente}.`;

        //  -----  guardar el párrafo  -----
        panel.append(parrafo);

        //  -----  colocar la cabecera  -----
        lista.append(item);

        //  -----  colocar el panel  -----
        contenedor.append(panel);

        //  -----  preparar el número de la siguiente  -----
        siguiente += 1;

        //  -----  actualizar las pestañas  -----
        $pestanas.tabs("refresh");
    };

    /**
     * --------------------------------
     * -----  `alQuitar(evento)`  -----
     * --------------------------------
     * - Quita la pestaña activa si queda alguna más.
     * @param {JQuery.TriggeredEvent} evento - Clic en quitar.
     * @return {void}
     */
    const alQuitar = (evento) => {

        //  -----  no salir de la página  -----
        evento.preventDefault();

        /** @type {HTMLLIElement | null} - `cabecera activa` */
        const activa = lista.querySelector("li.ui-tabs-active");

        //  -----  si no hay cabecera activa, no quitar nada  -----
        if (!activa) {

            //  -----  salir  -----
            return;
        }

        //  -----  si solo queda una pestaña, conservarla  -----
        if (lista.children.length <= 1) {

            //  -----  salir  -----
            return;
        }

        /** @type {HTMLAnchorElement | null} - `enlace de la cabecera activa` */
        const enlace = activa.querySelector("a");

        /** - `id del panel activo` */
        const href = enlace ? enlace.getAttribute("href") : "";

        //  -----  quitar la cabecera  -----
        activa.remove();

        //  -----  si el panel está en la página, quitarlo  -----
        if (href && href.startsWith("#")) {

            /** @type {HTMLElement | null} - `panel activo` */
            const panel = contenedor.querySelector(href);

            //  -----  si el panel existe, quitarlo  -----
            if (panel) {

                //  -----  eliminar el panel  -----
                panel.remove();
            }
        }

        //  -----  actualizar las pestañas  -----
        $pestanas.tabs("refresh");
    };

    //  -----  activar las pestañas  -----
    $pestanas.tabs();

    //  -----  aplicar el tema a los botones  -----
    $(".acciones button").button();

    //  -----  añadir una pestaña  -----
    $("#anadir").on("click", alAnadir);

    //  -----  quitar la pestaña activa  -----
    $("#quitar").on("click", alQuitar);

});
