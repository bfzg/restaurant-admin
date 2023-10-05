import React from "react";
import { AntDesignOutlined } from "@ant-design/icons";
import { Card, Avatar, Typography } from "antd";

const { Text, Title } = Typography;

export default function TopInfo() {
  return (
    <Card>
      <div className="flex justify-between">
        <div className="flex items-center ">
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 75, xxl: 85 }}
            icon={<AntDesignOutlined />}
          />
          <div className="mx-3 leading-8">
            <Title style={{ margin: 0, padding: 0 }} level={5}>
              欢迎您，祝您开心每一天
            </Title>
            <Text type="secondary">
              距离您第一次登录已经过去了955 天，祝您工作愉快
            </Text>
          </div>
        </div>
        <div className="grid grid-cols-3 divide-x">
          <div className="flex flex-col text-center text-xl">
            <Text type="secondary">当日销售额</Text>
            <Title level={4}>100 $</Title>
          </div>
          <div
            className="flex flex-col text-center text-xl "
            style={{
              borderLeft: "1px solid #eee",
              borderRight: "1px solid #eee",
              padding: "0 30px",
            }}
          >
            <Text type="secondary">当日订单数</Text>
            <Title level={4}>100 $</Title>
          </div>
          <div className="flex flex-col text-center text-xl">
            <Text type="secondary">总销售额</Text>
            <Title level={4}>100 $</Title>
          </div>
        </div>
      </div>
    </Card>
  );
}
