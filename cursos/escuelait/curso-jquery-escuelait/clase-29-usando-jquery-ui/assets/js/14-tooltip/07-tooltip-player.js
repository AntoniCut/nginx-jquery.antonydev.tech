/*
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  07-tooltip-player.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/14-tooltip/07-tooltip-player.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<Document>} - `documento, donde vive la ayuda` */
    const $documento = $(document);

    /** @type {JQuery<HTMLButtonElement>} - `botones de la barra` */
    const $botones = $("button");

    /** @type {JQuery<HTMLElement>} - `grupos de botones` */
    const $grupos = $(".grupo");

    /** @type {JQuery<HTMLButtonElement>} - `botón que abre las listas` */
    const $menu = $("button.menu");

    /** @type {JQuery<HTMLUListElement>} - `listas del reproductor` */
    const $listas = $("#listas");

    /**
     * -------------------------------
     * -----  `avisar($origen)`  -----
     * -------------------------------
     * - Muestra arriba el nombre elegido.
     * @param {JQuery} $origen - Botón o entrada del menú.
     * @return {void}
     */
    const avisar = ($origen) => {

        /** - `nombre visible del control` */
        const nombre = $origen.text().trim();

        /** - `texto del aviso` */
        const mensaje = `Seleccionado: ${nombre}`;

        /** @type {HTMLDivElement} - `aviso de la elección` */
        const aviso = document.createElement("div");

        //  -----  escribir el nombre elegido  -----
        aviso.textContent = mensaje;

        //  -----  aplicar el estilo del aviso  -----
        aviso.className = "aviso ui-state-default ui-corner-bottom";

        //  -----  colocar el aviso en la página  -----
        document.body.append(aviso);

        /** @type {JQuery<HTMLDivElement>} - `aviso de la elección` */
        const $aviso = $(aviso);

        //  -----  situar el aviso arriba, en el centro  -----
        $aviso.position({
            my: "center top",
            at: "center top",
            of: window,
        });

        /** - `el usuario pide menos movimiento` */
        const reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        //  -----  si el usuario pide menos movimiento, mostrar el aviso quieto  -----
        if (reducir) {

            //  -----  retirar el aviso al cabo de un segundo  -----
            $aviso.delay(1000).hide(0, () => {

                //  -----  quitar el aviso de la página  -----
                aviso.remove();
            });
        }

        //  -----  si el usuario admite movimiento, abrir y cerrar el aviso  -----
        else {

            //  -----  abrir el aviso y retirarlo al cabo de un segundo  -----
            $aviso.show({
                effect: "blind",
            }).delay(1000).hide({
                effect: "blind",
                duration: "slow",
                complete: () => {

                    //  -----  quitar el aviso de la página  -----
                    aviso.remove();
                },
            });
        }
    };

    /**
     * -------------------------------------
     * -----  `montarBoton(elemento)`  -----
     * -------------------------------------
     * - Crea el botón y avisa al pulsarlo, salvo el que abre las listas.
     * @param {HTMLButtonElement} elemento - Botón de la barra.
     * @return {void}
     */
    const montarBoton = (elemento) => {

        /** @type {JQuery<HTMLButtonElement>} - `botón de la barra` */
        const $boton = $(elemento);

        /** - `clase del icono` */
        const icono = $boton.attr("data-icon");

        //  -----  si el botón tiene icono, mostrarlo  -----
        if (icono) {

            //  -----  crear el botón con icono  -----
            $boton.button({
                icon: icono,
                showLabel: Boolean($boton.attr("title")),
            });
        }

        //  -----  si el botón no tiene icono, mostrar solo el texto  -----
        else {

            //  -----  crear el botón de texto  -----
            $boton.button({
                showLabel: Boolean($boton.attr("title")),
            });
        }

        //  -----  si el botón no abre las listas, avisar al pulsarlo  -----
        if (!$boton.hasClass("menu")) {

            //  -----  publicar la elección  -----
            $boton.on("click", () => {

                //  -----  mostrar el nombre del botón  -----
                avisar($boton);
            });
        }
    };

    /**
     * -----------------------------------
     * -----  `alAbrirMenu(evento)`  -----
     * -----------------------------------
     * - Cierra la ayuda y abre las listas bajo el botón.
     * @param {JQuery.TriggeredEvent} evento - Clic en el botón de listas.
     * @return {void}
     */
    const alAbrirMenu = (evento) => {

        //  -----  no seguir el enlace ni el clic hacia el documento  -----
        evento.preventDefault();

        //  -----  evitar que este clic cierre el menú al momento  -----
        evento.stopPropagation();

        /** @type {HTMLElement} - `botón que abre las listas` */
        const boton = /** @type {HTMLElement} */ (evento.currentTarget);

        //  -----  cerrar la ayuda para que no tape las listas  -----
        $documento.tooltip("close", {
            currentTarget: boton,
        });

        //  -----  mostrar las listas  -----
        $listas.show();

        //  -----  colocar las listas bajo el botón  -----
        $listas.position({
            my: "left top",
            at: "left bottom",
            of: boton,
        });

        //  -----  olvidar el cierre anterior  -----
        $documento.off("click.listas");

        //  -----  cerrar las listas en el siguiente clic  -----
        $documento.one("click.listas", () => {

            //  -----  ocultar las listas  -----
            $listas.hide();
        });
    };

    /**
     * ------------------------------------------
     * -----  `alElegirLista(_evento, ui)`  -----
     * ------------------------------------------
     * - Avisa con el nombre de la lista elegida.
     * @param {JQueryEventObject} _evento - Elección en el menú.
     * @param {JQueryUI.MenuUIParams} ui - Entrada elegida.
     * @return {void}
     */
    const alElegirLista = (_evento, ui) => {

        //  -----  si hay una entrada, publicar su nombre  -----
        if (ui.item) {

            //  -----  mostrar el nombre de la lista  -----
            avisar(ui.item);
        }
    };

    //  -----  crear cada botón de la barra  -----
    $botones.each((_indice, elemento) => {

        //  -----  montar este botón  -----
        montarBoton(elemento);
    });

    //  -----  agrupar los botones y dejar fuera las listas  -----
    $grupos.controlgroup({
        items: {
            button: "button",
        },
    });

    //  -----  abrir las listas desde su botón  -----
    $menu.on("click", alAbrirMenu);

    //  -----  ocultar las listas hasta que se pidan  -----
    $listas.hide();

    //  -----  activar el menú de listas  -----
    $listas.menu({
        select: alElegirLista,
    });

    //  -----  mostrar la ayuda bajo cada botón  -----
    $documento.tooltip({
        position: {
            my: "center top",
            at: "center bottom+5",
        },
        show: {
            duration: "fast",
        },
        hide: {
            effect: "hide",
        },
    });

});
