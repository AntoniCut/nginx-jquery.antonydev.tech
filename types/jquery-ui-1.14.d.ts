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
}
