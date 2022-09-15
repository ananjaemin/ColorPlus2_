import React from 'react';

import * as S from './styled';

type NavButtonProps = {
  label: string;
  link: string;
};

export const NavButton: React.FC<NavButtonProps> = ({ label, link }) => (
  <S.NavButtonContainer to={link}>{label}</S.NavButtonContainer>
);
