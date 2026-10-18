# AGENTS.md

Este repositorio es material estático de cursos de jQuery. No hay bundler ni framework. Las páginas se sirven con el document root en la raíz del repo.

Lee `README.md` para el mapa de carpetas. Aquí va cómo se edita.

## Alcance

- Cambia solo la clase o el ejercicio que se pida.
- Las clases 18 y 19 de EscuelaIT siguen el patrón de carpeta por ejercicio. Las clases 20 a 27 conservan el HTML original; no las reestructures salvo que se pida.
- La clase 28, `clase-28-libreria-de-componentes-jquery-ui`, guarda el CSS y el JS de cada ejercicio en `assets/css/` y `assets/js/` de la clase, con el nombre numerado del ejercicio. Cada ejercicio solo tiene `index.html`. jQuery, jQuery UI y el tema base se cargan desde `/assets/libs/`.
- `cursos/desarrollowebcom` es un repositorio git anidado. No lo commitees desde este repo.
- `workflow/` está en `.gitignore`. No lo añadas al commit.
- No añadas dependencias npm ni un sistema de build salvo que se pida. jQuery y Handlebars ya están en `assets/libs/`.

## Ejercicio nuevo en EscuelaIT

Misma forma que `clase-18-formularios-ajax/ejemplo-01` y `clase-19-eventos-avanzados/01-eventos-deferidos`:

```text
clase-NN-nombre/
  index.html
  assets/css/styles.css
  nombre-del-ejercicio/
    index.html
    assets/css/styles.css
    assets/js/script.js
```

- En las clases 18 y 19 el script del ejercicio es `assets/js/script.js` dentro de esa carpeta. No juntes los scripts de varios ejercicios en un `assets/js` de la clase. La clase 28 es la excepción: ahí el CSS y el JS sí viven juntos en el `assets/` de la clase.
- El CSS compartido de la clase va en `clase-NN-nombre/assets/css/styles.css`. Las reglas solo de un ejercicio van en su `assets/css/styles.css`.
- La transición entre las páginas del curso está en `cursos/escuelait/curso-jquery-escuelait/assets/css/styles.css`. El índice de cada clase la enlaza con `../assets/css/styles.css`.
- Si el ejercicio llama a PHP, el endpoint compartido de la clase vive en `clase-NN-nombre/assets/php/` y el script lo pide con una ruta relativa a esa carpeta.

En el `index.html` del ejercicio:

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="shortcut icon" href="/assets/favicon/jquery-favicon.svg" type="image/svg+xml" />
<link rel="stylesheet" href="../assets/css/styles.css" />
<link rel="stylesheet" href="assets/css/styles.css" />
```

jQuery al final de `body`, con ruta absoluta:

```html
<script src="/assets/libs/jquery/jquery-4.0.0.min.js"></script>
<script src="assets/js/script.js"></script>
```

Handlebars, cuando haga falta: `/assets/libs/handlebars/handlebars.min.js`.

También existe `/assets/libs/jquery/jquery-4.0.0-beta.min.js`. Los ejercicios de las clases 18 y 19 usan `jquery-4.0.0.min.js`. Las clases que aún no se han migrado apuntan a rutas relativas antiguas o al CDN; déjalas así hasta que se migre esa clase.

## JavaScript

Al escribir o tocar `.js` (también el script dentro de un `.html`):

- Banner de tres líneas al inicio del archivo, con la ruta desde la raíz del repo. Las tres líneas interiores llevan 4 espacios de sangría y la misma longitud.
- Un comentario en cada instrucción.
- Arranque con `$(() => { ... })`.
- `const` o `let`. Funciones de flecha. Sin `var`, `alert`, `confirm`, `prompt` ni `innerHTML`.
- `event.preventDefault()` cuando el comportamiento del navegador no sea el que busca el ejercicio.
- JSDoc cuando el tipo no se infiere. En los callbacks de `$.post` y `$.ajax`, anota `respuesta` con el tipo real (`string`, el objeto que devuelve el PHP, etc.).
- Los tipos del editor están en `types/` y `jsconfig.json` (`checkJs` sobre `cursos/escuelait/**/*.js`).

## CSS

Mobile first. Reutiliza los tokens de la clase (`--ink`, `--muted`, `--line`, `--paper`, `--card`, `--accent`). En transiciones, respeta `prefers-reduced-motion: reduce`.

Los `.css` de la clase 28 llevan el mismo banner de tres líneas que los `.js`: cuatro espacios de sangría, el nombre del archivo y la ruta desde la raíz.

## Índices

Los listados (`index.html` de la raíz, de `cursos/`, del curso y de cada clase) están en español y enlazan la carpeta o el archivo real. Si añades un ejercicio, enlázalo desde el `index.html` de su clase.
