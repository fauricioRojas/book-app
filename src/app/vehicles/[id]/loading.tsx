import { Col, Row, Skeleton } from "@/shared/components";

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
    <Skeleton height={8} width="full" widthMd="quarter" mb={4} />
    <Skeleton height={8} width="full" widthMd="quarter" mb={2} />
    <Skeleton height={20} width="full" widthMd="quarter" mb={4} />
    <Skeleton height={8} width="full" widthMd="quarter" mb={2} />
    <Row>
      {Array.from(Array(8).keys()).map(index => (
        <Col
          key={index}
          cols={12}
          sm={6}
          lg={4}
          xl={3}
          mb={4}
        >
          <Skeleton height={20} width="full" />
        </Col>
      ))}
    </Row>
  </>
);

export default Loading;
