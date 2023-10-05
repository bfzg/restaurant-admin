import React from "react";
import {Modal, Button, Upload, Form, Input, Card, Select } from "antd";
import type {FieldType} from '../../../types/dish.type'

interface propsType{
    open:boolean,
    title?:string,
    onCancel:any,
    onSave:any,
    initialValues?:any,
}


/**
 * 编辑菜品
 * @param open 控制编辑对话框的显示于隐藏
 * @param title 对话框标题
 * @onCancel 取消操作回调
 * @onSave 保存回调 将表单数据作为参数传递
 * @initialValues 表单初始化
 * @returns 
 */

export default function DishForm({open,title="修改",onCancel,onSave,initialValues}:propsType) {
  const [form] = Form.useForm();

  const submitEvent = () => {
    form.validateFields().then((values) => {
        form.resetFields();
        onSave(values);
    })
  }

  return (
    <Modal title={title} open={open} onOk={submitEvent} onCancel={onCancel}>
      <Form
       labelCol={{ span: 4 }}
       wrapperCol={{ span: 14 }}
       layout="horizontal"
       initialValues={initialValues}
       style={{ maxWidth: 600 }}
       form={form}
       name="dish"
      >
        <Form.Item<FieldType>
          label="菜品名称"
          name="dishName"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
