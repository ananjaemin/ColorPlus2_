import { css } from '@emotion/react';

import { reset } from './reset';

export const globalStyle = css`
  ${reset}

  :root {
    --color-backgorund: #0a0d15; // #0e101f
    --color-background-Line: #333;

    --color-text-primary: #f5f5f5;
    --color-text-secondary: #906bff;
  }
  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }
  html {
    font-size: 10px;
  }
  body {
    background: var(--color-backgorund);
    color: var(--color-text-primary);
    font-size: 1.6rem;
    //  letter-spacing (글자 간격)
    background-image: linear-gradient(0deg, transparent 49px, var(--color-background-Line) 50px),
      linear-gradient(90deg, transparent 49px, var(--color-background-Line) 50px);
    background-size: 50px 50px;
    //https://intrepidgeeks.com/tutorial/is-this-only-css-ok-background-of-checkered-paper-grid
  }
`;
