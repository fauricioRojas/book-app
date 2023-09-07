import React, { FC, useMemo } from 'react';
import styled from 'styled-components';

import { ACAirFilterIcon } from './ac-air-filter-icon';
import { AddIcon } from './add-icon';
import { ArrowBackIcon } from './arrow-back-icon';
import { ArrowDownIcon } from './arrow-down-icon';
import { BatteryIcon } from './battery-icon';
import { BrakeIcon } from './brake-icon';
import { BrakeFiberIcon } from './brake-fiber-icon';
import { BrushIcon } from './brush-icon';
import { BullIcon } from './bull-icon';
import { CancelIcon } from './cancel-icon';
import { CameraIcon } from './camera-icon';
import { CarIcon } from './car-icon';
import { CatIcon } from './cat-icon';
import { CheckIcon } from './check-icon';
import { CoolantIcon } from './coolant-icon';
import { DogIcon } from './dog-icon';
import { EngineAirFilterIcon } from './engine-air-filter-icon';
import { EngineIcon } from './engine-icon';
import { ErrorIcon } from './error-icon';
import { ExpandIcon } from './expand-icon';
import { FootprintIcon } from './footprint-icon';
import { InfoIcon } from './info-icon';
import { LightBulbIcon } from './light-bulb-icon';
import { LinedUpAndBalancedIcon } from './lined-up-and-balanced-icon';
import { MicrophoneIcon } from './microphone-icon';
import { MotorcycleIcon } from './motorcycle-icon';
import { OilIcon } from './oil-icon';
import { PencilIcon } from './pencil-icon';
import { PickupIcon } from './pickup-icon';
import { RadiatorIcon } from './radiator-icon';
import { RefuelIcon } from './refuel-icon';
import { SearchIcon } from './search-icon';
import { SettingsIcon } from './settings-icon';
import { ShockAbsorbersIcon } from './shock-absorbers-icon';
import { SideMirrorIcon } from './side-mirror-icon';
import { SignOutIcon } from './sign-out-icon';
import { StarIcon } from './star-icon';
import { TireIcon } from './tire-icon';
import { TrashIcon } from './trash-icon';
import { TruckIcon } from './truck-icon';
import { VideoCameraIcon } from './video-camera-icon';
import { WarningIcon } from './warning-icon';
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
  | 'ac-air-filter'
  | 'add'
  | 'arrow-back'
  | 'arrow-down'
  | 'battery'
  | 'brake'
  | 'brake-fiber'
  | 'brush'
  | 'bull'
  | 'camera'
  | 'cancel'
  | 'car'
  | 'cat'
  | 'check'
  | 'coolant'
  | 'dog'
  | 'engine'
  | 'engine-air-filter'
  | 'error'
  | 'expand'
  | 'footprint'
  | 'info'
  | 'light-bulb'
  | 'lined-up-and-balanced'
  | 'microphone'
  | 'motorcycle'
  | 'oil'
  | 'pencil'
  | 'pickup'
  | 'radiator'
  | 'refuel'
  | 'search'
  | 'settings'
  | 'shock-absorbers'
  | 'side-mirror'
  | 'sign-out'
  | 'star'
  | 'tire'
  | 'trash'
  | 'truck'
  | 'video-camera'
  | 'warning';

interface IIconProps extends ICommonIconProps {
  name: IconName;
}

const ICON_MAPPER: Record<IconName, FC<ICommonIconProps>> = {
  'ac-air-filter': ACAirFilterIcon,
  add: AddIcon,
  'arrow-back': ArrowBackIcon,
  'arrow-down': ArrowDownIcon,
  battery: BatteryIcon,
  brake: BrakeIcon,
  'brake-fiber': BrakeFiberIcon,
  brush: BrushIcon,
  bull: BullIcon,
  camera: CameraIcon,
  cancel: CancelIcon,
  car: CarIcon,
  cat: CatIcon,
  check: CheckIcon,
  coolant: CoolantIcon,
  dog: DogIcon,
  engine: EngineIcon,
  'engine-air-filter': EngineAirFilterIcon,
  error: ErrorIcon,
  expand: ExpandIcon,
  footprint: FootprintIcon,
  info: InfoIcon,
  'light-bulb': LightBulbIcon,
  'lined-up-and-balanced': LinedUpAndBalancedIcon,
  microphone: MicrophoneIcon,
  motorcycle: MotorcycleIcon,
  oil: OilIcon,
  pencil: PencilIcon,
  pickup: PickupIcon,
  radiator: RadiatorIcon,
  refuel: RefuelIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  'shock-absorbers': ShockAbsorbersIcon,
  'side-mirror': SideMirrorIcon,
  'sign-out': SignOutIcon,
  star: StarIcon,
  tire: TireIcon,
  trash: TrashIcon,
  truck: TruckIcon,
  'video-camera': VideoCameraIcon,
  warning: WarningIcon,
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
