import React from 'react';

import { NavButton } from '../../common';
import * as S from './styled';

export const Navbar: React.FC = () => (
  <S.NavbarContainer>
    <NavButton label={'Home'} link={'/'} />
  </S.NavbarContainer>
);
