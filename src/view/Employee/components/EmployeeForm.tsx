import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Form,
  Input,
  Select,
  Modal,
} from "antd";

interface propsType {
  open: boolean;
  title?: string;
  onCancel: any;
  onSave: any;
  initialValues?: any;
}

/**
 * 新建 编辑员工对话框
 * @param open 控制对话框的显示与隐藏
 * @param title 对话框标题
 * @onCancel 用户取消操作时的回调函数
 * @onSave 当用户保存表单时的回调函数，将表单数据作为参数传递
 * @initialValues 用于编辑表单时的初始化
 * @returns
 */
export default function EmployeeForm({
  open,
  title,
  onCancel,
  onSave,
  initialValues,
}: propsType) {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    form.resetFields();
    setIsEditing(!initialValues);
  }, [form, initialValues]);

  //确定按钮
  const submitEvent = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onSave(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  //TODO 实现基本 form 表单 下一步实现 数据校验 确保数据提交 提交后清除 编辑表单

  return (
    <Modal
      title={title ? title : "新建"}
      open={open}
      onOk={submitEvent}
      onCancel={onCancel}
      okText={t("sure")}
      cancelText={t("cancel")}
    >
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={initialValues}
        style={{ maxWidth: 600 }}
        form={form}
        name="employeeForm"
      >
        <Form.Item label={t("tableName")} name="name">
          <Input />
        </Form.Item>
        <Form.Item label={t("tableSex")} name="sex">
          <Select>
            <Select.Option value="男">{t("male")}</Select.Option>
            <Select.Option value="女">{t("female")}</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label={t("tablePhone")} name="phone">
          <Input />
        </Form.Item>
        <Form.Item label={t("tableIDCard")} name="id_number">
          <Input />
        </Form.Item>
        <Form.Item label={t("username")} name="username">
          <Input />
        </Form.Item>
        <Form.Item label={t("password")} name="password">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
