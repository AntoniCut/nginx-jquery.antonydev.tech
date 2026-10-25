/*
    *  --------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  05-tooltip-forms.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/14-tooltip/05-tooltip-forms.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLFormElement>} - `formulario` */
    const $perfil = $("#perfil");

    /** @type {JQuery<HTMLParagraphElement>} - `resultado del envío` */
    const $resultado = $("#resultado");

    /**
     * --------------------------------
     * -----  `alEnviar(evento)`  -----
     * --------------------------------
     * - Evita el envío y deja un aviso en la página.
     * @param {JQuery.TriggeredEvent} evento - Envío del formulario.
     * @return {void}
     */
    const alEnviar = (evento) => {

        //  -----  no enviar el formulario  -----
        evento.preventDefault();

        //  -----  confirmar que los datos se quedan en la página  -----
        $resultado.text("Los datos se quedan en esta página.");
    };

    //  -----  mostrar la ayuda de cada campo  -----
    $perfil.find("[title]").tooltip();

    //  -----  no salir de la página al guardar  -----
    $perfil.on("submit", alEnviar);

});
