import { FlexWrap, Skeleton } from "@/shared/components";

const Loading = () => (
  <>
    <Skeleton
      height={6}
      heightMd={9}
      width="full"
      mb={8}
    />
    <FlexWrap gap={4} mb={4}>
      <FlexWrap direction="column" basis="50%" gap={2}>    
        <Skeleton height="21.5px" heightSm={6} width="full" widthMd="full" />
        <Skeleton height={5} width="full" widthMd="full" />
      </FlexWrap>
      <FlexWrap direction="column" basis="50%" gap={2}>
        <Skeleton height="21.5px" heightSm={6} width="full" widthMd="full" />
        <Skeleton height={5} width="full" widthMd="full" />
      </FlexWrap>
    </FlexWrap>
    <Skeleton height="21.5px" heightSm={6} width="full" widthMd="half" mb={2} />
    <Skeleton height={5} width="full" widthMd="half" mb={4} />
    <Skeleton height="21.5px" heightSm={6} width="full" widthMd="half" mb={2} />
    <Skeleton height={5} width="full" widthMd="half" mb={4} />
    <Skeleton height="21.5px" heightSm={6} width="full" widthMd="half" mb={2} />
    <Skeleton height="150px" width="full" widthMd="half" />
  </>
);

export default Loading;
