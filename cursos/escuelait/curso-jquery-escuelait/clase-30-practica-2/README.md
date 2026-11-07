# Clase 30 — Práctica 2

Plugin de un formulario. Cada ejercicio es una versión del plugin. El texto de las páginas está en español.

El índice navegable es `index.html`. El mapa del repositorio está en el `README.md` de la raíz.

## Cómo verlo

Abrir `index.html` en el virtual host cuyo document root es la raíz del repo. Las rutas que empiezan por `/assets/` salen de esa raíz.

Cada página incluye `assets/js/url.js`. Si la dirección termina en `/index.html`, el script la deja en la carpeta, sin recargar.

Los ejercicios 2, 3 y 4 envían el formulario a `assets/php/guardar-con-json.php`. El ejercicio 1 usa `assets/php/guardar.php`.

## Librerías

jQuery y el favicon se cargan con ruta absoluta:

```html
<link rel="shortcut icon" href="/assets/favicon/jquery-favicon.svg" type="image/svg+xml">
<script src="/assets/libs/jquery/jquery-4.0.0.min.js"></script>
```

Los índices solo cargan el favicon, `assets/css/styles.css` y `url.js`.

## Convención

Cada ejercicio es una carpeta con un único `index.html`. El CSS y el JS del ejercicio viven en `assets/` de esta clase, con el mismo nombre.

`assets/css/styles.css` lo comparten el índice y los ejercicios. Cada `.css` y cada `.js` abre con un banner de tres líneas: el nombre del archivo y la ruta desde la raíz del repo.

Las páginas usan View Transitions (`@view-transition { navigation: auto }`) y un enlace «volver» al nivel superior.

## Estructura

```text
clase-30-practica-2/
  index.html
  assets/
    css/          styles.css y un CSS por ejercicio
    js/           url.js y un JS por ejercicio
    php/          guardar.php y guardar-con-json.php
  01-envio-html/
  02-opciones/
  03-autoguardado/
  04-eventos/
```

## Ejercicios

| Archivo | Ejercicio |
| --- | --- |
| `01-envio-html` | Envío en texto. Sin opciones. La respuesta se escribe en `#mensaje`. |
| `02-opciones` | `url`, `capaMensaje` y `metodo`. El PHP responde JSON y la página lista los fallos. |
| `03-autoguardado` | A los 6 segundos el formulario se envía solo. |
| `04-eventos` | `comienzoenvio` y `finalizoenvio`. Dos formularios, a 6 y 10 segundos. |
