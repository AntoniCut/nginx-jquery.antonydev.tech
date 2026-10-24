/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  29-datepicker-animations.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/29-datepicker-animations.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `calendario con fundido` */
    const $fundido = $("#fundido");

    /** @type {JQuery<HTMLInputElement>} - `calendario que se desliza` */
    const $deslizar = $("#deslizar");

    /** @type {JQuery<HTMLInputElement>} - `calendario en persiana` */
    const $persiana = $("#persiana");

    /** @type {JQuery<HTMLInputElement>} - `calendario que se pliega` */
    const $pliegue = $("#pliegue");

    //  -----  abrir con un fundido  -----
    $fundido.datepicker({ showAnim: "fadeIn" });

    //  -----  abrir deslizando hacia abajo  -----
    $deslizar.datepicker({ showAnim: "slideDown" });

    //  -----  abrir con una persiana  -----
    $persiana.datepicker({ showAnim: "blind", showOptions: { direction: "vertical" } });

    //  -----  abrir plegando el calendario  -----
    $pliegue.datepicker({ showAnim: "fold" });

});
