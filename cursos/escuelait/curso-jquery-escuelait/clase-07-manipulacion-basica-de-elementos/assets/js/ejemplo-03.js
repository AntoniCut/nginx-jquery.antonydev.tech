/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  ejemplo-03.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-07-manipulacion-basica-de-elementos/assets/js/ejemplo-03.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------  *
*/

/**
 * --------------------------------------
 * -----  `acumulaClics(elemento)`  -----
 * --------------------------------------
 * - Suma un clic y lo guarda en el elemento. Al llegar a diez, lo borra.
 * @param {HTMLElement} elemento - Capa pulsada.
 * @return {void}
 */
const acumulaClics = (elemento) => {

    /** @type {JQuery<HTMLElement>} - `capa pulsada` */
    const $capa = $(elemento);

    //  -----  anotar el elemento y su versión jquery  -----
    console.log(elemento, "--->", $capa);

    /** @type {number | undefined} - `clics guardados` */
    const guardados = $capa.data("numclics");

    /** - `clics tras este golpe` */
    let num = 1;

    //  -----  si ya había clics, sumar uno  -----
    if (typeof guardados !== "undefined") {

        //  -----  sumar un clic a los guardados  -----
        num = Number(guardados) + 1;
    }

    //  -----  guardar el número de clics  -----
    $capa.data("numclics", num);

    //  -----  al llegar a diez, borrar el contador  -----
    if (num === 10) {

        //  -----  borrar los clics guardados  -----
        $capa.removeData("numclics");
    }

    //  -----  anotar los clics en la consola  -----
    console.log("llevamos", num, "clics", $capa);

    /** @type {JQuery<HTMLParagraphElement>} - `texto de los clics` */
    const $cuenta = $capa.find(".cuenta");

    //  -----  mostrar los clics en la capa  -----
    $cuenta.text(`${num} clics`);
};


//  -----  arrancar cuando el documento está listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `capa con data-usuario` */
    const $capa = $("#capa");

    /** - `usuario leído del atributo` */
    const desdeAtributo = String($capa.data("usuario"));

    //  -----  guardar un dato en la capa  -----
    $capa.data("dato", "1234");

    //  -----  quitar el usuario del almacén de jquery  -----
    $capa.removeData("usuario");

    //  -----  quitar el atributo para que no vuelva a leerse  -----
    $capa.removeAttr("data-usuario");

    /** @type {string | undefined} - `usuario tras borrarlo` */
    const usuario = $capa.data("usuario");

    /** - `dato guardado en la capa` */
    const dato = String($capa.data("dato"));

    //  -----  anotar el usuario leído del atributo  -----
    console.log(desdeAtributo);

    //  -----  anotar el usuario borrado  -----
    console.log(usuario);

    //  -----  anotar el dato guardado  -----
    console.log(dato);

    /** @type {JQuery<HTMLOutputElement>} - `lectura de los datos` */
    const $lectura = $("#lectura");

    //  -----  mostrar los datos en la página  -----
    $lectura.text(`atributo: ${desdeAtributo}. tras borrar: ${String(usuario)}. dato: ${dato}`);

    /** @type {JQuery<HTMLDivElement>} - `capas que cuentan clics` */
    const $capas = $("div.capa");

    //  -----  contar un clic en la capa pulsada  -----
    $capas.on("click", (event) => {

        //  -----  acumular el clic de esta capa  -----
        acumulaClics(/** @type {HTMLElement} */ (event.currentTarget));
    });
});
