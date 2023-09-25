import { FC } from 'react';

import { type CommonIconProps, StyledSvg } from '.';

export const HamsterIcon: FC<CommonIconProps> = ({
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
    transform="scale(1.25)"
    {...props}
  >
    <path
      d="M63.545,26.34231a1.65126,1.65126,0,0,0-.17824-.57153,1.9433,1.9433,0,0,0-.35358-.48629.89245.89245,0,0,0-.07265-.07556c-.66162-.61125-1.32809-1.2225-2.03718-1.77563a13.8065,13.8065,0,0,1-2.71914-2.38107,15.0983,15.0983,0,0,0-9.68895-5.58649c-1.08591-.20634-2.18733-.33518-3.27809-.49889,0-.2722-.00678-.51244.001-.75171.03972-1.23025-1.01423-2.99328-2.44694-2.67071a1.273,1.273,0,0,0-.9047,1.14931l-.003-.00333-.00194.01646.00283.00354-.00089.00712.00775.00872.00679.00872a4.91426,4.91426,0,0,1,.449.634l.03468.05851q.04727.08089.09262.16486c.038.0708.07562.14227.1116.2161l.01818.03644A6.52164,6.52164,0,0,1,43.24,16.39956c.00193.04359.00387.08719.00484.13078.00468.044.0093.08714.01311.13109l.00045.03165a6.79447,6.79447,0,0,1-.53666,2.63971c-.04747.11431-.0959.22183-.14821.32839-.02228.03778-.0465.07556-.07072.11334-.02034.03971-.04165.07846-.063.11721a4.04656,4.04656,0,0,1-1.856,1.7766,2.88377,2.88377,0,0,1-.44076.16371c-.02035.00581-.03972.01065-.06006.0155-.01744.00871-.03487.01744-.05328.02518a3.09669,3.09669,0,0,1-1.55283-.02422l-.0155-.00387.01066-.00968.01065-.00969-.01355-.00388-.01454-.00388a2.94374,2.94374,0,0,1-.42719-.15983,3.79941,3.79941,0,0,1-1.0307-.6994c-.03294-.03-.06587-.062-.09784-.09493-.0339-.03391-.06684-.06781-.09881-.10269l-.00387-.00387c-.03391-.031-.06587-.063-.09881-.0959l-.00678-.00775c-.04844-.04941-.09493-.10075-.1395-.15306a5.094,5.094,0,0,1-.66743-1.16728c-.04262-.10365-.08234-.2073-.12012-.311-.02228-.07168-.04359-.14433-.063-.218l-.00969.00872c-.86214.7333-1.68264,1.4298-2.49925,2.1292a4.60619,4.60619,0,0,1-2.9371,1.20216c-.96677.02325-1.93741.02034-2.9032-.02615a22.67347,22.67347,0,0,0-7.5704.70327c-5.33948,1.56348-8.89267,5.10506-11.09066,10.09a17.754,17.754,0,0,0-1.36974,9.27047,16.46879,16.46879,0,0,0,3.53867,8.729,1.54488,1.54488,0,0,1,.186.27995.7415.7415,0,0,1,.11431.435c-1.63613-.11044-3.28486-.13368-4.90647-.35454a5.2435,5.2435,0,0,1-4.60133-3.81282A6.103,6.103,0,0,1,2.5207,42.2387a15.06832,15.06832,0,0,1,4.053-4.04627l.0126-.00969a.36282.36282,0,0,0-.43011-.58412c-.1424.09784-.28189.19664-.42138.29642A14.89745,14.89745,0,0,0,1.273,42.725,6.30811,6.30811,0,0,0,.6821,47.50552a6.64493,6.64493,0,0,0,2.477,3.55223,9.464,9.464,0,0,0,5.11765,1.37071c1.15178.05909,2.30454.032,3.45729.03585q3.21125.01161,6.42249.01549,3.20979.00436,6.42152.00484,3.21125,0,6.42249-.001,3.002-.00145,6.004-.00194h.2354a.56617.56617,0,0,0,.44851-.55313.55964.55964,0,0,0-.0494-.23055.56956.56956,0,0,0-.26736-.278,2.97975,2.97975,0,0,0-.59382-.17533c-1.06654-.15112-2.14664-.21118-3.22093-.31386-.27511-.02616-.54732-.07749-.82049-.11915a.08936.08936,0,0,1,0-.1763c.03584-.00581.0775-.0126.10656-.01841.05328-.00969.10655-.02034.15887-.031l.02324-.00484a8.27181,8.27181,0,0,0,4.426-2.81117,13.96583,13.96583,0,0,1-3.47958-11.51689v-.0029a13.807,13.807,0,0,1,.54829-2.27645c.04262-.08137.08912-.16081.13755-.23927l.05232.0184.48241.16759.69746.24217a12.54651,12.54651,0,0,0-.72265,4.209c0,.15693.00291.31289.00872.46885.07556.63256.15208,1.26513.21408,1.89865a12.57413,12.57413,0,0,0,2.9807,6.02533c.86214,1.516,2.44984,4.13538,2.64842,4.517A1.99669,1.99669,0,0,0,42.81,52.46334c2.22607.05812,4.45505.01452,6.68306.02518.27318.001.35939-.1085.35454-.29352a.803.803,0,0,0-.01259-.1298,1.28764,1.28764,0,0,0-1.16728-1.00842,4.58525,4.58525,0,0,0-.46207-.07362,8.84924,8.84924,0,0,0-1.12176-.03293,1.39754,1.39754,0,0,1-1.23994-.51923,10.4869,10.4869,0,0,1-1.25349-1.87347,6.93827,6.93827,0,0,1-.14434-6.06988,16.46985,16.46985,0,0,0,1.43755-5.34141,5.43575,5.43575,0,0,1,1.52086-3.51833c.8699-.83308,1.81729-1.58673,2.7424-2.36072.36519-.30515.76333-.57251,1.14693-.85731l-.01549.01551.03-.01454c.02712.00291.08912.00872.18211.01647a45.38093,45.38093,0,0,0,6.19872.13368,9.19951,9.19951,0,0,0,1.52571-.2228,2.98682,2.98682,0,0,0,.51825-.17727l.031-.02325c.05037-.03487.09978-.07168.14724-.10946,0,0,2.28807-1.87831,3.21318-2.74918l.00484-.00387.11916-.11334.00581-.00678a1.142,1.142,0,0,0,.29254-.78465ZM52.98905,23.8266a1.44628,1.44628,0,1,1,1.44627-1.44627A1.44635,1.44635,0,0,1,52.98905,23.8266Z"
      fill={color}
    />
    <path
      d="M38.37327,20.91106a2.25785,2.25785,0,0,0,1.86,0,3.43984,3.43984,0,0,0,1.70483-1.90135,5.66632,5.66632,0,0,0-.11019-4.7844A3.05547,3.05547,0,0,0,39.30326,12.256a3.05547,3.05547,0,0,0-2.52465,1.96933,5.66635,5.66635,0,0,0-.1102,4.7844A3.4399,3.4399,0,0,0,38.37327,20.91106Z"
      fill={color}
    />
  </StyledSvg>
);
