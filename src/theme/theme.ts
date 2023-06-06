export type ColorSingle = string;

export type ColorObject = {
    basic: string,
    dark: string,
    light: string,
};

export type ColorObjectMore = {
    basic: string,
    dark: string,
    darker: string,
    light: string,
    lighter: string,
};

export type Colors = {
    primary: ColorObjectMore,
    success: ColorObject,
    error: ColorObject,
    warning: ColorObject,
    grey: ColorObjectMore,
    white: ColorSingle,
    black: ColorSingle,
}

export type CornerRadius = {
    small: string,
    medium: string,
    large: string,
}

export type Theme = {
    colors: Colors,
    cornerRadius: CornerRadius,
}

export const theme: Theme = {
    colors: {
        primary: {
            basic: "#0d60d9",
            dark: "#0a4dae",
            darker: "#052657",
            light: "#3d80e1",
            lighter: "#cfdff7",
        },
        success: {
            basic: "#19722f",
            dark: "#0f441c",
            light: "#8cb997",
        },
        error: {
            basic: "#8cb997",
            dark: "#8cb997",
            light: "#8cb997",
        },
        warning: {
            basic: "#e2b021",
            dark: "#e2b021",
            light: "#eed07a",
        },
        grey: {
            basic: "#505067",
            dark: "#383848",
            darker: "#18181f",
            light: "#a8a8b3",
            lighter: "#eeeef0",
        },
        white: "#FFFFFF",
        black: "#000000"
    },
    cornerRadius: {
        small: "4px",
        medium: "8px",
        large: "12px",
    }
}
