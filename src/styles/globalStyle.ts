import { css } from '@emotion/react';

import { reset } from './reset';
import { lightTheme, darkTheme } from './theme';

export const globalStyle = css`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }
  html {
    font-size: 10px;
  }
  body {
    ${darkTheme}
    background: var(--color-backgorund);
    color: var(--color-text-primary);
    font-size: 1.6rem;
    //  letter-spacing (글자 간격)
    background-image: linear-gradient(0deg, transparent 49px, var(--color-background-Line) 50px),
      linear-gradient(90deg, transparent 49px, var(--color-background-Line) 50px);
    background-size: 50px 50px;
    //https://intrepidgeeks.com/tutorial/is-this-only-css-ok-background-of-checkered-paper-grid
  }
  @media (prefers-color-scheme: dark) {
    body {
      ${darkTheme}
    }
  }
  body[data-theme='light'] {
    ${lightTheme};
  }

  body[data-theme='dark'] {
    ${darkTheme};
  }
`;
