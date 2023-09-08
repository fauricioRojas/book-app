import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const SettingsIcon: FC<ICommonIconProps> = ({
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
    viewBox="0 0 6.35 6.35"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      fill={color}
      d="M 12.023438 1.0019531 C 10.879474 0.99439407 9.827972 1.6403519 9.3183594 2.6621094 L 8.8457031 3.6074219 C 8.6594404 3.6765872 8.4761978 3.7523466 8.2949219 3.8339844 L 7.2929688 3.5 C 6.2105419 3.1386772 5.0091347 3.4251415 4.2070312 4.2402344 C 3.4165021 5.0436863 3.1451318 6.2265373 3.5019531 7.2929688 L 3.8359375 8.2929688 C 3.7525494 8.4755199 3.6745261 8.6599649 3.6035156 8.8476562 L 2.6621094 9.3183594 C 1.6414167 9.8274617 0.99358533 10.877951 1.0019531 12.021484 C 1.0102038 13.148917 1.6542632 14.177388 2.6601562 14.679688 L 3.6074219 15.15625 C 3.676862 15.342581 3.7523738 15.525878 3.8339844 15.707031 L 3.5019531 16.707031 C 3.1409863 17.78843 3.4265384 18.988773 4.2402344 19.791016 C 5.0430601 20.582562 6.2259945 20.854116 7.2929688 20.498047 L 8.2929688 20.166016 C 8.4752932 20.249165 8.6601879 20.325429 8.8476562 20.396484 L 9.3183594 21.335938 C 9.827972 22.357733 10.879474 23.005051 12.023438 22.996094 C 13.150654 22.988535 14.17952 22.342766 14.681641 21.335938 L 15.152344 20.394531 C 15.34095 20.32461 15.52745 20.248787 15.710938 20.166016 L 16.707031 20.498047 C 17.774008 20.854078 18.956941 20.582713 19.759766 19.791016 C 20.573945 18.988282 20.859993 17.78693 20.498047 16.705078 L 20.166016 15.705078 C 20.248999 15.523283 20.325777 15.339204 20.396484 15.152344 L 21.337891 14.679688 C 22.344553 14.177653 22.989794 13.149409 22.998047 12.021484 C 23.006437 10.877913 22.358575 9.8274617 21.337891 9.3183594 L 20.392578 8.8457031 C 20.323076 8.6582386 20.24785 8.4734534 20.166016 8.2910156 L 20.498047 7.2929688 L 20.498047 7.2910156 C 20.853901 6.2250755 20.583022 5.043195 19.792969 4.2402344 C 18.990866 3.4249903 17.789458 3.1387906 16.707031 3.5 L 15.705078 3.8339844 C 15.523268 3.7512127 15.339253 3.6741928 15.152344 3.6035156 L 14.681641 2.6621094 C 14.179525 1.6553188 13.150707 1.0107594 12.023438 1.0019531 z M 12.007812 3.0019531 C 12.383913 3.0048634 12.723716 3.2181461 12.892578 3.5566406 L 13.527344 4.8261719 A 1.0001 1.0001 0 0 0 14.117188 5.3320312 C 14.493957 5.4522202 14.85985 5.6030208 15.210938 5.7851562 A 1.0001 1.0001 0 0 0 15.986328 5.8476562 L 17.337891 5.3984375 A 1.0001 1.0001 0 0 0 17.339844 5.3984375 C 17.704058 5.2767367 18.099687 5.371964 18.367188 5.6425781 C 18.630662 5.9105466 18.719636 6.3014035 18.599609 6.6601562 A 1.0001 1.0001 0 0 0 18.599609 6.6621094 L 18.152344 8.0078125 A 1.0001 1.0001 0 0 0 18.210938 8.7773438 C 18.390843 9.1292178 18.540142 9.4959256 18.658203 9.8730469 A 1.0001 1.0001 0 0 0 19.166016 10.46875 L 20.443359 11.107422 C 20.7869 11.278634 21.000845 11.624959 20.998047 12.005859 C 20.9953 12.381166 20.782078 12.721718 20.443359 12.890625 A 1.0001 1.0001 0 0 0 20.441406 12.890625 L 19.171875 13.527344 A 1.0001 1.0001 0 0 0 18.667969 14.117188 C 18.547058 14.494006 18.395635 14.859895 18.212891 15.210938 A 1.0001 1.0001 0 0 0 18.150391 15.988281 L 18.599609 17.337891 C 18.721397 17.701859 18.628939 18.09753 18.357422 18.365234 C 18.089839 18.629045 17.698751 18.71942 17.339844 18.599609 A 1.0001 1.0001 0 0 0 17.337891 18.599609 L 15.992188 18.152344 A 1.0001 1.0001 0 0 0 15.220703 18.210938 C 14.868349 18.391599 14.502775 18.54163 14.125 18.660156 A 1.0001 1.0001 0 0 0 13.529297 19.167969 L 12.892578 20.441406 C 12.723724 20.780052 12.383967 20.993146 12.007812 20.996094 C 11.625914 20.99908 11.278859 20.785192 11.107422 20.441406 L 10.472656 19.173828 A 1.0001 1.0001 0 0 0 9.8828125 18.667969 C 9.5054002 18.547024 9.1386886 18.39582 8.7871094 18.212891 A 1.0001 1.0001 0 0 0 8.0097656 18.150391 L 6.6601562 18.599609 C 6.3012485 18.71942 5.9101581 18.629801 5.6425781 18.365234 C 5.3710493 18.097644 5.2786067 17.701897 5.4003906 17.337891 A 1.0001 1.0001 0 0 0 5.4003906 17.335938 L 5.8476562 15.990234 A 1.0001 1.0001 0 0 0 5.7871094 15.21875 C 5.606705 14.867632 5.4565935 14.501592 5.3378906 14.125 A 1.0001 1.0001 0 0 0 4.8339844 13.53125 L 3.5585938 12.890625 A 1.0001 1.0001 0 0 0 3.5566406 12.890625 C 3.2179213 12.72168 3.0047004 12.381355 3.0019531 12.005859 C 2.9991657 11.624959 3.21311 11.278748 3.5566406 11.107422 L 4.8261719 10.472656 A 1.0001 1.0001 0 0 0 5.3320312 9.8828125 C 5.4529383 9.5059936 5.6043651 9.140105 5.7871094 8.7890625 A 1.0001 1.0001 0 0 0 5.8496094 8.0136719 L 5.4003906 6.6621094 A 1.0001 1.0001 0 0 0 5.4003906 6.6601562 C 5.2803642 6.3014791 5.3693227 5.9103577 5.6328125 5.6425781 C 5.9003123 5.3708301 6.2959417 5.2771147 6.6601562 5.3984375 L 8.0078125 5.8476562 A 1.0001 1.0001 0 0 0 8.7792969 5.7890625 C 9.1306077 5.609157 9.4964933 5.4598693 9.8730469 5.3417969 A 1.0001 1.0001 0 0 0 10.46875 4.8339844 L 11.107422 3.5566406 C 11.278857 3.2127036 11.625914 2.9989673 12.007812 3.0019531 z M 12.003906 7 C 9.2543332 7 6.9980556 9.2484784 6.9980469 11.998047 C 6.9980299 14.747615 9.2543151 17.001953 12.003906 17.001953 C 14.753498 17.001953 17.000017 14.747615 17 11.998047 C 16.999991 9.2484784 14.75348 7 12.003906 7 z M 12.003906 9 C 13.672602 9 14.999995 10.329348 15 11.998047 C 15.000011 13.666746 13.672613 15.001953 12.003906 15.001953 C 10.3352 15.001953 8.9980363 13.666746 8.9980469 11.998047 C 8.9980522 10.329348 10.335211 9 12.003906 9 z "
      transform="scale(.26458)"
    />
  </StyledSvg>
);
