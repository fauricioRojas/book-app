'use client';

import { useRef, useState, FC } from 'react';
import styled, { useTheme } from 'styled-components';

import { FlexWrap, Icon, Typography } from '.';
import { useOutsideClick } from '@/hooks';

interface IStyledArrowProps {
  $hasTitle: boolean;
}

const StyledPopover = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
  bottom: 0;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  left: -10px;
  position: absolute;
  transform: translate(0, calc(100% + 10px));
  z-index: 999;
`;
const StyledArrow = styled.div<IStyledArrowProps>`
  left: 10px;
  position: absolute;
  top: calc(-0.5rem - 1px);

  &::before, &::after {
    border-color: transparent;
    border-style: solid;
    border-width: ${({ theme }) => `${theme.gutters.size0} ${theme.gutters.size2} ${theme.gutters.size2}`};
    content: "";
    position: absolute;
  }

  &::before {
    border-bottom-color: ${({ theme }) => theme.colors.border};
    top: 0;
  }

  &::after {
    border-bottom-color: ${({ $hasTitle, theme }) => $hasTitle ? theme.colors.secondary : theme.colors.card};
    top: 1px;
  }
`;

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: ${({ theme }) => `${theme.gutters.size1} ${theme.gutters.size2}`};
`;

const StyledBody = styled.div`
  line-height: 1.3;
  width: 200px;
  padding: ${({ theme }) => theme.gutters.size2};
`;

interface IPopoverProps {
  title?: string;
  description: string;
}

export const Popover: FC<IPopoverProps> = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme()
  const popoverRef = useRef(null);
  
  const handleOnClick = () => setIsVisible(prevIsVisible => !prevIsVisible);

  useOutsideClick({ ref: popoverRef, callback: handleOnClick });

  return (
    <FlexWrap position="relative">
      <Icon
        name="info"
        color={theme.colors.secondaryText}
        width={18}
        height={18}
        onClick={handleOnClick}
      />
      {isVisible && (
        <StyledPopover ref={popoverRef}>
          <StyledArrow $hasTitle={!!title} />
          {title && (
            <StyledHeader>
              <Typography variant="h6" fontWeight="bold">{title}</Typography>
            </StyledHeader>
          )}
          <StyledBody>
            <Typography variant="span">{description}</Typography>
          </StyledBody>
        </StyledPopover>
      )}
    </FlexWrap>
  );
};
