import { css } from '@emotion/react';

import { reset } from './reset';

export const globalStyle = css`
  ${reset}

  :root {
    --color-backgorund: #0e101f;

    --color-text-primary: #f5f5f5;
    --color-text-secondary: #906bff;
  }
  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }

  html {
  }
  body {
  }
`;
