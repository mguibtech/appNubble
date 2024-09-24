import React from 'react';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {ThemeColors} from '../../theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';
import {arrowLeftIcon} from '../../assets/icons/arrowLeftIcon';
import {arrowRightIcon} from '../../assets/icons/arrowRightIcon';

export interface IconBase {
  size?: number;
  color?: string;
}

interface Props {
  name: IconName;
  color?: ThemeColors;
  size?: number;
}
export function Icon({name, color = 'backgroundContrast', size}: Props) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  arrowLeft: arrowLeftIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  arrowRight: arrowRightIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
