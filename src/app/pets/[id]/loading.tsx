import { Skeleton } from "@/shared/components";

const Loading = () => (
  <>
    <Skeleton height={14} width="full" widthMd="half" mb={8} />
    <Skeleton height={8} width="full" widthMd="quarter" mb={2} />
    <Skeleton height={8} width="full" widthMd="quarter" mb={4} />
    <Skeleton height={8} width="full" widthMd="quarter" mb={2} />
    <Skeleton height={8} width="full" widthMd="quarter" mb={4} />
    <Skeleton height={8} width="full" widthMd="quarter" mb={2} />
    <Skeleton height={8} width="full" widthMd="quarter" mb={4} />
    <Skeleton height={8} width="full" widthMd="quarter" mb={2} />
    <Skeleton height={20} width="full" widthMd="quarter" />
  </>
);

export default Loading;
