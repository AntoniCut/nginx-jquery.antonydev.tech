/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  01-autocomplete-default.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/02-autocomplete/01-autocomplete-default.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
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
        "JQuery",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme",
    ];

    /** @type {JQuery<HTMLInputElement>} - `campo de etiquetas` */
    const $etiquetas = $("#etiquetas");

    //  -----  sugerir las etiquetas que coinciden con lo escrito  -----
    $etiquetas.autocomplete({
        source: etiquetas,
    });

});
