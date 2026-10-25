/*
    *  -----------------------------------------------------------------  *
    *  -----  jquery-ui-1.14.d.ts  --  /types/jquery-ui-1.14.d.ts  -----  *
    *  -----------------------------------------------------------------  *
*/



/**
 * --------------------------------------------------
 * -----  interface  -  `CheckboxradioOptions`  -----
 * --------------------------------------------------
 * - `opciones de checkboxradio en jQuery UI 1.14`
 */
interface CheckboxradioOptions {

    /** - `desactiva el control` */
    disabled?: boolean;

    /** - `muestra el icono de marcado` */
    icon?: boolean;

    /** - `texto del botón` */
    label?: string | null;

    /** - `clases extra de los elementos del widget` */
    classes?: Record<string, string>;
}



/**
 * -------------------------------------------------
 * -----  interface  -  `ControlgroupOptions`  -----
 * -------------------------------------------------
 * - `opciones de controlgroup en jQuery UI 1.14`
 */
interface ControlgroupOptions {

    /** - `orientación del grupo` */
    direction?: "horizontal" | "vertical";

    /** - `desactiva el grupo` */
    disabled?: boolean;

    /** - `widgets que entran en el grupo` */
    items?: Record<string, string>;
}



declare namespace JQueryUI {

    /**
     * -----------------------------------------
     * -----  interface  -  `MenuOptions`  -----
     * -----------------------------------------
     * - `elementos que el menú puede elegir`
     */
    interface MenuOptions {

        /** - `selector de los elementos que se pueden elegir` */
        items?: string;
    }

    /**
     * -------------------------------------------
     * -----  interface  -  `ButtonOptions`  -----
     * -------------------------------------------
     * - `icono del botón en jQuery UI 1.14`
     */
    interface ButtonOptions {

        /** - `clase del icono` */
        icon?: string;

        /** - `lado del icono` */
        iconPosition?: "beginning" | "end" | "top" | "bottom";

        /** - `muestra el texto del botón` */
        showLabel?: boolean;
    }

    /**
     * ------------------------------------------------------
     * -----  interface  -  `AutocompleteCategoryItem`  -----
     * ------------------------------------------------------
     * - `sugerencia con su grupo`
     */
    interface AutocompleteCategoryItem {

        /** - `texto de la sugerencia` */
        label: string;

        /** - `grupo de la sugerencia` */
        category: string;
    }

    /**
     * ----------------------------------------------------
     * -----  interface  -  `AutocompleteCategories`  -----
     * ----------------------------------------------------
     * - `instancia que pinta las sugerencias agrupadas`
     */
    interface AutocompleteCategories {

        /** - `lista del menú` */
        widget(): JQuery<HTMLUListElement>;

        /** - `pinta el menú de sugerencias` */
        _renderMenu(ul: JQuery<HTMLUListElement>, items: AutocompleteCategoryItem[]): void;

        /** - `pinta una sugerencia y guarda sus datos` */
        _renderItemData(ul: JQuery<HTMLUListElement>, item: AutocompleteCategoryItem): JQuery;
    }

    /**
     * ----------------------------------------------------
     * -----  interface  -  `AutocompleteCustomItem`  -----
     * ----------------------------------------------------
     * - `sugerencia con descripción`
     */
    interface AutocompleteCustomItem {

        /** - `texto de la sugerencia` */
        label: string;

        /** - `texto secundario` */
        desc: string;
    }

    /**
     * ----------------------------------------------------
     * -----  interface  -  `AutocompleteCustomData`  -----
     * ----------------------------------------------------
     * - `instancia que pinta nombre y descripción`
     */
    interface AutocompleteCustomData {

        /** - `pinta una sugerencia` */
        _renderItem(ul: JQuery<HTMLUListElement>, item: AutocompleteCustomItem): JQuery;
    }

    /**
     * --------------------------------------------
     * -----  interface  -  `SelectMenuItem`  -----
     * --------------------------------------------
     * - `opción pintada en el menú`
     */
    interface SelectMenuItem {

        /** - `texto de la opción` */
        label: string;

        /** - `opción desactivada` */
        disabled?: boolean;

        /** - `opción original` */
        element: JQuery;
    }

    /**
     * -------------------------------------------------
     * -----  interface  -  `SelectMenuRendering`  -----
     * -------------------------------------------------
     * - `instancia que pinta cada opción`
     */
    interface SelectMenuRendering {

        /** - `pinta una opción` */
        _renderItem(ul: JQuery<HTMLUListElement>, item: SelectMenuItem): JQuery;
    }
}



interface JQuery {

    /** - `activa casillas y radios como botones del tema` */
    checkboxradio(options?: CheckboxradioOptions): this;

    /** - `llama a un método de checkboxradio` */
    checkboxradio(methodName: "destroy" | "disable" | "enable" | "refresh" | "widget"): this;

    /** - `agrupa botones y otros widgets` */
    controlgroup(options?: ControlgroupOptions): this;

    /** - `llama a un método de controlgroup` */
    controlgroup(methodName: "destroy" | "refresh" | "widget"): this;

    /** - `devuelve la instancia del autocompletado` */
    autocomplete(methodName: "instance"): JQueryUI.AutocompleteCategories | JQueryUI.AutocompleteCustomData;

    /** - `devuelve la instancia del menú` */
    selectmenu(methodName: "instance"): JQueryUI.SelectMenuRendering;

    /** - `cierra la ayuda del elemento indicado` */
    tooltip(methodName: "close", evento: { currentTarget: HTMLElement }): this;
}
