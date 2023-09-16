import React, { FC, useMemo } from 'react';
import styled from 'styled-components';

import { ACIcon } from './ac-icon';
import { ACAirFilterIcon } from './ac-air-filter-icon';
import { AddIcon } from './add-icon';
import { ArrowBackIcon } from './arrow-back-icon';
import { ArrowDownIcon } from './arrow-down-icon';
import { BallJointsIcon } from './ball-joints-icon';
import { BatteryIcon } from './battery-icon';
import { BeltIcon } from './belt-icon';
import { BikeIcon } from './bike-icon';
import { BrakeIcon } from './brake-icon';
import { BrakeFiberIcon } from './brake-fiber-icon';
import { BrakeFluidBottleIcon } from './brake-fluid-bottle-icon';
import { BrushIcon } from './brush-icon';
import { BullIcon } from './bull-icon';
import { BushingIcon } from './bushing-icon';
import { CableIcon } from './cable-icon';
import { CameraIcon } from './camera-icon';
import { CancelIcon } from './cancel-icon';
import { CarIcon } from './car-icon';
import { CarburetorIcon } from './carburetor-icon';
import { CarChasisIcon } from './car-chasis-icon';
import { CarFuseIcon } from './car-fuse-icon';
import { CatIcon } from './cat-icon';
import { ChainIcon } from './chain-icon';
import { CheckIcon } from './check-icon';
import { CoolantIcon } from './coolant-icon';
import { CurrencyIcon } from './currency-icon';
import { DogIcon } from './dog-icon';
import { EmailIcon } from './email-icon';
import { EngineAirFilterIcon } from './engine-air-filter-icon';
import { EngineIcon } from './engine-icon';
import { ErrorIcon } from './error-icon';
import { ExpandIcon } from './expand-icon';
import { FootprintIcon } from './footprint-icon';
import { FuelFilterIcon } from './fuel-filter-icon';
import { FusesIcon } from './fuses-icon';
import { GearIcon } from './gear-icon';
import { GithubIcon } from './github-icon';
import { GreaseGunIcon } from './grease-gun-icon';
import { HandleBarIcon } from './handle-bar-icon';
import { HairCutIcon } from './hair-cut-icon';
import { HamsterIcon } from './hamster-icon';
import { HorseIcon } from './horse-icon';
import { HoseIcon } from './hose-icon';
import { InfoIcon } from './info-icon';
import { InjectorIcon } from './injector-icon';
import { LengthMeterIcon } from './length-meter-icon';
import { LightBulbIcon } from './light-bulb-icon';
import { MicrophoneIcon } from './microphone-icon';
import { MoonIcon } from './moon-icon';
import { MotorcycleIcon } from './motorcycle-icon';
import { MotorcycleSeatIcon } from './motorcycle-seat-icon';
import { OilIcon } from './oil-icon';
import { OilFilterIcon } from './oil-filter-icon';
import { PaintGunIcon } from './paint-gun-icon';
import { PencilIcon } from './pencil-icon';
import { PetBathIcon } from './pet-bath-icon';
import { PetGroomingBrushIcon } from './pet-grooming-brush-icon';
import { PetNailClippersIcon } from './pet-nail-clippers-icon';
import { PetrolPumpIcon } from './petrol-pump-icon';
import { PickupIcon } from './pickup-icon';
import { PigIcon } from './pig-icon';
import { PillsBottleIcon } from './pills-bottle-icon';
import { RabbitIcon } from './rabbit-icon';
import { RadiatorIcon } from './radiator-icon';
import { RimIcon } from './rim-icon';
import { SadEmojiIcon } from './sad-emoji-icon';
import { SearchIcon } from './search-icon';
import { SettingsIcon } from './settings-icon';
import { ShockAbsorbersIcon } from './shock-absorbers-icon';
import { SideMirrorIcon } from './side-mirror-icon';
import { SignOutIcon } from './sign-out-icon';
import { StarIcon } from './star-icon';
import { SurgeryKnifeIcon } from './surgery-knife-icon';
import { SyringeIcon } from './syringe-icon';
import { TickIcon } from './tick-icon';
import { TireIcon } from './tire-icon';
import { TractorIcon } from './tractor-icon';
import { TrailerIcon } from './trailer-icon';
import { TranslateIcon } from './translate-icon';
import { TrashIcon } from './trash-icon';
import { TruckIcon } from './truck-icon';
import { VideoCameraIcon } from './video-camera-icon';
import { WarningIcon } from './warning-icon';
import { WaterDropIcon } from './water-drop-icon';
import { WeightIcon } from './weight-icon';
import { Size } from '@/shared/types';

export interface ICommonIconProps {
  className?: string;
  pointer?: boolean;
  color?: string;
  width?: number;
  height?: number;
  mr?: Size;
  ml?: Size;
  onClick?: () => void;
};

