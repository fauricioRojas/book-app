import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const InjectorIcon: FC<CommonIconProps> = ({
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
    viewBox="0 0 50 50"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      d="M26.6785 20.6183c-.7964.2779-1.3395-.1021-1.44-.1299v-3.81c0-.51-.4-.91-.92-.91h-9.27c-.5099 0-.92.4-.92.91v11.79c0 .13-.04.25-.1.35l-1.34 2.11c-.06.11-.1.23-.1.35v3.87c0 .36.29.64.65.64h12v-11.22c.8411.145 1.8209.0715 2.74-.26 1.01-.35 1.8701-.97 2.51-1.78l-2.97-2.57C27.3185 20.2683 27.0286 20.4983 26.6785 20.6183zM14.1285 13.3584c0 .2599.21.47.47.47h.2599c.25 0 .45.2.47.44h8.76v-2.42h-9.96V13.3584zM14.1385 9.0384c-.36 0-.65.29-.65.66 0 .36.29.65.65.65h9.94c.18 0 .34-.07.46-.19.12-.12.1899-.28.1899-.46 0-.37-.29-.66-.65-.66h-.5v-2.16h.5c.18 0 .34-.07.46-.19.12-.12.1899-.29.1899-.47 0-.36-.29-.65-.65-.65h-1.06v-1.83c.18 0 .35-.08.46-.2.1201-.12.19-.28.19-.46 0-.26-.15-.48-.37-.58h.2c.41 0 .74-.34.74-.75 0-.41-.33-.75-.74-.75h-8.78c-.41 0-.7401.34-.7401.75 0 .41.33.75.7401.75h.41c-.33.03-.59.3-.58.64 0 .37.29.6.65.6v1.83h-1.06c-.36 0-.65.29-.65.65 0 .37.29.66.65.66h.5v2.16H14.1385zM25.5002 41.8455h-.2617v-4.5571h-11.11v4.5571h-.2579c-.8821 0-1.5842.7021-1.5842 1.5842 0 .8641.7021 1.5662 1.5842 1.5662h2.7264v4.0057h6.1767v-4.0057h2.7264c.8821 0 1.5842-.7021 1.5842-1.5662C27.0844 42.5476 26.3823 41.8455 25.5002 41.8455zM31.0664 12.5846l-3.7929 4.1607c-.319.3611-.2813.9116.0798 1.2306l5.3363 4.6074c.3611.319.912.2886 1.231-.0724l3.793-4.1607L31.0664 12.5846z"
      fill={color}
    />
  </StyledSvg>
);
