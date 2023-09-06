import { Skeleton } from "@/shared/components";

const Loading = () => (
  <>
    <Skeleton height="xl" width="full" widthMd="half" mb={8} />
    <Skeleton height="lg" width="full" widthMd="quarter" mb={2} />
    <Skeleton height="lg" width="full" widthMd="quarter" mb={4} />
    <Skeleton height="lg" width="full" widthMd="quarter" mb={2} />
    <Skeleton height="lg" width="full" widthMd="quarter" mb={4} />
    <Skeleton height="lg" width="full" widthMd="quarter" mb={2} />
    <Skeleton height="lg" width="full" widthMd="quarter" mb={4} />
    <Skeleton height="lg" width="full" widthMd="quarter" mb={2} />
    <Skeleton height="xl" width="full" widthMd="quarter" />
  </>
);

export default Loading;
