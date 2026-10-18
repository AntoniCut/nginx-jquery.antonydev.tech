/*
    *  ------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  ejemplo-02.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-06-primeros-pasos-con-jquery/assets/js/ejemplo-02.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------------  *
*/

/**
 * --------------------------------------------
 * -----  `recorreParrafo(indice, elem)`  -----
 * --------------------------------------------
 * - Anota el índice y el texto de un párrafo.
 * @param {number} indice - Posición del párrafo.
 * @param {HTMLElement} elem - Párrafo del recorrido.
 * @return {void}
 */
const recorreParrafo = (indice, elem) => {

    //  -----  anotar el índice en la consola  -----
    console.log(`hola${indice}`);

    //  -----  anotar el texto del párrafo  -----
    console.log($(elem).text());
};


/**
 * -------------------------------------------
 * -----  `recorreValor(indice, valor)`  -----
 * -------------------------------------------
 * - Anota un valor del array.
 * @param {number} indice - Posición del valor.
 * @param {number | string} valor - Valor recorrido.
 * @return {void}
 */
const recorreValor = (indice, valor) => {

    //  -----  anotar el valor en la consola  -----
    console.log(valor);
};


/**
 * ---------------------------------------
 * -----  `recorreLi(indice, elem)`  -----
 * ---------------------------------------
 * - Pinta el elemento y quita el que dice dos.
 * @param {number} indice - Posición en la lista.
 * @param {HTMLElement} elem - Elemento de la lista.
 * @return {void}
 */
const recorreLi = (indice, elem) => {

    /** @type {JQuery<HTMLElement>} - `elemento de la lista` */
    const $elem = $(elem);

    //  -----  anotar el elemento y su versión jquery  -----
    console.log(elem, $elem);

    //  -----  poner el texto en rojo  -----
    $elem.css("color", "red");

    //  -----  si el texto es dos, quitar el elemento  -----
    if ($elem.text() === "dos") {

        //  -----  quitar el elemento de la lista  -----
        $elem.remove();
    }
};


//  -----  recorrer párrafos y un array al cargar  -----
$(() => {

    /** @type {JQuery<HTMLParagraphElement>} - `párrafos de la página` */
    const $parrafos = $("p");

    //  -----  anotar la colección en la consola  -----
    console.log($parrafos);

    //  -----  recorrer cada párrafo  -----
    $parrafos.each(recorreParrafo);

    /** @type {(number | string)[]} - `valores de prueba` */
    const valores = [1, 2, 3, "x"];

    //  -----  recorrer el array con each  -----
    $.each(valores, recorreValor);
});


//  -----  recorrer la lista en un segundo arranque  -----
$(() => {

    //  -----  recorrer cada elemento de la lista  -----
    $("li").each(recorreLi);

    //  -----  sustituir el texto de los elementos que quedan  -----
    $("li").text("hola");
});
