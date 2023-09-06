import { Col, Row, Skeleton } from "@/shared/components";

const Loading = () => (
  <>
    <Skeleton height={14} width="full" mb={8} />
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
          <Skeleton height={14} width="full" />
        </Col>
      ))}
    </Row>
  </>
);

export default Loading;
