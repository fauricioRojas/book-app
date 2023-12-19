import { FC, useMemo } from 'react';
import styled, { css } from 'styled-components';

import { marginLeft, marginRight } from '@/shared/styles';
import type { Size } from '@/shared/types';
import { ACAirFilterIcon } from './ac-air-filter-icon';
import { ACIcon } from './ac-icon';
import { AddIcon } from './add-icon';
import { ArrowDownIcon } from './arrow-down-icon';
import { ArrowLeftIcon } from './arrow-left-icon';
import { BallJointsIcon } from './ball-joints-icon';
import { BatteryIcon } from './battery-icon';
import { BellIcon } from './bell-icon';
import { BeltIcon } from './belt-icon';
import { BikeIcon } from './bike-icon';
import { BrakeFiberIcon } from './brake-fiber-icon';
import { BrakeFluidBottleIcon } from './brake-fluid-bottle-icon';
import { BrakeIcon } from './brake-icon';
import { BrushIcon } from './brush-icon';
import { BullIcon } from './bull-icon';
import { BushingIcon } from './bushing-icon';
import { CableIcon } from './cable-icon';
import { CameraIcon } from './camera-icon';
import { CancelIcon } from './cancel-icon';
import { CarChasisIcon } from './car-chasis-icon';
import { CarFuseIcon } from './car-fuse-icon';
import { CarIcon } from './car-icon';
import { CarburetorIcon } from './carburetor-icon';
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
import { FacebookIcon } from './facebook-icon';
import { FootprintIcon } from './footprint-icon';
import { FuelFilterIcon } from './fuel-filter-icon';
import { FusesIcon } from './fuses-icon';
import { GearIcon } from './gear-icon';
import { GithubIcon } from './github-icon';
import { GreaseGunIcon } from './grease-gun-icon';
import { HairCutIcon } from './hair-cut-icon';
import { HamsterIcon } from './hamster-icon';
import { HandleBarIcon } from './handle-bar-icon';
import { HorseIcon } from './horse-icon';
import { HoseIcon } from './hose-icon';
import { InfoIcon } from './info-icon';
import { InjectorIcon } from './injector-icon';
import { LengthMeterIcon } from './length-meter-icon';
import { LightBulbIcon } from './light-bulb-icon';
import { MicrophoneIcon } from './microphone-icon';
import { MoonIcon } from './moon-icon';
import { MotorcycleGripIcon } from './motorcycle-grip-icon';
import { MotorcycleIcon } from './motorcycle-icon';
import { MotorcycleSeatIcon } from './motorcycle-seat-icon';
import { OilFilterIcon } from './oil-filter-icon';
import { OilIcon } from './oil-icon';
import { PaintGunIcon } from './paint-gun-icon';
import { PencilIcon } from './pencil-icon';
import { PetBathIcon } from './pet-bath-icon';
import { PetGroomingBrushIcon } from './pet-grooming-brush-icon';
import { PetNailClippersIcon } from './pet-nail-clippers-icon';
import { PetrolPumpIcon } from './petrol-pump-icon';
import { PickupIcon } from './pickup-icon';
import { PigIcon } from './pig-icon';
import { PillsBottleIcon } from './pills-bottle-icon';
import { Profilecon } from './profile-icon';
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
import { TransferIcon } from './transfer-icon';
import { TranslateIcon } from './translate-icon';
import { TrashIcon } from './trash-icon';
import { TruckIcon } from './truck-icon';
import { VideoCameraIcon } from './video-camera-icon';
import { WarningIcon } from './warning-icon';
import { WaterDropIcon } from './water-drop-icon';
import { WeightIcon } from './weight-icon';

export type IconSize = number | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type StyledIconProps = {
  $color?: string;
  $isClickable?: boolean;
  $ml?: Size;
  $mr?: Size;
  $size: IconSize;
};

