/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  53-progressbar-indeterminate.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/53-progressbar-indeterminate.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `barra indeterminada` */
    const $barra = $("#progressbar");

    //  -----  mostrar la barra sin un valor concreto  -----
    $barra.progressbar({
        value: false,
    });

});
