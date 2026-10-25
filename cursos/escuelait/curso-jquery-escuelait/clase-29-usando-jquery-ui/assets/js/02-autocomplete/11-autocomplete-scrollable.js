/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  11-autocomplete-scrollable.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/02-autocomplete/11-autocomplete-scrollable.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** - `etiquetas de programación` */
    const etiquetas = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme",
    ];

    /** @type {JQuery<HTMLInputElement>} - `campo de búsqueda` */
    const $etiquetas = $("#etiquetas");

    //  -----  sugerir etiquetas en un menú con desplazamiento  -----
    $etiquetas.autocomplete({
        source: etiquetas,
    });

});
