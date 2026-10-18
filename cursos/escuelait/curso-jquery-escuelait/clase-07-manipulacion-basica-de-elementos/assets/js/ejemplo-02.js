/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  ejemplo-02.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-07-manipulacion-basica-de-elementos/assets/js/ejemplo-02.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------  *
*/

/**
 * --------------------------------
 * -----  `mostrarOcultar()`  -----
 * --------------------------------
 * - Muestra u oculta el bloque avanzado según la casilla.
 * @return {void}
 */
const mostrarOcultar = () => {

    /** @type {JQuery<HTMLInputElement>} - `casilla de avanzado` */
    const $casilla = $("#checkav");

    /** @type {JQuery<HTMLDivElement>} - `bloque avanzado` */
    const $bloque = $("#bloqueavanzado");

    //  -----  si la casilla está marcada, mostrar el bloque  -----
    if ($casilla.prop("checked")) {

        //  -----  mostrar el bloque avanzado  -----
        $bloque.css("display", "block");
    }
    //  -----  si la casilla no está marcada, ocultar el bloque  -----
    else {

        //  -----  ocultar el bloque avanzado  -----
        $bloque.css("display", "none");
    }
};


//  -----  arrancar cuando el documento está listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `campo del nombre` */
    const $nombre = $("#fnombre");

    //  -----  marcar el nombre corto al salir del campo  -----
    $nombre.on("change", (event) => {

        /** @type {JQuery<HTMLInputElement>} - `campo que cambió` */
        const $campo = $(/** @type {HTMLInputElement} */ (event.currentTarget));

        /** - `texto del nombre` */
        const texto = String($campo.val());

        //  -----  si el nombre tiene menos de cuatro letras, marcarlo  -----
        if (texto.length < 4) {

            //  -----  marcar el campo con error  -----
            $campo.addClass("error");
        }
        //  -----  si el nombre llega a cuatro letras, quitar la marca  -----
        else {

            //  -----  quitar la marca de error  -----
            $campo.removeClass("error");
        }
    });

    /** @type {JQuery<HTMLInputElement>} - `casilla de avanzado` */
    const $casilla = $("#checkav");

    /** @type {JQuery<HTMLFormElement>} - `segundo formulario` */
    const $segundo = /** @type {JQuery<HTMLFormElement>} */ (
        $("form").eq(1)
    );

    /** - `acción del segundo formulario` */
    const accion = String($segundo.attr("action"));

    /** - `si la casilla está marcada` */
    const marcado = Boolean($casilla.prop("checked"));

    /** - `atributo checked de la casilla` */
    const atributo = String($casilla.attr("checked"));

    //  -----  anotar la acción del segundo formulario  -----
    console.log(accion);

    //  -----  anotar si la casilla está marcada  -----
    console.log(marcado);

    //  -----  anotar el atributo checked de la casilla  -----
    console.log("esto es attr -->", atributo);

    /** @type {JQuery<HTMLOutputElement>} - `lectura de prop y attr` */
    const $lectura = $("#lectura");

    //  -----  mostrar prop y attr en la página  -----
    $lectura.text(`action: ${accion}. prop: ${marcado}. attr: ${atributo}`);

    //  -----  mostrar u ocultar el bloque al pulsar la casilla  -----
    $casilla.on("click", mostrarOcultar);

    //  -----  dejar el bloque según el estado inicial  -----
    mostrarOcultar();

    /** @type {JQuery<HTMLButtonElement>} - `botón para cerrar el bloque` */
    const $cerrar = $("#bloqueavanzado button");

    //  -----  desmarcar la casilla al cerrar el bloque  -----
    $cerrar.on("click", (event) => {

        //  -----  evitar el envío del formulario  -----
        event.preventDefault();

        //  -----  desmarcar la casilla  -----
        $casilla.prop("checked", false);

        //  -----  ocultar el bloque avanzado  -----
        mostrarOcultar();
    });
});
