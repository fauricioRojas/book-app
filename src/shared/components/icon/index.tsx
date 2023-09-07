import React, { FC, useMemo } from 'react';
import styled from 'styled-components';

import { AddIcon } from './add-icon';
import { ArrowBackIcon } from './arrow-back-icon';
import { ArrowDownIcon } from './arrow-down-icon';
import { BullIcon } from './bull-icon';
import { CancelIcon } from './cancel-icon';
import { CameraIcon } from './camera-icon';
import { CarIcon } from './car-icon';
import { CatIcon } from './cat-icon';
import { CheckIcon } from './check-icon';
import { DogIcon } from './dog-icon';
import { ErrorIcon } from './error-icon';
import { ExpandIcon } from './expand-icon';
import { FootprintIcon } from './footprint-icon';
import { InfoIcon } from './info-icon';
import { MicrophoneIcon } from './microphone-icon';
import { MotorcycleIcon } from './motorcycle-icon';
import { PencilIcon } from './pencil-icon';
import { PickupIcon } from './pickup-icon';
import { SettingsIcon } from './settings-icon';
import { SignOutIcon } from './sign-out-icon';
import { StarIcon } from './star-icon';
import { TrashIcon } from './trash-icon';
import { TruckIcon } from './truck-icon';
import { VideoCameraIcon } from './video-camera-icon';
import { WarningIcon } from './warning-icon';
import { WheelIcon } from './wheel-icon';
import { Size } from '@/shared/types';

export interface ICommonIconProps {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
  mr?: Size;
  ml?: Size;
  onClick?: () => void;
};

export type IconName =
  | 'add'
  | 'arrow-back'
  | 'arrow-down'
  | 'bull'
  | 'camera'
  | 'cancel'
  | 'car'
  | 'cat'
  | 'check'
  | 'dog'
  | 'error'
  | 'expand'
  | 'footprint'
  | 'info'
  | 'microphone'
  | 'motorcycle'
  | 'pencil'
  | 'pickup'
  | 'settings'
  | 'sign-out'
  | 'star'
  | 'trash'
  | 'truck'
  | 'video-camera'
  | 'warning'
  | 'wheel';

interface IIconProps extends ICommonIconProps {
  name: IconName;
}

const ICON_MAPPER: Record<IconName, FC<ICommonIconProps>> = {
  add: AddIcon,
  'arrow-back': ArrowBackIcon,
  'arrow-down': ArrowDownIcon,
  bull: BullIcon,
  camera: CameraIcon,
  cancel: CancelIcon,
  car: CarIcon,
  cat: CatIcon,
  check: CheckIcon,
  dog: DogIcon,
  error: ErrorIcon,
  expand: ExpandIcon,
  footprint: FootprintIcon,
  info: InfoIcon,
  microphone: MicrophoneIcon,
  motorcycle: MotorcycleIcon,
  pencil: PencilIcon,
  pickup: PickupIcon,
  settings: SettingsIcon,
  'sign-out': SignOutIcon,
  star: StarIcon,
  trash: TrashIcon,
  truck: TruckIcon,
  'video-camera': VideoCameraIcon,
  warning: WarningIcon,
  wheel: WheelIcon,
};

interface IStyledIconProps {
  $isClickable?: boolean;
  $ml?: Size;
  $mr?: Size;
}

export const StyledSvg = styled.svg<IStyledIconProps>`
  cursor: ${( $isClickable ) => $isClickable ? 'pointer' : 'default'};
  margin-left: ${({ $ml, theme }) => theme.gutters[`size${$ml}`]};
  margin-right: ${({ $mr, theme }) => theme.gutters[`size${$mr}`]};
  transition: color .2s ease;
`

export const Icon: FC<IIconProps> = ({
  name,
  color = '#000',
  ...props
}) => {
  const Element = useMemo(() => ICON_MAPPER[name], [name]);

  return <Element color={color} {...props} />;
};
