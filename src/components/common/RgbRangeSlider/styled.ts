import styled from '@emotion/styled';

export const RgbRangeInput = styled.input<{ bgColor: string }>`
  margin: 0;
  padding: 0;
  width: 20rem;
  height: 0.8rem;
  border-radius: 5px;
  /* background: linear-gradient(
    to right,
    ${(props) => props.bgColor} 0%,
    rgba(255, 255, 255, 0.9) 100%); */
  background-color: ${(props) => props.bgColor};
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  //Chrome, Safari, Opera, and Edge Chromium
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: #5cd5eb;
    height: 2rem;
    width: 1rem;
    border-radius: 1rem;
  }
  //Firefox
  &::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: #5cd5eb;
    height: 2rem;
    width: 1rem;
  }
`;
