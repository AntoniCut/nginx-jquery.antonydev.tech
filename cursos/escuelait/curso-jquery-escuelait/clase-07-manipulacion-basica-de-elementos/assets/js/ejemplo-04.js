/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  ejemplo-04.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-07-manipulacion-basica-de-elementos/assets/js/ejemplo-04.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------  *
*/


//  -----  arrancar cuando el documento está listo  -----
$(() => {

    /** @type {JQuery<HTMLParagraphElement>} - `párrafos con clase` */
    const $probando = $(".probando");

    /** @type {JQuery<HTMLParagraphElement>} - `todos los párrafos` */
    const $parrafos = $("p");

    //  -----  anotar cuántos párrafos tienen la clase  -----
    console.log($probando.length);

    //  -----  anotar cuántos párrafos hay  -----
    console.log($parrafos.length);

    /** - `número de párrafos con clase` */
    const num = $probando.length;

    /** - `listado separado por comas` */
    let listadoComas = "";

    //  -----  recorrer los párrafos con clase  -----
    $probando.each((indice, elem) => {

        //  -----  añadir el texto del párrafo  -----
        listadoComas += $(elem).text();

        //  -----  si quedan párrafos, separar con coma  -----
        if (indice < num - 1) {

            //  -----  añadir la coma  -----
            listadoComas += ", ";
        }
    });

    //  -----  anotar el listado en la consola  -----
    console.log(listadoComas);

    /** @type {JQuery<HTMLOutputElement>} - `listado en la página` */
    const $listado = $("#listado");

    //  -----  mostrar el listado en la página  -----
    $listado.text(listadoComas);
});
