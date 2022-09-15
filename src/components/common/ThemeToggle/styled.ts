import styled from '@emotion/styled';

type ThemeToggleSwitchProps = {
  isTheme: boolean;
};

export const ThemeToggleSwitch = styled.div<ThemeToggleSwitchProps>`
  background-color: var(--color-theme-background);
  display: flex;
  align-items: center;
  width: 4.8rem;
  height: 2.7rem;
  border-radius: 9em;
  position: absolute;
  top: 17px;
  right: 14px;
  transition: transform 0.75s ease-in-out;
  transform-origin: 50% 50%;
  cursor: pointer;
  padding: 0.3rem;
  &:before {
    transition: transform 0.7s ease;
    transform: translateX(${(props) => (props.isTheme ? '0rem' : '2.2rem')});
    content: '';
    display: block;
    width: 2rem;
    height: 2rem;
    background-color: var(--color-theme-toggle);
    border-radius: 50%;
  }
`;
