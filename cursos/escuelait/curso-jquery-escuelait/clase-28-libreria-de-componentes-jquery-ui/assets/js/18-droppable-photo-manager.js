/*
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  18-droppable-photo-manager.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/18-droppable-photo-manager.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLUListElement>} - Galería de fotos */
    const $galeria = $("#gallery");

    /** @type {JQuery<HTMLDivElement>} - Papelera que acepta las fotos */
    const $papelera = $("#trash");

    /** @type {JQuery<HTMLElement>} - Contenedor de la galería y la papelera */
    const $gestor = $(".gestor");

    /** - `true si el usuario pide menos movimiento` */
    const movimientoReducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /** - `duración de los fundidos, en milisegundos` */
    const duracion = movimientoReducido ? 0 : 300;

    /** @type {JQuery<HTMLLIElement>} - Fotos que salen de la galería */
    const $fotos = $("li", $galeria);

    /**
     * ----------------------------------------------
     * -----  `crearBoton(claseIcono, titulo)`  -----
     * ----------------------------------------------
     * - Crea el botón de icono de una foto.
     * @param {string} claseIcono - Clase del icono de jQuery UI.
     * @param {string} titulo - Texto accesible del botón.
     * @return {HTMLButtonElement} - Botón del icono.
     */
    const crearBoton = (claseIcono, titulo) => {

        /** - `botón de icono` */
        const boton = document.createElement("button");

        //  -----  evitar que el botón envíe un formulario  -----
        boton.type = "button";

        //  -----  aplicar el icono de jquery ui  -----
        boton.className = `ui-icon ${claseIcono}`;

        //  -----  describir la acción  -----
        boton.title = titulo;

        //  -----  dejar el texto para el lector de pantalla  -----
        boton.textContent = titulo;

        //  -----  devolver el botón  -----
        return boton;
    };

    /**
     * -------------------------------------
     * -----  `eliminarImagen($item)`  -----
     * -------------------------------------
     * - Mueve la foto de la galería a la papelera.
     * @param {JQuery<HTMLLIElement>} $item - Elemento de la foto.
     * @return {void}
     */
    const eliminarImagen = ($item) => {

        //  -----  ocultar la foto antes de cambiarla de lista  -----
        $item.fadeOut(duracion, () => {

            /** @type {JQuery<HTMLUListElement>} - Lista de la papelera, si ya existe */
            let $lista = $("ul", $papelera);

            //  -----  si la papelera aún no tiene lista, crearla  -----
            if ($lista.length === 0) {

                /** - `lista de fotos borradas` */
                const lista = document.createElement("ul");

                //  -----  usar las mismas clases que la galería  -----
                lista.className = "gallery ui-helper-reset";

                //  -----  añadir la lista a la papelera  -----
                $papelera.get(0).appendChild(lista);

                //  -----  guardar la referencia de la lista nueva  -----
                $lista = $(lista);
            }

            //  -----  quitar el botón de borrar  -----
            $item.find("button.ui-icon-trash").remove();

            //  -----  añadir el botón de recuperar  -----
            $item.append(crearBoton("ui-icon-refresh", "Recuperar esta imagen"));

            //  -----  pasar la foto a la papelera  -----
            $lista.append($item);

            //  -----  mostrar la foto ya en la papelera  -----
            $item.fadeIn(duracion, () => {

                //  -----  reducir el ancho de la miniatura  -----
                $item.animate({ width: "4.25rem" }, duracion);

                //  -----  reducir el alto de la imagen  -----
                $item.find("img").animate({ height: "3rem" }, duracion);
            });
        });
    };

    /**
     * --------------------------------------
     * -----  `recuperarImagen($item)`  -----
     * --------------------------------------
     * - Devuelve la foto de la papelera a la galería.
     * @param {JQuery<HTMLLIElement>} $item - Elemento de la foto.
     * @return {void}
     */
    const recuperarImagen = ($item) => {

        //  -----  ocultar la foto antes de cambiarla de lista  -----
        $item.fadeOut(duracion, () => {

            //  -----  quitar el botón de recuperar  -----
            $item.find("button.ui-icon-refresh").remove();

            //  -----  restaurar el ancho de la galería  -----
            $item.css("width", "");

            //  -----  añadir otra vez el botón de borrar  -----
            $item.append(crearBoton("ui-icon-trash", "Eliminar imagen"));

            //  -----  restaurar el alto de la imagen  -----
            $item.find("img").css("height", "");

            //  -----  devolver la foto a la galería  -----
            $galeria.append($item);

            //  -----  mostrar la foto en la galería  -----
            $item.fadeIn(duracion);
        });
    };

    /**
     * ------------------------------------------
     * -----  `ampliarImagen(src, titulo)`  -----
     * ------------------------------------------
     * - Abre la foto grande en un diálogo.
     * @param {string} src - Ruta de la foto grande.
     * @param {string} titulo - Título del diálogo.
     * @return {void}
     */
    const ampliarImagen = (src, titulo) => {

        /** @type {HTMLImageElement | null} - Foto grande ya abierta antes */
        const existente = document.querySelector(`img[src="${CSS.escape(src)}"]`);

        //  -----  si el diálogo ya existe, volver a abrirlo  -----
        if (existente) {

            //  -----  mostrar el diálogo anterior  -----
            $(existente).dialog("open");

            //  -----  no crear otra imagen  -----
            return;
        }

        /** - `foto grande del diálogo` */
        const imagen = document.createElement("img");

        //  -----  describir la foto  -----
        imagen.alt = titulo;

        //  -----  reservar el tamaño de la foto de la demo  -----
        imagen.width = 384;
        imagen.height = 288;

        //  -----  cargar la foto grande  -----
        imagen.src = src;

        //  -----  ocultarla hasta que el diálogo la muestre  -----
        imagen.style.display = "none";

        //  -----  añadir la imagen al documento  -----
        document.body.appendChild(imagen);

        //  -----  abrir el diálogo en el siguiente instante, como en la demo oficial  -----
        window.setTimeout(() => {

            //  -----  mostrar la foto en un diálogo modal  -----
            $(imagen).dialog({
                title: titulo,
                width: Math.min(420, window.innerWidth - 32),
                modal: true,
            });
        }, 1);
    };

    /**
     * ---------------------------------------------
     * -----  `alSoltarEnPapelera(event, ui)`  -----
     * ---------------------------------------------
     * - Envía a la papelera la foto soltada.
     * @param {JQuery.TriggeredEvent} event - Evento drop de la papelera.
     * @param {{ draggable: JQuery<HTMLLIElement> }} ui - Elemento arrastrado.
     * @return {void}
     */
    const alSoltarEnPapelera = (event, ui) => {

        //  -----  el evento solo distingue el destino  -----
        void event;

        //  -----  mover la foto original, no el clon  -----
        eliminarImagen(ui.draggable);
    };

    /**
     * --------------------------------------------
     * -----  `alSoltarEnGaleria(event, ui)`  -----
     * --------------------------------------------
     * - Devuelve a la galería la foto soltada.
     * @param {JQuery.TriggeredEvent} event - Evento drop de la galería.
     * @param {{ draggable: JQuery<HTMLLIElement> }} ui - Elemento arrastrado.
     * @return {void}
     */
    const alSoltarEnGaleria = (event, ui) => {

        //  -----  el evento solo distingue el destino  -----
        void event;

        //  -----  mover la foto original, no el clon  -----
        recuperarImagen(ui.draggable);
    };


    //  -----  arrastrar las fotos sin iniciar el gesto en los iconos  -----
    $fotos.draggable({
        cancel: "button.ui-icon",
        revert: "invalid",
        containment: "document",
        helper: "clone",
        cursor: "move",
    });

    //  -----  aceptar en la papelera las fotos que vienen de la galería  -----
    $papelera.droppable({
        accept: "#gallery > li",
        classes: {
            "ui-droppable-active": "ui-state-highlight",
        },
        drop: alSoltarEnPapelera,
    });

    //  -----  aceptar en la galería las fotos que vienen de la papelera  -----
    $galeria.droppable({
        accept: "#trash li",
        classes: {
            "ui-droppable-active": "custom-state-active",
        },
        drop: alSoltarEnGaleria,
    });

    //  -----  resolver el icono pulsado dentro de una foto  -----
    $gestor.on("click", "button.ui-icon", (event) => {

        //  -----  el botón no navega  -----
        event.preventDefault();

        /** @type {HTMLButtonElement} - Icono pulsado */
        const boton = /** @type {HTMLButtonElement} */ (event.currentTarget);

        /** @type {HTMLLIElement} - Foto dueña del icono */
        const item = /** @type {HTMLLIElement} */ (boton.closest("li"));

        /** @type {JQuery<HTMLLIElement>} - Foto dueña del icono */
        const $item = $(item);

        //  -----  si es el icono de borrar, enviar la foto a la papelera  -----
        if (boton.classList.contains("ui-icon-trash")) {

            //  -----  quitar la foto de la galería  -----
            eliminarImagen($item);

            //  -----  no seguir con el resto de iconos  -----
            return;
        }

        //  -----  si es el icono de ampliar, abrir el diálogo  -----
        if (boton.classList.contains("ui-icon-zoomin")) {

            //  -----  mostrar la foto grande  -----
            ampliarImagen(boton.dataset.src, boton.dataset.titulo);

            //  -----  no seguir con el resto de iconos  -----
            return;
        }

        //  -----  si es el icono de recuperar, devolver la foto  -----
        if (boton.classList.contains("ui-icon-refresh")) {

            //  -----  mover la foto a la galería  -----
            recuperarImagen($item);
        }
    });

});
