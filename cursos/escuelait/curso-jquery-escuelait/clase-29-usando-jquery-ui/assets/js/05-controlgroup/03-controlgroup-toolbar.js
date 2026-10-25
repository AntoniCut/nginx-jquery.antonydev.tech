/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  03-controlgroup-toolbar.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/05-controlgroup/03-controlgroup-toolbar.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `barra de formato` */
    const $barra = $("#barra");

    /** @type {HTMLParagraphElement} - `texto que recibe el formato` */
    const muestra = /** @type {HTMLParagraphElement} */ (document.getElementById("muestra"));

    /**
     * --------------------------------
     * -----  `aplicarFormato()`  -----
     * --------------------------------
     * - Pasa negrita, cursiva, subrayado, alineación y tamaño a la muestra.
     * @return {void}
     */
    const aplicarFormato = () => {

        //  -----  aplicar o quitar la negrita  -----
        muestra.style.fontWeight = $("#negrita").prop("checked") ? "700" : "400";

        //  -----  aplicar o quitar la cursiva  -----
        muestra.style.fontStyle = $("#cursiva").prop("checked") ? "italic" : "normal";

        //  -----  aplicar o quitar el subrayado  -----
        muestra.style.textDecoration = $("#subrayado").prop("checked") ? "underline" : "none";

        /** - `alineación marcada` */
        const alineacion = String($("input[name=alineacion]:checked").attr("id"));

        //  -----  alinear el texto a la izquierda  -----
        if (alineacion === "izquierda") {

            //  -----  usar alineación inicial  -----
            muestra.style.textAlign = "left";
        }

        //  -----  alinear el texto al centro  -----
        else if (alineacion === "centro") {

            //  -----  usar alineación centrada  -----
            muestra.style.textAlign = "center";
        }

        //  -----  alinear el texto a la derecha  -----
        else {

            //  -----  usar alineación final  -----
            muestra.style.textAlign = "right";
        }

        //  -----  aplicar el tamaño elegido  -----
        muestra.style.fontSize = String($("#tamano").val());
    };

    //  -----  montar la barra  -----
    $barra.controlgroup();

    //  -----  reflejar el formato en la muestra  -----
    $barra.on("change", aplicarFormato);

});
