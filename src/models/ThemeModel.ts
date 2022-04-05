export interface ThemeModel {
    colors: {
        black: string,
        white: string,
        titleGrey: string,
        grey: string,
        lightGrey: string,
        blue: string,
    }

    media: {
        extraLarge: string,
        large: string,
        medium: string,
        small: string,
        extraSmall: string,
    }

    sizes: {
        container: {
            paddingLarge: string,
            paddingSmall: string,
        },
    }

    fontSizes: {
        small: number,
        normal: number,
        medium: number,
        large: number,
        title: number,
    }
}