# jQuery

Material local de cursos de jQuery. La raíz de este repositorio es el document root: `index.html` enlaza los tres cursos.

## Cómo verlo

Abrir `index.html` en el virtual host que apunta a esta carpeta. Las rutas que empiezan por `/assets/` salen de esa raíz.

## Estructura

```text
index.html
jquery-icon-folder.svg
assets/
  favicon/jquery-favicon.svg
  libs/jquery/jquery-4.0.0.min.js
  libs/jquery/jquery-4.0.0-beta.min.js
  libs/jquery-ui/jquery-ui-1.14.2.min.js
  libs/jquery-ui/themes/base/jquery-ui.min.css
  libs/handlebars/handlebars.min.js
cursos/
  desarrollowebcom/
  escuelait/curso-jquery-escuelait/
  udemy/jquery-jquery-ui-facil-practico/
types/
jsconfig.json
package.json
```

`node_modules/` y `workflow/` no se versionan.

## Cursos

### DesarrolloWeb.com

`cursos/desarrollowebcom/`

Manual de jQuery, videotutoriales, jQuery.io, recursos descargados y PDFs. Esa carpeta es un repositorio git propio.

### EscuelaIT

`cursos/escuelait/curso-jquery-escuelait/`

Clases 1 a 7 y 18 a 28. El índice del curso está en `index.html` de esa carpeta. La transición entre páginas vive en `assets/css/view-transition.css`. El listado de las clases 1 a 7 usa `assets/css/styles.css`.

| Clase | Carpeta | Contenido |
| --- | --- | --- |
| 1 | `clase-01-introduccion-a-jquery-manual-de-javascript-parte-1` | Manual de programación JavaScript, parte 1, en PDF. |
| 2 | `clase-02-introduccion-a-jquery-manual-de-javascript-parte-2` | Manual de programación JavaScript, parte 2, en PDF. |
| 3 | `clase-03-introduccion-a-jquery-manual-de-jquery` | Manual de jQuery en PDF. |
| 4 | `clase-04-introduccion-a-jquery-manual-de-jquery-mobile` | Manual de jQuery Mobile en PDF. |
| 5 | `clase-05-introduccion-a-jquery-resumen-de-selectores-jquery` | Resumen de selectores jQuery en PDF. |
| 6 | `clase-06-primeros-pasos-con-jquery` | Introducción a jQuery en PDF. Dos ejemplos: arranque y recorridos. |
| 7 | `clase-07-manipulacion-basica-de-elementos` | Manipulación básica en PDF. Cuatro ejemplos: html y text, formulario, data y each. |
| 18 | `clase-18-formularios-ajax` | Formularios con AJAX. Cinco ejemplos y PHP compartido. |
| 19 | `clase-19-eventos-avanzados` | Eventos diferidos, parámetros, disparo y eventos personalizados. |
| 20 | `clase-20-ajax-low-level` | POST, carga de scripts, buscador y selects combinados. |
| 21 | `clase-21-practica-1` | Práctica de login, con el enunciado en PDF. |
| 22 | `clase-22-deferred-y-promises` | Deferred, promesas y aplicación de esos conceptos. |
| 23 | `clase-23-dudas-y-conceptos-3` | Validación de formularios y animaciones en bucle. |
| 24 | `clase-24-template-system` | Handlebars y generación de DOM con jQuery. |
| 25 | `clase-25-jquery-plugins` | Plugins básicos y plugins con Handlebars. |
| 26 | `clase-26-variables-gestion-opciones-plugins` | `$.extend`, FontSizer, Hilight y ajaxForm. |
| 27 | `clase-27-tecnicas-para-desarrollo-de-plugins-complejos-version-1` | Boilerplate de un plugin. |
| 27 | `clase-27-tecnicas-para-desarrollo-de-plugins-complejos-version-2` | Plugin de validación avanzada. |
| 28 | `clase-28-libreria-de-componentes-jquery-ui` | Método on e interacciones de jQuery UI: draggable, droppable, resizable, selectable y sortable. |

