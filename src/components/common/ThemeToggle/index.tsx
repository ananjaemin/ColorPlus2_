import React from 'react';

import * as S from './styled';

type ThemeToggleButtonProps = {
  click: () => void;
  isTheme: boolean;
};

export const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ click, isTheme }) => (
  <S.ThemeToggleSwitch isTheme={isTheme} onClick={click}></S.ThemeToggleSwitch>
);
