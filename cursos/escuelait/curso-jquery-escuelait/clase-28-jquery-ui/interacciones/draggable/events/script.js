/*
    *  ---------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  script.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-jquery-ui/interacciones/draggable/events/script.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------  *
*/


//  -----  iniciar la demo cuando el dom esté listo  -----
$(function () {

    /** @type {JQuery<HTMLLIElement>} - Fila del evento start */
    const $contadorStart = $("#event-start");

    /** @type {JQuery<HTMLLIElement>} - Fila del evento drag */
    const $contadorDrag = $("#event-drag");

    /** @type {JQuery<HTMLLIElement>} - Fila del evento stop */
    const $contadorStop = $("#event-stop");

    /** @type {JQuery<HTMLDivElement>} - Caja que dispara los eventos de arrastre */
    const $draggable = $("#draggable");

    /** @type {number[]} - Veces que se han disparado start, drag y stop */
    const totales = [0, 0, 0];


    /**
     * ---------------------------------------------------------
     * -----  `actualizarContador($contador, nuevoTotal)`  -----
     * ---------------------------------------------------------
     * - Marca el evento activo y escribe cuántas veces se ha disparado.
     * @param {JQuery} $contador - Fila del evento en la lista.
     * @param {number} nuevoTotal - Veces que se ha disparado el evento.
     * @return {void}
     */
    const actualizarContador = ($contador, nuevoTotal) => {

        //  -----  si el evento no está marcado, marcarlo y quitar la marca de los demás  -----
        if (!$contador.hasClass("ui-state-hover")) {

            //  -----  marcar este evento  -----
            $contador.addClass("ui-state-hover");

            //  -----  quitar la marca de los eventos hermanos  -----
            $contador.siblings().removeClass("ui-state-hover");
        }

        //  -----  escribir el total en el contador  -----
        $("span.count", $contador).text(nuevoTotal);
    };


    /**
     * ---------------------------
     * -----  `alEmpezar()`  -----
     * ---------------------------
     * - Incrementa el contador del evento start.
     * @return {void}
     */
    const alEmpezar = () => {

        //  -----  sumar una invocación de start  -----
        totales[0] += 1;

        //  -----  actualizar el contador de start  -----
        actualizarContador($contadorStart, totales[0]);
    };


    /**
     * -----------------------------
     * -----  `alArrastrar()`  -----
     * -----------------------------
     * - Incrementa el contador del evento drag.
     * @return {void}
     */
    const alArrastrar = () => {

        //  -----  sumar una invocación de drag  -----
        totales[1] += 1;

        //  -----  actualizar el contador de drag  -----
        actualizarContador($contadorDrag, totales[1]);
    };


    /**
     * --------------------------
     * -----  `alSoltar()`  -----
     * --------------------------
     * - Incrementa el contador del evento stop.
     * @return {void}
     */
    const alSoltar = () => {

        //  -----  sumar una invocación de stop  -----
        totales[2] += 1;

        //  -----  actualizar el contador de stop  -----
        actualizarContador($contadorStop, totales[2]);
    };


    //  -----  contar start, drag y stop al arrastrar la caja  -----
    $draggable.draggable({
        start: alEmpezar,
        drag: alArrastrar,
        stop: alSoltar,
    });

});
