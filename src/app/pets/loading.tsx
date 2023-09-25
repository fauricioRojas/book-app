import { GridWrap, Skeleton } from "@/shared/components";

const Loading = () => (
  <>
    <Skeleton
      height="38px"
      heightSm="43px"
      heightLg={12}
      width="full"
      mb={8}
    />
    <GridWrap
      cols={12}
      sm={6}
      lg={4}
      xl={3}
      gap={4}
    >
      {Array.from(Array(8).keys()).map(index => (
        <Skeleton
          key={index}
          height="77px"
          heightSm="79px"
          width="full"
        />
      ))}
    </GridWrap>
  </>
);

export default Loading;
