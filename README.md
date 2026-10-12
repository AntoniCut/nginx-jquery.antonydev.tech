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

Clases 18 a 28. El índice del curso está en `index.html` de esa carpeta. La transición entre clases vive en `assets/css/styles.css`.

| Clase | Carpeta | Contenido |
| --- | --- | --- |
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
| 28 | `clase-28-jquery-ui` | Interacciones, empezando por draggable. |

Las clases 18 y 19 ya usan una carpeta por ejercicio. El resto conserva el HTML original de cada clase, en archivos sueltos.

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

### Udemy

`cursos/udemy/jquery-jquery-ui-facil-practico/`

Curso «Aprende jQuery y jQuery UI de forma fácil y práctica», secciones `00` a `09`, más temas de jQuery UI y recursos descargables.

## Tipos en el editor

`package.json` solo trae dependencias de desarrollo: TypeScript, `@types/jquery` y `@types/jqueryui`. Handlebars está como dependencia porque la clase 24 lo usa; el archivo que cargan las páginas es `assets/libs/handlebars/handlebars.min.js`.

`jsconfig.json` activa `checkJs` sobre `cursos/escuelait/**/*.js` y `types/**/*.d.ts`. Los tipos globales (`Window.$`, DOM y plugins) están en `types/`.

```bash
pnpm install
```
