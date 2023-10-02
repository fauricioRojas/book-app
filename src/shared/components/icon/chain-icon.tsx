import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const ChainIcon: FC<CommonIconProps> = ({
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
    viewBox="0 0 64 64"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      fill={color}
      d="m53.08273,39.26189c8.99485-9.92628-4.41314-23.78841-14.66491-15.12512-3.10637,2.77416-4.34656,7.43631-2.88279,11.35137.47552,1.3811,1.27326,2.64342,2.26225,3.72372.82084.86085.82084,2.17223,0,3.03308-1.85184,1.96194-2.87289,4.52452-2.87289,7.22726-.02709,9.44057,11.67337,14.1484,18.16838,7.22716,3.86173-3.93765,3.85819-10.59264-.01016-14.50445-.79073-.82084-.79073-2.11218.00011-2.93301Zm-7.61773,14.39452c-5.52826-.18243-5.52695-8.18683.00009-8.36843,5.52825.18241,5.52694,8.18685-.00009,8.36843Zm0-17.48761c-5.52826-.18243-5.52695-8.18683.00009-8.36843,5.52825.18241,5.52694,8.18685-.00009,8.36843Zm.00007,15.48559c-2.8763-.07777-2.87688-4.28619-.00007-4.36439,2.87632.07775,2.8769,4.28621.00007,4.36439Zm0-17.48761c-2.8763-.07777-2.87688-4.28619-.00007-4.36439,2.87632.07775,2.8769,4.28621.00007,4.36439ZM29.03846,14.3768C28.54788,2.22813,11.78778-.01265,8.32756,11.72428c-.9853,3.44477.01995,7.5001,2.59269,10.07998.76068.80087.72066,2.10217-.10017,2.96302-1.84182,1.962-2.86287,4.52458-2.86287,7.2173.26195,11.87457,16.27286,14.53559,20.46063,3.50341,1.09228-2.90251.71539-6.38123-.94096-9.00896-.38037-.63064-.84086-1.22127-1.36134-1.77181-.79084-.84081-.8008-2.09208,0-2.92293,1.9119-2.01204,2.95299-4.6447,2.92293-7.4075Zm-10.5406,21.792c-5.52834-.18241-5.52704-8.18685.00009-8.36843,5.52816.18243,5.52686,8.18683-.00009,8.36843Zm0-17.49763c-5.53456-.17815-5.52304-8.18359.00009-8.35847,5.52417.17573,5.53308,8.18113-.00009,8.35847Zm.00007,15.49561c-2.87639-.07775-2.87696-4.28621-.00007-4.36439,2.87624.07777,2.87681,4.28619.00007,4.36439Zm0-17.49763c-2.88124-.07362-2.87291-4.27619-.00007-4.35443,2.87218.07783,2.88166,4.28037.00007,4.35443Zm15.71573,20.82099s-4.47448,0-4.47452,0c1.731-3.41288,1.71957-7.58222.03003-11.0111h4.43447c-.93888,1.92354-1.37048,4.05436-1.27125,6.17621.11738,1.79345.53278,3.31565,1.28126,4.83489Z"
    />
  </StyledSvg>
);