export const StyledSvg = styled.svg<StyledIconProps>`
  color: ${({ $color, theme }) => $color ?? theme.colors.primaryText};
  cursor: ${({ $isClickable }) => ($isClickable ? 'pointer' : 'default')};
  transition: color 0.2s ease;
  ${marginLeft};
  ${marginRight};

  ${({ $size }) => typeof $size === 'number' && css`
    height: ${`${$size}px`};
    width: ${`${$size}px`};
  `};
  ${({ $size }) => $size === 'sm' && css`
    height: 20px;
    width: 20px;
  `};
  ${({ $size }) => $size === 'md' && css`
    height: 26px;
    width: 26px;
  `};
  ${({ $size }) => $size === 'lg' && css`
    height: 32px;
    width: 32px;
  `};
  ${({ $size }) => $size === 'xl' && css`
    height: 40px;
    width: 40px;
  `};
  ${({ $size }) => $size === 'xxl' && css`
    height: 50px;
    width: 50px;
  `};
`;

const ICON_MAPPER = {
  'ac-air-filter': ACAirFilterIcon,
  ac: ACIcon,
  add: AddIcon,
  'arrow-down': ArrowDownIcon,
  'arrow-left': ArrowLeftIcon,
  'ball-joints': BallJointsIcon,
  battery: BatteryIcon,
  bell: BellIcon,
  belt: BeltIcon,
  bike: BikeIcon,
  'brake-fiber': BrakeFiberIcon,
  'brake-fluid-bottle': BrakeFluidBottleIcon,
  brake: BrakeIcon,
  brush: BrushIcon,
  bull: BullIcon,
  bushing: BushingIcon,
  cable: CableIcon,
  camera: CameraIcon,
  cancel: CancelIcon,
  'car-chasis': CarChasisIcon,
  'car-fuse': CarFuseIcon,
  car: CarIcon,
  carburetor: CarburetorIcon,
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
  facebook: FacebookIcon,
  footprint: FootprintIcon,
  'fuel-filter': FuelFilterIcon,
  fuses: FusesIcon,
  gear: GearIcon,
  github: GithubIcon,
  'grease-gun': GreaseGunIcon,
  'hair-cut': HairCutIcon,
  hamster: HamsterIcon,
  'handle-bar': HandleBarIcon,
  horse: HorseIcon,
  hose: HoseIcon,
  info: InfoIcon,
  injector: InjectorIcon,
  'length-meter': LengthMeterIcon,
  'light-bulb': LightBulbIcon,
  microphone: MicrophoneIcon,
  moon: MoonIcon,
  'motorcycle-grip': MotorcycleGripIcon,
  motorcycle: MotorcycleIcon,
  'motorcycle-seat': MotorcycleSeatIcon,
  'oil-filter': OilFilterIcon,
  oil: OilIcon,
  'paint-gun': PaintGunIcon,
  pencil: PencilIcon,
  'pet-bath': PetBathIcon,
  'pet-grooming-brush': PetGroomingBrushIcon,
  'pet-nail-clippers': PetNailClippersIcon,
  'petrol-pump': PetrolPumpIcon,
  pickup: PickupIcon,
  pig: PigIcon,
  'pills-bottle': PillsBottleIcon,
  profile: Profilecon,
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
  transfer: TransferIcon,
  translate: TranslateIcon,
  trash: TrashIcon,
  truck: TruckIcon,
  'video-camera': VideoCameraIcon,
  warning: WarningIcon,
  'water-drop': WaterDropIcon,
  weight: WeightIcon,
};

export type IconName = keyof typeof ICON_MAPPER;

export type CommonIconProps = {
  className?: string;
  pointer?: boolean;
  color?: string;
  mr?: Size;
  ml?: Size;
  size?: IconSize;
  onClick?: () => void;
};

type IconProps = CommonIconProps & {
  name: IconName;
};

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  const Element = useMemo(() => ICON_MAPPER[name], [name]);

  return <Element {...props} />;
};
