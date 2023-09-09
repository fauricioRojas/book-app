import { FlexWrap, Skeleton } from "@/shared/components";

const Loading = () => (
  <>
    <Skeleton height={14} width="full" mb={8} />
    <FlexWrap gap={4}>
      <FlexWrap direction="column" basis="50%" gap={2}>    
        <Skeleton height={5} width="full" widthMd="full" mb={2} />
        <Skeleton height={8} width="full" widthMd="full" mb={4} />
      </FlexWrap>
      <FlexWrap direction="column" basis="50%" gap={2}>
        <Skeleton height={5} width="full" widthMd="full" mb={2} />
        <Skeleton height={8} width="full" widthMd="full" mb={4} />
      </FlexWrap>
    </FlexWrap>
    <Skeleton height={5} width="full" widthMd="half" mb={2} />
    <Skeleton height={8} width="full" widthMd="half" mb={4} />
    <Skeleton height={5} width="full" widthMd="half" mb={2} />
    <Skeleton height={8} width="full" widthMd="half" mb={4} />
    <Skeleton height={5} width="full" widthMd="half" mb={2} />
    <Skeleton height="150px" width="full" widthMd="half" />
  </>
);

export default Loading;
