import { FC } from 'react';
import styled from 'styled-components';

import { Size } from '@/shared/types';

interface IStyledSwitchProps {
  $mb?: Size;
}

const StyledSwitch = styled.label<IStyledSwitchProps>`
  cursor: pointer;
  display: inline-block;
  height: 26px;
  margin-bottom: ${({ $mb, theme }) => theme.gutters[`size${$mb}`]};
  width: 46px;
  
  input {
    display: none;

    &:checked + span {
      background-color: ${({ theme }) => theme.colors.primary};
    }

    &:checked + span:after {
      transform: translate3d(22px, 2px, 0);
    }
  }

  span {
    background-color: ${({ theme }) => theme.colors.secondary800};
    border-radius: 23px;
    display: inline-block;
    position: relative;
    height: 26px;
    margin-right: 0.5rem;
    vertical-align: text-bottom;
    width: 46px;

    &:after {
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 11px;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
      content: "";
      height: 22px;
      left: 0;
      position: absolute;
      transform: translate3d(2px, 2px, 0);
      transition: all 0.2s ease-in-out;
      width: 22px;
    }
  }
`;

interface ISwitchProps {
  checked: boolean;
  mb?: Size;
  onChange: () => void;
}

export const Switch: FC<ISwitchProps> = ({ checked, mb, onChange }) => (
  <StyledSwitch $mb={mb}>
    <input type="checkbox" checked={checked} onChange={onChange} />
    <span />
  </StyledSwitch>
);
