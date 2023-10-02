'use client';

import { FC, useState } from 'react';
import styled, { css, useTheme } from 'styled-components';

import { Backdrop, Icon, IconButton, IconButtonVariant, IconName } from '.';

const getTranslateValues = (length: number) => {
  if (length === 1) {
    return [
      { x: '-0.65rem', y: '-5rem' },
    ];
  } else if (length === 2) {
    return [
      { x: '-1.8rem', y: '-4.5rem' },
      { x: '-4rem', y: '-2rem' },
    ];
  }
  return [
    { x: '-0.5rem', y: '-5rem' },
    { x: '-3.4rem', y: '-3.9rem' },
    { x: '-4.5rem', y: '-1rem' },
  ];
};

type StyledFabProps = {
  $isOpen: boolean;
}
type StyledFabChildProps = {
  $delay: number;
  $isOpen: boolean;
  $translateX: number | string;
  $translateY: number | string;
}

const StyledFab = styled.div<StyledFabProps>`
  ${({ $isOpen }) => $isOpen && css`
    height: 100%;
    left: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${({theme }) => theme.zIndices.fab};
  `}
`;
const StyledFabButton = styled.button<StyledFabProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  border: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  bottom: ${({ theme }) => theme.gutters.size16};
  cursor: pointer;
  display: flex;
  padding: ${({ theme }) => theme.gutters.size2};
  position: fixed;
  right: ${({ theme }) => theme.gutters.size4};
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg)' : undefined};
  transition: transform 200ms, background-color .15s ease-in-out;
  z-index: ${({ theme }) => theme.zIndices.fab};

  &:focus, &:hover {
    background-color: ${({ theme }) => theme.colors.primary800};
  }

  ${({ theme }) => theme.breakpoints.lg} {
    padding: ${({ theme }) => theme.gutters.size3};
  }
`;
// const StyledFabButton = styled(IconButton)<StyledFabProps>`
//   bottom: ${({ theme }) => theme.gutters.size16};
//   position: fixed;
//   right: ${({ theme }) => theme.gutters.size4};
//   transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg)' : undefined};
//   transition: transform 200ms;
// `;
const StyledFabChild = styled.div<StyledFabChildProps>`
  bottom: 3rem;
  opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
  pointer-events: ${({ $isOpen }) => $isOpen ? 'undefined' : 'none'};
  position: fixed;
  right: 0.5rem;
  transition-delay: ${({ $delay, $isOpen }) => $isOpen ? `.${$delay}s` : undefined};
  transition-duration: .35s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: ${({ $isOpen, $translateX, $translateY }) => $isOpen ? `translate3d(${$translateX}, ${$translateY}, 0)` : 'rotateZ(90deg)'};
  z-index: ${({ $isOpen, theme }) => $isOpen ? theme.zIndices.fab : theme.zIndices.hide};
`;

export type TFabItem = {
  variant: IconButtonVariant;
  iconName: IconName;
  onClick: () => void;
}

type FabProps = {
  items: TFabItem[];
}

export const Fab: FC<FabProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const translateValues = getTranslateValues(items.length);
  const { colors } = useTheme();

  const handleClose = () => setIsOpen(false);

  const handleOpen = () => setIsOpen(true);

  const handleClick = (onItemClick: () => void) => () => {
    handleClose();
    onItemClick();
  };

  return (
    <StyledFab $isOpen={isOpen}>
      {isOpen && (
        <Backdrop
          isHiding={false}
          onClick={handleClose}
        />
      )}
      <StyledFabButton
        $isOpen={isOpen}
        onClick={isOpen ? handleClose : handleOpen}
      >
        <Icon
          name="add"
          color={colors.white}
          width={25}
          height={25}
          pointer
        />
      </StyledFabButton>
      {/* <StyledFabButton
        $isOpen={isOpen}
        iconName="add"
        variant="primary"
        height={25}
        width={25}
        onClick={isOpen ? handleClose : handleOpen}
      /> */}
      {items.map((item, index) => {
        const { x, y } = translateValues[index];
        return (
          <StyledFabChild
            key={index}
            $delay={index}
            $isOpen={isOpen}
            $translateX={x}
            $translateY={y}
          >
            <IconButton
              variant={item.variant}
              iconName={item.iconName}
              height={22}
              width={22}
              onClick={handleClick(item.onClick)}
            />
          </StyledFabChild>
        );
      })}
    </StyledFab>
  );
};

// import { Children, FC, PropsWithChildren, useState } from 'react';
// import styled from 'styled-components';

// import { Backdrop, IconButton } from '.';

// const getTranslateValues = (length: number) => {
//   if (length === 1) {
//     return [
//       { x: 0, y: 0 },
//     ];
//   } else if (length === 2) {
//     return [
//       { x: '-2rem', y: '-4.5rem' },
//       { x: '-4.5rem', y: '-2rem' },
//     ];
//   }
//   return [
//     { x: '-4.5rem', y: '-1rem' },
//     { x: '-3.4rem', y: '-3.9rem' },
//     { x: '-0.5rem', y: '-5rem' },
//   ];
// };

// type StyledFabButtonProps = {
//   $isOpen: boolean;
// }
// type StyledFabChildProps = {
//   $delay: number;
//   $isOpen: boolean;
//   $translateX: number | string;
//   $translateY: number | string;
// }

// const StyledFab = styled.div`
//   height: 100%;
//   left: 0;
//   overflow: hidden;
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: ${({ theme }) => theme.zIndices.fab};
// `;
// const StyledFabButton = styled(IconButton)<StyledFabButtonProps>`
//   bottom: ${({ theme }) => theme.gutters.size16};
//   position: fixed;
//   right: ${({ theme }) => theme.gutters.size4};
//   transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg)' : undefined};
//   transition: transform 200ms;
// `;
// const StyledFabChild = styled.div<StyledFabChildProps>`
//   bottom: 3rem;
//   opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
//   position: fixed;
//   right: 0.5rem;
//   transition-delay: ${({ $delay, $isOpen }) => $isOpen ? `.${$delay}s` : undefined};
//   transition-duration: .35s;
//   transition-property: all;
//   transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
//   transform: ${({ $isOpen, $translateX, $translateY }) => $isOpen ? `translate3d(${$translateX}, ${$translateY}, 0)` : 'rotateZ(90deg)'};
//   z-index: ${({ $isOpen, theme }) => $isOpen ? theme.zIndices.fab : theme.zIndices.hide};
// `;

// export const Fab: FC<PropsWithChildren> = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isHiding, setIsHiding] = useState(false);
//   const translateValues = getTranslateValues(Children.toArray(children).length);

//   const handleClose = () => {
//     setIsHiding(true);
//     setTimeout(() => {
//       setIsOpen(false);
//       setIsHiding(false);
//     }, 200);
//   };

//   const handleClick = () => {
//     setIsOpen(true);
//   };

//   return (
//     <StyledFab>
//       {isOpen && (
//         <Backdrop
//           isHiding={isHiding}
//           onClick={handleClose}
//         />
//       )}
//       <StyledFabButton
//         $isOpen={isOpen}
//         iconName="add"
//         variant="primary"
//         height={25}
//         width={25}
//         onClick={isOpen ? handleClose : handleClick}
//       />
//       {Children.map(children, (child, index) => {
//         const { x, y } = translateValues[index];
//         return (
//           <StyledFabChild
//           $delay={index}
//           $isOpen={isOpen}
//           $translateX={x}
//             $translateY={y}
//             >
//             {child}
//           </StyledFabChild>
//         );
//       })}
//     </StyledFab>
//   );
// };
