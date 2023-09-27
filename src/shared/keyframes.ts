import { keyframes } from "styled-components";

export const slideInUp = keyframes`
  from { transform: translate3d(0, 100%, 0); }
  to { transform: translate3d(0, 0, 0); }
`;

export const slideInRight = keyframes`
  from { transform: translate3d(100%, 0, 0); }
  to { transform: translate3d(0, 0, 0); }
`;

export const slideOutDown = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(0, 100%, 0); }
`;

export const slideOutRight = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(100%, 0, 0); }
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;
