import React from "react";
import { Card, Typography, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Text, Link } = Typography;

export default function RecentPayment() {
  return (
    <Card>
      <header className="flex justify-between">
        <Text strong>最近付款</Text>
        <Link>查看更多</Link>
      </header>
      <div className="flex justify-between my-8">
        <div className="flex items-center">
          <Avatar icon={<UserOutlined />} />
          <div className="ml-3">
            <Text>李先生</Text>
            <Text>
              香辣牛肉面 付款<Link>$99</Link>
            </Text>
          </div>
        </div>
        <div>
            <Text type="secondary">5小时前</Text>
        </div>
      </div>
      <div className="flex justify-between my-8">
        <div className="flex items-center">
          <Avatar icon={<UserOutlined />} />
          <div className="ml-3">
            <Text>李先生</Text>
            <Text>
              香辣牛肉面 付款<Link>$99</Link>
            </Text>
          </div>
        </div>
        <div>
            <Text type="secondary">5小时前</Text>
        </div>
      </div>
      <div className="flex justify-between my-8">
        <div className="flex items-center">
          <Avatar icon={<UserOutlined />} />
          <div className="ml-3">
            <Text>李先生</Text>
            <Text>
              香辣牛肉面 付款<Link>$99</Link>
            </Text>
          </div>
        </div>
        <div>
            <Text type="secondary">5小时前</Text>
        </div>
      </div>
      
    </Card>
  );
}
