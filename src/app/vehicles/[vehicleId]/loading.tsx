import { GridWrap, Skeleton } from "@/shared/components";

const Loading = () => (
  <>
    <Skeleton height={11} width="full" mb={8} />
    <Skeleton height={6} width="full" widthMd="quarter" mb={2} />
    <Skeleton height={5} width="full" widthMd="quarter" mb={4} />
    <Skeleton height={6} width="full" widthMd="quarter" mb={2} />
    <Skeleton height={5} width="full" widthMd="quarter" mb={4} />
    <Skeleton height={6} width="full" widthMd="quarter" mb={2} />
    <Skeleton height={5} width="full" widthMd="quarter" mb={4} />
    <Skeleton height={6} width="full" widthMd="quarter" mb={2} />
    <Skeleton height={5} width="full" widthMd="quarter" mb={4} />
    <Skeleton height={6} width="full" widthMd="quarter" mb={2} />
    <Skeleton height="150px" width="full" widthMd="quarter" mb={4} />
    <Skeleton height={6} width="full" widthMd="quarter" mb={2} />
    <GridWrap
      cols={12}
      sm={6}
      lg={4}
      xl={3}
      gap={4}
    >
      {Array.from(Array(8).keys()).map(index => (
        <Skeleton key={index} height="78px" width="full" />
      ))}
    </GridWrap>
  </>
);

export default Loading;
