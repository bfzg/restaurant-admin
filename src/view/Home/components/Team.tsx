import React from "react";
import { Card, Row, Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function Team() {
  return (
    <Card>
      <header>团队</header>
      <Row className="mt-3" gutter={[16, 24]}>
        <Col className="gutter-row" span={6}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Col>
      </Row>
    </Card>
  );
}
