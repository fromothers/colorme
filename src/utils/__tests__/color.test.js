import * as C from '../color';

import {
  DEFAULT_ADJUSTERS,
} from '../../constants';

describe('#getColorProperties', () => {
  const hex = '#b577f2';
  const rgb = 'rgb(181, 119, 242)';
  const rgba = 'rgb(181, 119, 242, 0.6)';

  let expectedProps = {
    alpha: 100,
    hue: 271,
    lightness: 71,
    saturation: 83,
    blackness: 6,
    whiteness: 47,
    red: 181,
    green: 119,
    blue: 242
  };

  it('gets the correct props and values for a hex color', () => {
    expect(C.getColorProperties(hex)).toEqual(expectedProps);
  });

  it('gets the correct props and values for a rgb color', () => {
    expect(C.getColorProperties(rgb)).toEqual(expectedProps);
  });

  it('gets the correct props and values for a rgba color', () => {
    let expectedRgbaProps = {...expectedProps};
    expectedRgbaProps.alpha = 60;
    expect(C.getColorProperties(rgba)).toEqual(expectedRgbaProps);
  });
});

describe('#getAdjustersForColor', () => {
  const hex = '#b577f2';
  const expectedAdjusters = [
    {
      enabled: false,
      name: 'alpha',
      shortName: 'a',
      unit: '%',
      value: 100
    },
    {
      enabled: false,
      name: 'saturation',
      unit: '%',
      shortName: 's',
      value: 83
    },
    {
      enabled: false,
      name: 'hue',
      max: 360,
      shortName: 'h',
      value: 271
    },
    {
      enabled: false,
      name: 'lightness',
      unit: '%',
      shortName: 'l',
      value: 71
    },
    {
      enabled: false,
      name: 'whiteness',
      unit: '%',
      shortName: 'w',
      value: 47
    },
    {
      enabled: false,
      name: 'blackness',
      unit: '%',
      shortName: 'b',
      value: 6
    },
    {
      enabled: false,
      name: 'tint',
      unit: '%',
      value: 0
    },
    {
      enabled: false,
      name: 'shade',
      unit: '%',
      value: 0
    },
    {
      enabled: false,
      name: 'contrast',
      unit: '%',
      value: 0
    }
  ];

  it('gets the correct adjusters for a color', () => {
    expect(C.getAdjustersForColor(hex, DEFAULT_ADJUSTERS)).toEqual(expectedAdjusters);
  });
});