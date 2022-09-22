import React from 'react';

import * as S from './styled';

type RgbRangeSliderProps = {
  bgColor: string;
  min: number;
  max: number;
  value: number;
  setValue: any;
};

export const RgbRangeSlider: React.FC<RgbRangeSliderProps> = ({
  bgColor,
  min,
  max,
  value,
  setValue,
}) => (
  <S.RgbRangeInput
    bgColor={bgColor}
    type={'range'}
    min={min}
    max={max}
    defaultValue={value}
    onChange={(event) => setValue(event.target.value)}
    step={1}
  />
);
