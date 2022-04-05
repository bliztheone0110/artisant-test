import { ThemeModel } from "../models/ThemeModel";

export const theme: ThemeModel = {
    colors: {
        black: '#000000',
        white: '#ffffff',
        titleGrey: '#828282',
        grey: '#808080',
        lightGrey: '#F3F3F3',
        blue: '#0040e5',
    },

    media: {
        extraLarge: '(min-width: 1400px)',
        large: '(min-width: 992px)',
        medium: '(min-width: 768px)',
        small: '(min-width: 576px)',
        extraSmall: '(min-width: 425px)',
    },

    sizes: {
        container: { 
            paddingLarge: '32px',
            paddingSmall: '16px',
         }
    },

    fontSizes: {
        small: 12,
        normal: 14,
        medium: 16,
        large: 18,
        title: 32,
    },
}