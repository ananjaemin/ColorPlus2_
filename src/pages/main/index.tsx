import React, { useState } from 'react';

import { MainLogo, RgbRangeSlider } from '../../components';
import { getRgbaProps } from '../../utils';
import * as S from './styled';

export const MainPage: React.FC = () => {
  const [redRange, setRedRange] = useState(100);
  const [greenRange, setGreenRange] = useState(100);
  const [blueRange, setBlueRange] = useState(100);

  // const [rgbRange, setRgbRange] = useState({ red: 100, green: 100, blue: 100 });

  const {} = getRgbaProps(redRange, greenRange, blueRange, 1);
  return (
    <S.MainPageContainer>
      <MainLogo />
      <RgbRangeSlider bgColor={`#a35cdb`} min={0} max={255} value={100} setValue={setRedRange} />
      <RgbRangeSlider
        bgColor={`rgb(0,255,0)`}
        min={0}
        max={255}
        value={100}
        setValue={setGreenRange}
      />
      <RgbRangeSlider
        bgColor={`rgb(0,0,255)`}
        min={0}
        max={255}
        value={100}
        setValue={setBlueRange}
      />
    </S.MainPageContainer>
  );
};
