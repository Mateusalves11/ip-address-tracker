import { createGlobalStyle } from 'styled-components';

import { Rubik } from 'next/font/google'

const rubik = Rubik({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:${rubik.style.fontFamily};
  }

 body{
    font-family:${rubik.style.fontFamily};
    height: 100vh;
  }

`;