export type IconName =
  | 'ac'
  | 'ac-air-filter'
  | 'add'
  | 'arrow-back'
  | 'arrow-down'
  | 'ball-joints'
  | 'battery'
  | 'belt'
  | 'bike'
  | 'brake'
  | 'brake-fiber'
  | 'brake-fluid-bottle'
  | 'brush'
  | 'bull'
  | 'bushing'
  | 'cable'
  | 'camera'
  | 'cancel'
  | 'car'
  | 'carburetor'
  | 'car-chasis'
  | 'car-fuse'
  | 'cat'
  | 'chain'
  | 'check'
  | 'coolant'
  | 'currency'
  | 'dog'
  | 'email'
  | 'engine'
  | 'engine-air-filter'
  | 'error'
  | 'expand'
  | 'footprint'
  | 'fuel-filter'
  | 'fuses'
  | 'gear'
  | 'github'
  | 'grease-gun'
  | 'handle-bar'
  | 'hair-cut'
  | 'hamster'
  | 'horse'
  | 'hose'
  | 'info'
  | 'injector'
  | 'length-meter'
  | 'light-bulb'
  | 'microphone'
  | 'moon'
  | 'motorcycle'
  | 'motorcycle-seat'
  | 'oil'
  | 'oil-filter'
  | 'paint-gun'
  | 'pencil'
  | 'pet-bath'
  | 'pet-grooming-brush'
  | 'pet-nail-clippers'
  | 'petrol-pump'
  | 'pickup'
  | 'pig'
  | 'pills-bottle'
  | 'rabbit'
  | 'radiator'
  | 'rim'
  | 'sad-emoji'
  | 'search'
  | 'settings'
  | 'shock-absorbers'
  | 'side-mirror'
  | 'sign-out'
  | 'star'
  | 'surgery-knife'
  | 'syringe'
  | 'tick'
  | 'tire'
  | 'tractor'
  | 'trailer'
  | 'translate'
  | 'trash'
  | 'truck'
  | 'video-camera'
  | 'warning'
  | 'water-drop'
  | 'weight';

interface IIconProps extends ICommonIconProps {
  name: IconName;
}

const ICON_MAPPER: Record<IconName, FC<ICommonIconProps>> = {
  ac: ACIcon,
  'ac-air-filter': ACAirFilterIcon,
  add: AddIcon,
  'arrow-back': ArrowBackIcon,
  'arrow-down': ArrowDownIcon,
  'ball-joints': BallJointsIcon,
  battery: BatteryIcon,
  belt: BeltIcon,
  bike: BikeIcon,
  brake: BrakeIcon,
  'brake-fiber': BrakeFiberIcon,
  'brake-fluid-bottle': BrakeFluidBottleIcon,
  brush: BrushIcon,
  bull: BullIcon,
  bushing: BushingIcon,
  cable: CableIcon,
  camera: CameraIcon,
  cancel: CancelIcon,
  car: CarIcon,
  carburetor: CarburetorIcon,
  'car-chasis': CarChasisIcon,
  'car-fuse': CarFuseIcon,
  cat: CatIcon,
  chain: ChainIcon,
  check: CheckIcon,
  coolant: CoolantIcon,
  currency: CurrencyIcon,
  dog: DogIcon,
  email: EmailIcon,
  engine: EngineIcon,
  'engine-air-filter': EngineAirFilterIcon,
  error: ErrorIcon,
  expand: ExpandIcon,
  footprint: FootprintIcon,
  'fuel-filter': FuelFilterIcon,
  fuses: FusesIcon,
  gear: GearIcon,
  github: GithubIcon,
  'grease-gun': GreaseGunIcon,
  'handle-bar': HandleBarIcon,
  'hair-cut': HairCutIcon,
  hamster: HamsterIcon,
  horse: HorseIcon,
  hose: HoseIcon,
  info: InfoIcon,
  injector: InjectorIcon,
  'length-meter': LengthMeterIcon,
  'light-bulb': LightBulbIcon,
  microphone: MicrophoneIcon,
  moon: MoonIcon,
  motorcycle: MotorcycleIcon,
  'motorcycle-seat': MotorcycleSeatIcon,
  oil: OilIcon,
  'oil-filter': OilFilterIcon,
  'paint-gun': PaintGunIcon,
  pencil: PencilIcon,
  'pet-bath': PetBathIcon,
  'pet-grooming-brush': PetGroomingBrushIcon,
  'pet-nail-clippers': PetNailClippersIcon,
  'petrol-pump': PetrolPumpIcon,
  pickup: PickupIcon,
  pig: PigIcon,
  'pills-bottle': PillsBottleIcon,
  rabbit: RabbitIcon,
  radiator: RadiatorIcon,
  rim: RimIcon,
  'sad-emoji': SadEmojiIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  'shock-absorbers': ShockAbsorbersIcon,
  'side-mirror': SideMirrorIcon,
  'sign-out': SignOutIcon,
  star: StarIcon,
  'surgery-knife': SurgeryKnifeIcon,
  syringe: SyringeIcon,
  tick: TickIcon,
  tire: TireIcon,
  tractor: TractorIcon,
  trailer: TrailerIcon,
  translate: TranslateIcon,
  trash: TrashIcon,
  truck: TruckIcon,
  'video-camera': VideoCameraIcon,
  warning: WarningIcon,
  'water-drop': WaterDropIcon,
  weight: WeightIcon,
};

interface IStyledIconProps {
  $isClickable?: boolean;
  $ml?: Size;
  $mr?: Size;
}

export const StyledSvg = styled.svg<IStyledIconProps>`
  cursor: ${({ $isClickable }) => $isClickable ? 'pointer' : 'default'};
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