Las clases 18 y 19 usan una carpeta por ejercicio, con su CSS y su JS dentro. Las clases 6 y 7 guardan el CSS y el JS de cada ejemplo en `assets/` de la clase, y el PDF en `assets/pdf/`. La clase 28 agrupa el CSS y el JS de los ejercicios en `assets/` de la clase. El resto conserva el HTML original, en archivos sueltos.

Un ejercicio de las clases 18 y 19 queda así:

```text
clase-18-formularios-ajax/
  index.html
  assets/css/styles.css
  assets/php/
  ejemplo-01/
    index.html
    assets/css/styles.css
    assets/js/script.js
```

El CSS de la clase lo comparten el índice y los ejercicios. El CSS y el JS de cada ejemplo viven dentro de ese ejemplo. El PHP compartido de la clase 18 está en `assets/php/` (`pag.php`, `enviar-01.php`, `enviar-02.php`, `enviar-03.php`).

La clase 28 queda así. Cada ejercicio solo tiene `index.html`. El CSS y el JS numerados viven en el `assets/` de la clase. Cada `.css` y cada `.js` abre con el mismo banner de tres líneas: el nombre del archivo y la ruta desde la raíz del repo. El detalle de la carpeta está en `clase-28-libreria-de-componentes-jquery-ui/README.md`.

```text
clase-28-libreria-de-componentes-jquery-ui/
  index.html
  assets/css/
    01-metodo-on-sin-delegacion.css
    02-metodo-on-con-delegacion.css
    03-metodo-on-tercer-parametro-datos.css
    04-draggable-default.css
    05-draggable-scroll.css
    06-draggable-constraint-movement.css
    07-draggable-cursor-style.css
    08-draggable-events.css
    09-draggable-handle.css
    10-draggable-sortable.css
    11-draggable-revert.css
    12-draggable-snap-to.css
    13-draggable-visual-feedback.css
    14-droppable-default.css
    15-droppable-accept.css
    16-droppable-propagation.css
    17-droppable-revert.css
    18-droppable-photo-manager.css
    19-droppable-visual-feedback.css
    20-resizable-default.css
    21-resizable-animate.css
    22-resizable-constrain-area.css
    23-resizable-helper.css
    24-resizable-max-min.css
    25-resizable-aspect-ratio.css
    26-resizable-snap-to-grid.css
    27-resizable-synchronous.css
    28-resizable-textarea.css
    29-resizable-visual-feedback.css
    30-selectable-default.css
    31-selectable-display-grid.css
    32-selectable-serialize.css
    33-sortable-default.css
    34-sortable-connect-lists.css
    35-sortable-display-grid.css
    36-sortable-placeholder.css
    37-sortable-empty-lists.css
    38-sortable-items.css
    39-sortable-portlets.css
    styles.css
  assets/js/
    el mismo nombre que cada CSS de ejercicio, con extensión .js
  assets/img/gestor-fotos/
  01-metodo-on/
    01-metodo-on-sin-delegacion/
    02-metodo-on-con-delegacion/
    03-metodo-on-tercer-parametro-datos/
  02-interacciones/
    01-draggable/
    02-droppable/
    03-resizable/
    04-selectable/
    05-sortable/
```

### Udemy

`cursos/udemy/jquery-jquery-ui-facil-practico/`

Curso «Aprende jQuery y jQuery UI de forma fácil y práctica», secciones `00` a `09`, más temas de jQuery UI y recursos descargables.

## Tipos en el editor

`package.json` solo trae dependencias de desarrollo: TypeScript, `@types/jquery` y `@types/jqueryui`. Handlebars está como dependencia porque la clase 24 lo usa; el archivo que cargan las páginas es `assets/libs/handlebars/handlebars.min.js`.

`jsconfig.json` activa `checkJs` sobre `cursos/escuelait/**/*.js` y `types/**/*.d.ts`. Los tipos globales (`Window.$`, DOM y plugins) están en `types/`.

```bash
pnpm install
```
