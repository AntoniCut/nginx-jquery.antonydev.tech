# Clase 29 — Usando jQuery UI

Widgets de jQuery UI. Las demos siguen las de [jqueryui.com](https://jqueryui.com/) y el texto de las páginas está en español.

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

Cada ejercicio es una carpeta con un único `index.html`. El CSS y el JS del ejercicio viven juntos en `assets/` de esta clase, con el mismo nombre numerado.

`assets/css/styles.css` lo comparten el índice, los listados y los ejercicios. Cada `.css` y cada `.js` abre con un banner de tres líneas: el nombre del archivo y la ruta desde la raíz del repo.

Las páginas usan View Transitions (`@view-transition { navigation: auto }`) y un enlace «volver» al nivel superior.

Las demos que en jqueryui.com llaman a un servidor remoto filtran una lista local, con una espera breve, para que funcionen sin ese servicio.

## Estructura

```text
clase-29-usando-jquery-ui/
  index.html
  assets/
    css/          styles.css y un CSS por ejercicio
    js/           url.js y un JS por ejercicio, con el mismo nombre que el CSS
    ajax/         paneles que carga la demo de pestañas por Ajax
    01-accordion/
    02-autocomplete/
    03-button/
    04-checkboxradio/
    05-controlgroup/
    06-datepicker/
    07-dialog/
    08-menu/
    09-progressbar/
    10-selectmenu/
    11-slider/
    12-spinner/
    13-tabs/
    14-tooltip/
```

## Ejercicios

El número del archivo en `assets/css/` y `assets/js/` es el de la primera columna.

### Accordion

Demos de [jqueryui.com/accordion/](https://jqueryui.com/accordion/). Carpeta: `01-accordion/`.

| Archivo | Ejercicio |
| --- | --- |
| `01-accordion-default` | Funcionalidad por defecto |
| `02-accordion-collapse` | Contraer el contenido |
| `03-accordion-icons` | Iconos personalizados |
| `04-accordion-fill-space` | Rellenar el espacio |
| `05-accordion-no-auto-height` | Sin altura automática |
| `06-accordion-sortable` | Ordenable |

### Autocomplete

Demos de [jqueryui.com/autocomplete/](https://jqueryui.com/autocomplete/). Carpeta: `02-autocomplete/`.

| Archivo | Ejercicio |
| --- | --- |
| `07-autocomplete-default` | Funcionalidad por defecto |
| `08-autocomplete-accent-folding` | Ignorar acentos |
| `09-autocomplete-categories` | Categorías |
| `10-autocomplete-combobox` | Lista combinada |
| `11-autocomplete-custom-data` | Datos y presentación propios |
| `12-autocomplete-multiple` | Varios valores |
| `13-autocomplete-multiple-remote` | Varios valores en remoto |
| `14-autocomplete-remote` | Origen remoto |
| `15-autocomplete-remote-jsonp` | Origen remoto JSONP |
| `16-autocomplete-remote-cache` | Origen remoto con caché |
| `17-autocomplete-scrollable` | Resultados con desplazamiento |
| `18-autocomplete-xml` | XML leído una vez |

### Button

Demos de [jqueryui.com/button/](https://jqueryui.com/button/). Carpeta: `03-button/`.

| Archivo | Ejercicio |
| --- | --- |
| `19-button-default` | Funcionalidad por defecto |
| `20-button-icons` | Iconos |

### Checkboxradio

Demos de [jqueryui.com/checkboxradio/](https://jqueryui.com/checkboxradio/). Carpeta: `04-checkboxradio/`.

| Archivo | Ejercicio |
| --- | --- |
| `21-checkboxradio-default` | Funcionalidad por defecto |
| `22-checkboxradio-no-icons` | Sin iconos |
| `23-checkboxradio-product` | Selector de producto |
| `24-checkboxradio-radio` | Grupo de radios |

### Controlgroup

Demos de [jqueryui.com/controlgroup/](https://jqueryui.com/controlgroup/). Carpeta: `05-controlgroup/`.

| Archivo | Ejercicio |
| --- | --- |
| `25-controlgroup-default` | Funcionalidad por defecto |
| `26-controlgroup-split` | Botón dividido |
| `27-controlgroup-toolbar` | Barra de herramientas |

### Datepicker

Demos de [jqueryui.com/datepicker/](https://jqueryui.com/datepicker/). Carpeta: `06-datepicker/`.

| Archivo | Ejercicio |
| --- | --- |
| `28-datepicker-default` | Funcionalidad por defecto |
| `29-datepicker-animations` | Animaciones |
| `30-datepicker-other-months` | Días de otros meses |
| `31-datepicker-button-bar` | Barra de botones |
| `32-datepicker-inline` | En línea |
| `33-datepicker-month-year` | Menús de mes y año |
| `34-datepicker-multiple` | Varios meses |
| `35-datepicker-format` | Formato de fecha |
| `36-datepicker-icon` | Icono para abrir |
| `37-datepicker-localize` | Calendario en español |
| `38-datepicker-alternate` | Campo alternativo |
| `39-datepicker-restrict` | Limitar el rango |
| `40-datepicker-range` | Elegir un rango |
| `41-datepicker-week` | Semana del año |

### Dialog

Demos de [jqueryui.com/dialog/](https://jqueryui.com/dialog/). Carpeta: `07-dialog/`.

| Archivo | Ejercicio |
| --- | --- |
| `42-dialog-default` | Funcionalidad por defecto |
| `43-dialog-animation` | Animación |
| `44-dialog-modal-confirmation` | Confirmación modal |
| `45-dialog-modal-form` | Formulario modal |
| `46-dialog-modal-message` | Mensaje modal |

### Menu

Demos de [jqueryui.com/menu/](https://jqueryui.com/menu/). Carpeta: `08-menu/`.

| Archivo | Ejercicio |
| --- | --- |
| `47-menu-default` | Funcionalidad por defecto |
| `48-menu-categories` | Categorías |
| `49-menu-icons` | Iconos |

### Progressbar

Demos de [jqueryui.com/progressbar/](https://jqueryui.com/progressbar/). Carpeta: `09-progressbar/`.

| Archivo | Ejercicio |
| --- | --- |
| `50-progressbar-default` | Funcionalidad por defecto |
| `51-progressbar-label` | Etiqueta propia |
| `52-progressbar-download` | Diálogo de descarga |
| `53-progressbar-indeterminate` | Valor indeterminado |

### Selectmenu

Demos de [jqueryui.com/selectmenu/](https://jqueryui.com/selectmenu/). Carpeta: `10-selectmenu/`.

| Archivo | Ejercicio |
| --- | --- |
| `54-selectmenu-default` | Funcionalidad por defecto |
| `55-selectmenu-rendering` | Presentación propia |
| `56-selectmenu-product` | Selección de producto |

### Slider

Demos de [jqueryui.com/slider/](https://jqueryui.com/slider/). Carpeta: `11-slider/`.

| Archivo | Ejercicio |
| --- | --- |
| `57-slider-default` | Funcionalidad por defecto |
| `58-slider-colorpicker` | Selector de color |
| `59-slider-handle` | Asa propia |
| `60-slider-multiple` | Varios deslizadores |
| `61-slider-range` | Rango |
| `62-slider-range-max` | Rango con máximo fijo |
| `63-slider-range-min` | Rango con mínimo fijo |
| `64-slider-select` | Unido a un select |
| `65-slider-snap` | Ajuste a incrementos |
| `66-slider-vertical-range` | Rango vertical |
| `67-slider-vertical` | Vertical |

### Spinner

Demos de [jqueryui.com/spinner/](https://jqueryui.com/spinner/). Carpeta: `12-spinner/`.

| Archivo | Ejercicio |
| --- | --- |
| `68-spinner-default` | Funcionalidad por defecto |
| `69-spinner-currency` | Moneda |
| `70-spinner-decimal` | Decimal |
| `71-spinner-map` | Mapa |
| `72-spinner-overflow` | Desbordamiento |
| `73-spinner-time` | Hora |

### Tabs

Demos de [jqueryui.com/tabs/](https://jqueryui.com/tabs/). Carpeta: `13-tabs/`.

| Archivo | Ejercicio |
| --- | --- |
| `74-tabs-default` | Funcionalidad por defecto |
| `75-tabs-collapse` | Contraer el contenido |
| `76-tabs-ajax` | Contenido por Ajax |
| `77-tabs-mouseover` | Abrir al pasar el ratón |
| `78-tabs-manipulation` | Manipulación simple |
| `79-tabs-sortable` | Ordenables |
| `80-tabs-vertical` | Pestañas verticales |

### Tooltip

Demos de [jqueryui.com/tooltip/](https://jqueryui.com/tooltip/). Carpeta: `14-tooltip/`.

| Archivo | Ejercicio |
| --- | --- |
| `81-tooltip-default` | Funcionalidad por defecto |
| `82-tooltip-animation` | Animación propia |
| `83-tooltip-content` | Contenido propio |
| `84-tooltip-style` | Estilo propio |
| `85-tooltip-forms` | Formularios |
| `86-tooltip-track` | Seguir el ratón |
| `87-tooltip-player` | Reproductor |
