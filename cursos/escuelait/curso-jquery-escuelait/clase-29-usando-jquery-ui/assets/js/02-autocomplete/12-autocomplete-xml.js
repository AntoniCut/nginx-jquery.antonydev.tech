/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  12-autocomplete-xml.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/02-autocomplete/12-autocomplete-xml.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** - `xml de etiquetas` */
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
        <etiquetas>
            <etiqueta>Java</etiqueta>
            <etiqueta>JavaScript</etiqueta>
            <etiqueta>PHP</etiqueta>
            <etiqueta>Python</etiqueta>
            <etiqueta>Ruby</etiqueta>
            <etiqueta>Scala</etiqueta>
        </etiquetas>`
    ;

    /** @type {XMLDocument} - `documento interpretado una vez` */
    const documento = new DOMParser().parseFromString(xml, "text/xml");

    /** - `etiquetas extraídas del xml` */
    const etiquetas = [...documento.querySelectorAll("etiqueta")].map((nodo) => nodo.textContent || "");

    /** @type {JQuery<HTMLInputElement>} - `campo de etiquetas` */
    const $etiquetas = $("#etiquetas");

    //  -----  sugerir las etiquetas leídas del xml  -----
    $etiquetas.autocomplete({
        source: etiquetas,
    });

});
