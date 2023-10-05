import { Card, Typography, Space, Tag } from "antd";
import React from "react";

const { Text } = Typography;

export default function HotDishes() {
  return (
    <Card>
      <header>
        <Text>热销菜品</Text>
        <div className="mt-2">
          <Space size={[0, 8]} wrap>
            <Tag color="#108ee9">肉丁炒饭</Tag>
            <Tag color="#108ee9">手撕鸭</Tag>
            <Tag color="#108ee9">炒青菜</Tag>
          </Space>
        </div>
      </header>
    </Card>
  );
}
