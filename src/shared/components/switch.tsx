import { FC } from 'react';
import styled from 'styled-components';

import { marginBottom } from '@/shared/styles';
import type { Size } from '@/shared/types';

type StyledSwitchProps = {
  $mb?: Size;
}

const StyledSwitch = styled.label<StyledSwitchProps>`
  cursor: pointer;
  display: inline-block;
  height: 26px;
  width: 46px;
  ${marginBottom};
  
  input {
    display: none;

    &:checked + span {
      background-color: ${({ theme }) => theme.colors.primary};
    }

    &:checked + span:after {
      transform: translate3d(22px, 3px, 0);
    }
  }

  span {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 23px;
    display: inline-block;
    position: relative;
    height: 26px;
    vertical-align: text-bottom;
    width: 46px;

    &:after {
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 11px;
      box-shadow: ${({ theme }) => theme.shadows.sm};
      content: "";
      height: 20px;
      left: 0;
      position: absolute;
      transform: translate3d(4px, 3px, 0);
      transition: all 0.2s ease-in-out;
      width: 20px;
    }
  }
`;

type SwitchProps = {
  checked: boolean;
  mb?: Size;
  onChange: () => void;
}

export const Switch: FC<SwitchProps> = ({ checked, mb, onChange }) => (
  <StyledSwitch $mb={mb}>
    <input type="checkbox" checked={checked} onChange={onChange} />
    <span />
  </StyledSwitch>
);
