import { FC } from 'react';
import styled from 'styled-components';

import { Typography } from '.';
import { Size } from '@/shared/types';

interface IStyledSwitchProps {
  $mb?: Size;
}

const StyledSwitch = styled.div<IStyledSwitchProps>`
  display: flex;
  gap: ${({ theme }) => theme.gutters.size2};
  margin-bottom: ${({ $mb, theme }) => theme.gutters[`size${$mb}`]};

  .switch {
    display: inline-block;
    height: 18px;
    position: relative;
    width: 42px;
  
    input { 
      height: 0;
      opacity: 0;
      width: 0;
  
      &:checked + .slider {
        background-color: ${({ theme }) => theme.colors.primary100};
      }
  
      &:checked + .slider:before {
        transform: translateX(18px);
        -webkit-transform: translateX(18px);
        -ms-transform: translateX(18px);
      }
    }
  
    .slider {
      background-color: ${({ theme }) => theme.colors.gray400};
      border-radius: 9px;
      bottom: 0;
      cursor: pointer;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      transition: .4s;
      -webkit-transition: .4s;
      
      &:before {
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 50%;
        bottom: -3px;
        content: "";
        height: 24px;
        left: 0px;
        position: absolute;
        transition: .4s;
        width: 24px;
        -webkit-transition: .4s;
      }
    }
  }
`

interface ISwitchProps {
  checked: boolean;
  onChange: () => void;
  mb?: Size;
  showText?: boolean
}

export const Switch: FC<ISwitchProps> = ({ checked, mb, showText, onChange }) => (
  <StyledSwitch $mb={mb}>
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider" />
    </label>
    {showText && <Typography variant="label">{checked ? 'Yes' : 'No'}</Typography>}
  </StyledSwitch>
);
