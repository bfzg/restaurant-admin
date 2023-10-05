import { useState } from "react";
import {
  UploadOutlined,
  TeamOutlined,
  VideoCameraOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, Avatar } from "antd";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";

const { Sider, Content, Header } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("首页", "/home/index", <TeamOutlined />),
  getItem("菜品管理", "/home/dishes", <VideoCameraOutlined />, [
    getItem("菜品列表", "/home/dishes/list", <VideoCameraOutlined />),
    getItem("新建菜品", "/home/dishes/save", <VideoCameraOutlined />),
  ]),
  {
    key: "/home/orders",
    icon: <UploadOutlined />,
    label: "订单详情",
  },
  {
    key: "/home/employees",
    icon: <TeamOutlined />,
    label: "员工管理",
  },
];

function HomePage() {
  const Navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  //点击菜单跳转事件
  const menuClick = (e: { key: string }) => {
    console.log(e.key);
    Navigate(e.key);
  };

  return (
    <Layout className="h-screen">
      <Header className="flex justify-between items-center bg-white h-12 w-screen">
        <div className="demo-logo h-20 leading-[5rem] text-4xl text-center li text-black text font-bold">LOGO</div>
        <div>
          <Avatar size="large" icon={<UserOutlined />} />
        </div>
      </Header>
      <Layout>
        <Sider
          theme="light"
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          collapsible
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["/home/index"]}
            items={items}
            onClick={menuClick}
            className="custom-menu"
          />
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "12px",
              padding: 10,
              minHeight: 280,
            }}
          >
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default HomePage;
