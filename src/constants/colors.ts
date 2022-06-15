import { createGlobalStyle } from 'styled-components'

const Colors = createGlobalStyle`
    :root {
        --color-gray: rgba(58,58,58,1);
        --color-gray20: rgba(58,58,58,0.02);
        --color-gray50: rgba(58,58,58,0.05);
        --color-gray100: rgba(58,58,58,0.1);
        --color-gray200: rgba(58,58,58,0.2);
        --color-gray300: rgba(58,58,58,0.3);
        --color-gray400: rgba(58,58,58,0.4);
        --color-gray500: rgba(58,58,58,0.5);
        --color-gray600: rgba(58,58,58,0.6);
        --color-gray700: rgba(58,58,58,0.7);
        --color-gray800: rgba(58,58,58,0.8);
        --color-gray900: rgba(58,58,58,0.9);
        --color-brightGray: rgba(239,239,239,1);
        --color-blue: rgba(54,143,255,1);
        --color-blue60: rgba(54,143,255,0.06);
        --color-blue100: rgba(54,143,255,0.1);
        --color-blue500: rgba(54,143,255,0.5);
        --color-blue980: rgba(54,143,255,0.98);
        --color-mint: rgba(38,206,194,1);
        --color-mint100: rgba(38,206,194,0.1);
        --color-orange: rgba(255,150,35,1);
        --color-red: rgba(253,46,105,1);
        --color-red100: rgba(253,46,105,0.1);
        --color-deepOrange: rgba(255,91,46,1);
        --color-mediumRed: rgba(255,33,60,1);
        --color-deepRed: rgba(190,0,23,1);
        --color-purple: rgba(151,95,254,1);
        --color-purple100: rgba(151,95,254,0.1);
        --color-emerald: rgba(13,208,175,1);
        --color-white: rgba(255,255,255,1);
        --color-white600: rgba(255,255,255,0.6);
        --color-white900: rgba(255,255,255,0.9);
        --color-skyblue: rgba(55,168,255,1);
        --color-lightpurple: rgba(151,95,254,1);
        --color-azul: rgba(31,87,250,1);
        --color-azul500: rgba(31,87,250,0.5);
        --color-teal: rgba(10,219,143,1);
        --color-teal100: rgba(10,219,143,0.1);
        --color-teal900: rgba(10,219,143,0.9);
    }
`
export default Colors
