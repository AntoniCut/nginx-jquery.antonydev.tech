/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  09-autocomplete-categories.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/09-autocomplete-categories.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /**
     * ------------------------
     * -----  `datos []`  -----
     * ------------------------
     * - `lenguajes y librerías agrupados`
     */
    const datos = [
        { label: "Java", category: "Lenguajes" },
        { label: "JavaScript", category: "Lenguajes" },
        { label: "Python", category: "Lenguajes" },
        { label: "jQuery", category: "Librerías" },
        { label: "jQuery UI", category: "Librerías" },
        { label: "React", category: "Librerías" },
    ];

    /** @type {JQuery<HTMLInputElement>} - `campo de búsqueda` */
    const $buscar = $("#buscar");

    //  -----  sugerir elementos con su categoría  -----
    $buscar.autocomplete({
        source: datos,
    });

    /** @type {any} - `instancia del autocompletado` */
    const instancia = $buscar.autocomplete("instance");

    //  -----  pintar una cabecera cuando cambia la categoría  -----
    instancia._renderMenu = (ul, items) => {

        /** - `categoría que se está pintando` */
        let categoria = "";

        //  -----  recorrer las coincidencias en orden  -----
        items.forEach((item) => {

            //  -----  si empieza otra categoría, pintar su cabecera  -----
            if (item.category !== categoria) {

                /** @type {HTMLLIElement} - `cabecera de la categoría` */
                const cabecera = document.createElement("li");

                //  -----  marcar la cabecera para que no se pueda elegir  -----
                cabecera.className = "ui-autocomplete-category";

                //  -----  escribir el nombre de la categoría  -----
                cabecera.textContent = item.category;

                //  -----  colocar la cabecera en el menú  -----
                ul[0].append(cabecera);

                //  -----  recordar la categoría actual  -----
                categoria = item.category;
            }

            //  -----  pintar el elemento dentro de su categoría  -----
            instancia._renderItemData(ul, item);
        });
    };

    //  -----  saltar las cabeceras al moverse con el teclado  -----
    instancia.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");

});
