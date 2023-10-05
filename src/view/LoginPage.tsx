import { useContext } from "react";
import { Image, Button, Checkbox, Form, Input, Typography, Card } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login } from "../api/api.api.ts";
import { LoginType } from "../types/api.type.ts";
import { useTranslation } from "react-i18next";
import {useStore} from "@/store/index.store.ts"
import { ReactComponent as Logo } from "../assets/svg/logbg.svg";


const { Title } = Typography;
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

function LoginPage() {  //登录页面
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {userLogin} = useStore()

  //登录失败
  const onFinishFailed = (errorInfo: any) => {
    toast.error(errorInfo.errorFields[0].errors[0]);
  };

  //登录
  const onFinish = async (values: any) => {
    let data: LoginType = {
      username: values.username,
      password: values.password,
    };
    let { data: res } = await login(data);
    if (res.code !== 200) return toast.error(res.data);
    userLogin.SETTOKEN(res.data)
    toast.success("登录成功!");
    return navigate("/home/index");
  };

  return (
    <div className="h-screen bg-gray-100 relative">
      <div className="absolute top-1/2 -translate-y-1/2">
        <Logo  className="lg:w-100 md:w-2/3 xl:block lg:block md:block hidden"/>
      </div>
      <div>
        <Card
          bodyStyle={{ boxSizing: "border-box" }}
          hoverable={true}
          className="lg:w-1/2 md:w-1/2 sm:w-3/4 lg:h-2/3 md:h-1/2 sm:h-2/4 absolute right-10 top-1/2 -translate-y-1/2"
        >
          <div>
            <div className="mb-10">
              <Title level={2} className="text-center">
                欢迎登录
              </Title>
            </div>
            <Form
              name="basic"
              labelAlign="left"
              labelCol={{ span: 4 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label={t("username")}
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label={t("password")}
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                className="lg:mt-12 sm:mt-2"
              >
                <Input.Password />
              </Form.Item>

              <Form.Item<FieldType> name="remember"  className="lg:mt-12 sm:mt-2" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item className="lg:mt-12 sm:mt-0">
                <Button type="primary" htmlType="submit" className="login-form-button w-full">{t("login")}</Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginPage;
