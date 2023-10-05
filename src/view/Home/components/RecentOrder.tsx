import React from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Card, Typography, Col, Row, Badge } from "antd";

const { Text, Link, Title } = Typography;

export default function RecentOrder() {
  return (
    <Card>
      <header className="flex justify-between">
        <Text strong>最近订单</Text>
        <Link>查看更多</Link>
      </header>
      <Row gutter={[16, 24]}>
        <Col span={8}>
          <Card bordered={false}>
            <div className="flex items-center">
              <Badge
                count={<ClockCircleOutlined style={{ color: "#0054fe" }} />}
              />
              <Link strong className="text-sm ml-2">
                张先生 牛肉面
              </Link>
            </div>
            <div className="my-3 leading-5">
                <Text type="secondary">不要香菜 微辣，多加一点面</Text><br/>
                <Text type="secondary">地址: 繁华大道 安徽新闻出版职业技术学院 男生寝室</Text>
            </div>
            <div className="flex justify-between">
                <Link>查看详情</Link>
                <Text type="secondary">5小时前</Text>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>
            <Text strong className="text-sm">
              张先生
            </Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>Card content</Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>Card content</Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>Card content</Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>Card content</Card>
        </Col>
      </Row>
    </Card>
  );
}
