# Clase 28 — Librería de componentes jQuery UI

Método `on` e interacciones de jQuery UI. Las demos de interacciones siguen las de [jqueryui.com](https://jqueryui.com/) y el texto de las páginas está en español.

El índice navegable es `index.html`. El mapa del repositorio está en el `README.md` de la raíz.

## Cómo verlo

Abrir `index.html` en el virtual host cuyo document root es la raíz del repo. Las rutas que empiezan por `/assets/` salen de esa raíz.

Cada página incluye `assets/js/url.js`. Si la dirección termina en `/index.html`, el script la deja en la carpeta, sin recargar.

## Librerías

jQuery, jQuery UI, el tema base y el favicon se cargan con ruta absoluta:

```html
<link rel="shortcut icon" href="/assets/favicon/jquery-favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/assets/libs/jquery-ui/themes/base/jquery-ui.min.css">
<script src="/assets/libs/jquery/jquery-4.0.0.min.js"></script>
<script src="/assets/libs/jquery-ui/jquery-ui-1.14.2.min.js"></script>
```

El tema y los scripts de jQuery UI van en los ejercicios. Los índices solo cargan el favicon, `assets/css/styles.css` y `url.js`.

## Convención

Cada ejercicio es una carpeta con un único `index.html`. El CSS y el JS del ejercicio viven juntos en `assets/` de esta clase, con el mismo nombre numerado (`04-draggable-default.css` y `04-draggable-default.js`).

`assets/css/styles.css` lo comparten el índice, los listados y los ejercicios. Cada `.css` y cada `.js` abre con un banner de tres líneas: el nombre del archivo y la ruta desde la raíz del repo.

Las páginas usan View Transitions (`@view-transition { navigation: auto }`) y un enlace «volver» al nivel superior.

## Estructura

```text
clase-28-libreria-de-componentes-jquery-ui/
  index.html
  assets/
    css/          styles.css y un CSS por ejercicio
    js/           url.js y un JS por ejercicio, con el mismo nombre que el CSS
    img/gestor-fotos/
  01-metodo-on/
  02-interacciones/
    01-draggable/
    02-droppable/
    03-resizable/
    04-selectable/
    05-sortable/
```

## Ejercicios

El número del archivo en `assets/css/` y `assets/js/` es el de la primera columna.

### Método on

| Archivo | Carpeta |
| --- | --- |
| `01-metodo-on-sin-delegacion` | `01-metodo-on/01-metodo-on-sin-delegacion/` |
| `02-metodo-on-con-delegacion` | `01-metodo-on/02-metodo-on-con-delegacion/` |
| `03-metodo-on-tercer-parametro-datos` | `01-metodo-on/03-metodo-on-tercer-parametro-datos/` |

### Draggable

Demos de [jqueryui.com/draggable](https://jqueryui.com/draggable/). Carpeta: `02-interacciones/01-draggable/`.

| Archivo | Ejercicio |
| --- | --- |
| `04-draggable-default` | Funcionalidad por defecto |
| `05-draggable-scroll` | Desplazamiento automático |
| `06-draggable-constraint-movement` | Limitar el movimiento |
| `07-draggable-cursor-style` | Estilo del cursor |
| `08-draggable-events` | Eventos |
| `09-draggable-handle` | Asas |
| `10-draggable-sortable` | Draggable y Sortable |
| `11-draggable-revert` | Volver a la posición |
| `12-draggable-snap-to` | Ajuste a un elemento o a una rejilla |
| `13-draggable-visual-feedback` | Respuesta visual |

### Droppable

Demos de [jqueryui.com/droppable](https://jqueryui.com/droppable/). Carpeta: `02-interacciones/02-droppable/`. Las fotos del gestor están en `assets/img/gestor-fotos/`.

| Archivo | Ejercicio |
| --- | --- |
| `14-droppable-default` | Funcionalidad por defecto |
| `15-droppable-accept` | Aceptar |
| `16-droppable-propagation` | Evitar la propagación |
| `17-droppable-revert` | Volver a la posición |
| `18-droppable-photo-manager` | Gestor de fotos |
| `19-droppable-visual-feedback` | Respuesta visual |

### Resizable

Demos de [jqueryui.com/resizable](https://jqueryui.com/resizable/). Carpeta: `02-interacciones/03-resizable/`.

| Archivo | Ejercicio |
| --- | --- |
| `20-resizable-default` | Funcionalidad por defecto |
| `21-resizable-animate` | Animar |
| `22-resizable-constrain-area` | Limitar el área |
| `23-resizable-helper` | Contorno auxiliar |
| `24-resizable-max-min` | Tamaño máximo y mínimo |
| `25-resizable-aspect-ratio` | Conservar la proporción |
| `26-resizable-snap-to-grid` | Ajuste a la rejilla |
| `27-resizable-synchronous` | Cambio de tamaño simultáneo |
| `28-resizable-textarea` | Área de texto |
| `29-resizable-visual-feedback` | Respuesta visual |

### Selectable

Demos de [jqueryui.com/selectable](https://jqueryui.com/selectable/). Carpeta: `02-interacciones/04-selectable/`.

| Archivo | Ejercicio |
| --- | --- |
| `30-selectable-default` | Funcionalidad por defecto |
| `31-selectable-display-grid` | Mostrar en rejilla |
| `32-selectable-serialize` | Serializar la selección |

### Sortable

Demos de [jqueryui.com/sortable](https://jqueryui.com/sortable/). Carpeta: `02-interacciones/05-sortable/`.

| Archivo | Ejercicio |
| --- | --- |
| `33-sortable-default` | Funcionalidad por defecto |
| `34-sortable-connect-lists` | Conectar listas |
| `35-sortable-display-grid` | Mostrar en rejilla |
| `36-sortable-placeholder` | Hueco al soltar |
| `37-sortable-empty-lists` | Listas vacías |
| `38-sortable-items` | Incluir o excluir elementos |
| `39-sortable-portlets` | Paneles |
