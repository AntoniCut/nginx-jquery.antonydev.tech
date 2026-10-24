/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  56-selectmenu-product.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/56-selectmenu-product.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLSelectElement>} - `select de productos` */
    const $producto = $("#producto");

    /** @type {JQuery<HTMLParagraphElement>} - `producto elegido` */
    const $resultado = $("#resultado");

    //  -----  sustituir el select  -----
    $producto.selectmenu({
        change: () => {

            //  -----  publicar el producto elegido  -----
            $resultado.text(`Producto: ${String($producto.val())}.`);
        },
    });

    /** @type {any} - `instancia del menú` */
    const instancia = $producto.selectmenu("instance");

    //  -----  pintar el nombre y la descripción  -----
    instancia._renderItem = (ul, item) => {

        /** @type {HTMLLIElement} - `fila del producto` */
        const fila = document.createElement("li");

        /** @type {HTMLDivElement} - `nombre y descripción` */
        const caja = document.createElement("div");

        /** @type {HTMLElement} - `nombre del producto` */
        const titulo = document.createElement("strong");

        /** @type {HTMLSpanElement} - `descripción del producto` */
        const detalle = document.createElement("span");

        //  -----  escribir el nombre  -----
        titulo.textContent = item.label;

        //  -----  marcar la descripción  -----
        detalle.className = "producto-desc";

        //  -----  escribir la descripción declarada en la opción  -----
        detalle.textContent = item.element.attr("data-desc") || "";

        //  -----  montar la fila  -----
        caja.append(titulo, detalle);

        //  -----  guardar la fila  -----
        fila.append(caja);

        //  -----  añadir la fila al menú  -----
        ul[0].append(fila);

        //  -----  devolver la fila como objeto jQuery  -----
        return $(fila);
    };

    //  -----  volver a pintar el menú con las descripciones  -----
    $producto.selectmenu("refresh");

});
