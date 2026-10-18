/*
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  32-selectable-serialize.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/32-selectable-serialize.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {HTMLElement} - Texto con el resultado de la selección */
    const resultado = /** @type {HTMLElement} */ (document.getElementById("select-result"));

    /** @type {JQuery<HTMLOListElement>} - Lista que admite selección */
    const $selectable = $("#selectable");

    /**
     * ------------------------------
     * -----  `alParar(event)`  -----
     * ------------------------------
     * - Escribe los números de los elementos seleccionados.
     * @param {JQuery.TriggeredEvent} event - Evento stop de la selección.
     * @return {void}
     */
    const alParar = (event) => {

        /** @type {HTMLElement} - Lista seleccionable */
        const lista = event.target;

        /** @type {NodeListOf<HTMLLIElement>} - Elementos marcados */
        const seleccionados = lista.querySelectorAll(".ui-selected");

        /** @type {NodeListOf<HTMLLIElement>} - Todos los elementos de la lista */
        const elementos = lista.querySelectorAll("li");

        /** @type {string[]} - Números visibles de la selección */
        const indices = [];

        //  -----  recorrer los elementos marcados  -----
        seleccionados.forEach((elemento) => {

            /** - `posición del elemento dentro de la lista` */
            const indice = Array.prototype.indexOf.call(elementos, elemento);

            //  -----  guardar el número visible, que empieza en 1  -----
            indices.push(String(indice + 1));
        });

        //  -----  si hay selección, mostrarla  -----
        if (indices.length > 0) {

            //  -----  escribir los números con almohadilla  -----
            resultado.textContent = indices.map((numero) => `#${numero}`).join(" ");
        }
        //  -----  si no hay selección, indicarlo  -----
        else {

            //  -----  volver al texto inicial  -----
            resultado.textContent = "ninguno";
        }
    };


    //  -----  anotar la selección al soltar el recuadro  -----
    $selectable.selectable({
        stop: alParar,
    });

});
