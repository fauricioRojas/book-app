import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const SyringeIcon: FC<ICommonIconProps> = ({
  color,
  pointer,
  ml,
  mr,
  width = 20,
  height = 20,
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 450 450"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      fill={color}
      d="m428.452 104.371-90.813-90.819c-6.854-6.855-17.961-6.855-24.812 0-6.85 6.851-6.85 17.953 0 24.808l9.823 9.822-43.01 43.005-36.146-36.144c-6.85-6.845-17.952-6.845-24.808 0-6.855 6.852-6.855 17.962 0 24.809l22.431 22.43-185.286 185.29c-8.634 8.629-5.74 18.447-4.013 24.309.303 1.054.642 2.183.972 3.484l12.037 45.618-48.42 48.423.201 32.184 64.109-64.104 46.132 11.897.408.101c1.31.286 2.529.638 3.679.963 2.873.811 6.127 1.722 9.723 1.722 5.271 0 10.083-2.016 13.922-5.839l185.29-185.29 22.282 22.278a17.503 17.503 0 0 0 12.407 5.138c4.496 0 8.98-1.714 12.408-5.138 6.852-6.854 6.852-17.961 0-24.812l-35.992-35.988 43.003-43.001 9.666 9.657a17.469 17.469 0 0 0 12.403 5.146c4.491 0 8.978-1.713 12.403-5.146 6.857-6.847 6.857-17.958.001-24.803zm-159.468 82.386-17.297-17.297c-4.4-4.401-11.535-4.401-15.938 0l-.299.299c-4.401 4.401-4.401 11.537 0 15.938l17.297 17.296-21.23 21.23-17.296-17.296c-4.401-4.401-11.536-4.401-15.938 0l-.298.298c-4.401 4.401-4.401 11.537 0 15.938l17.296 17.295-21.23 21.23-17.295-17.297c-4.401-4.401-11.536-4.401-15.938 0l-.299.299c-4.401 4.401-4.401 11.537 0 15.938l17.297 17.296-22.439 22.438-17.295-17.297c-4.401-4.401-11.536-4.401-15.938 0l-.299.299c-4.401 4.401-4.401 11.537 0 15.938l17.297 17.297-25.814 25.813-39.558-39.699 183.889-183.889 39.63 39.628-28.305 28.305zm65.452-40.779-38.254-38.251 43.006-43.006 38.253 38.249-43.005 43.008z"
    />
  </StyledSvg>
);
