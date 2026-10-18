/*
    *  ------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  url.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/url.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  si la página se abrió como index.html, dejar la carpeta en la dirección  -----
if (location.pathname.endsWith("/index.html")) {

    /** - `carpeta de la página, sin el nombre del archivo` */
    const carpeta = location.pathname.slice(0, -"index.html".length);

    //  -----  sustituir la dirección sin recargar  -----
    history.replaceState(null, "", carpeta + location.search + location.hash);
}
