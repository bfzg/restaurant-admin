import React from "react";
import {Form, Card, Input, Button, Select } from "antd";

export default function Quire() {


    //排序选择器发生变动触发
    const handleChange = (value: any) => {
        console.log(`selected ${value}`);
    }

    //提交表单数据
    const onFinish = (values: any) => {
      console.log('提交的数据',values);
      
    }

    //提交表单数据失败，并且验证不通过
    const onFinishFailed = (errorInfo: any) => {
      console.log('提交数据!',errorInfo);

    }

  return (
    <Card className="w-full mb-3 h-20">
      <Form
        name="quire"
        layout="inline"
        className="flex justify-between items-center"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
          order: "1", // 设置默认值为"升序"
        }}
      >
        <Form.Item label="搜索" name="quire"  style={{ flex: "1", marginRight: "10px" }}>
          <Input placeholder="输入点什么...." />
        </Form.Item>
        <Form.Item label="排序" name="order" style={{ flex: "1", marginRight: "10px" }}>
          <Select
            defaultValue="升序"
            onChange={handleChange}
            options={[
              { value: "1", label: "升序" },
              { value: "0", label: "降序" },
            ]}
          />
        </Form.Item>
        <Form.Item>
          <Button  htmlType="submit" className="w-24" type="primary">
            搜索
          </Button>
        </Form.Item>
        <Form.Item>
          <Button className="w-24">重置</Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
