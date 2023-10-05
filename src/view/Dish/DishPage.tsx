import { useState, useEffect } from "react";
import { Table, Space, Tag, Tooltip, Typography, Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import {toast} from "react-toastify";
import type { ColumnsType } from "antd/es/table";
import { useRequest } from "ahooks";
import { getDishList,deleteDish } from "../../api/dish.api";
import { specificDateTime } from "@/utils/time.utils";
import Quire from "../../components/Quire/Quire";
import DishForm from "./components/DishForm";

interface DataType {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  status: number;
  category_id: number;
  create_user: number;
}

const { confirm } = Modal;

export default function DishPage() {
  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      width: 120,
    },
    {
      title: "菜品名称",
      dataIndex: "name",
      ellipsis: true,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "销售状态",
      dataIndex: "status",
      width: 120,
      render: (status) =>
        status === 1 ? (
          <Tag color="#2db7f5">起售</Tag>
        ) : (
          <Tag color="#f50">禁售</Tag>
        ),
    },
    {
      title: "价格",
      ellipsis: true,
      width: 120,
      dataIndex: "price",
    },
    {
      title: "描述",
      dataIndex: "description",
      width: 300,
      ellipsis: true,
      render: (text) => <Tooltip>{text}</Tooltip>,
    },
    {
      title: "图片",
      dataIndex: "image",
      width: 300,
      ellipsis: true,
      render: (image) =>
        image ? <Tooltip>{image}</Tooltip> : <Tag>暂无图片</Tag>,
    },
    {
      title: "更新时间",
      width: 200,
      dataIndex: "update_time",
      render: (time) => (
        <Typography.Text>{specificDateTime(time)}</Typography.Text>
      ),
    },
    {
      title: "创建时间",
      dataIndex: "create_time",
      width: 200,
      render: (time) => (
        <Typography.Text>{specificDateTime(time)}</Typography.Text>
      ),
    },
    {
      title: "操作",
      width: 150,
      fixed: "right",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={showModal}>编辑</a>
          <a className="text-red-500" onClick={() => handleDelete(record)}>
            删除
          </a>
        </Space>
      ),
    },
  ];

  const [openDishForm, setOpenDishForm] = useState(false);
  const [dishList, setDisnList] = useState([]);

  //获取 菜品列表数据
  //获取菜品列表
  let paramsData = {
    page: 0,
    pageSize: 10,
  };
  const getDishDataList = () => {
    return getDishList(paramsData)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw error;
      });
  };

  const { data, error, loading } = useRequest(getDishDataList);

  useEffect(() => {
    console.log(data);
    setDisnList(data?.data.result || []);
  }, [data]);

  //新增 编辑对话框编辑于隐藏
  const showModal = () => {
    setOpenDishForm(true);
  };

  //保存 菜品表单信息
  const handleSaveForm = (values: any) => {
    console.log("促存的数据", values);
  };

  //关闭 菜品表单
  const handleCloseModal = () => {
    setOpenDishForm(false);
  };

  //删除菜品
  const handleDelete = (row: any) => {
    console.log(row);
    
    confirm({
      title: `你确定删除名为${row.name}的菜品?`,
      icon: <ExclamationCircleFilled />,
      okText:"确认",
      cancelText:"取消",
      onOk() {
        deleteDish(row.id).then(async res=>{
          if(res.data.code != 200) return toast.error(`删除失败! ${res.data.data}`)
          toast.success(`删除成功!`)
          let ret = await getDishDataList()
          setDisnList(ret.data.result)
        }).catch(error => {
          console.log("🚀 ~ file: DishPage.tsx:156 ~ deleteDish ~ error:", error)          
        })
      },
      onCancel() {
        
      },
    });
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <Quire></Quire>
      </div>
      <Table
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={dishList}
        scroll={{ x: 1300 }}
        rowClassName={(record) => (record?.image == "" ? "no-image" : "")}
      ></Table>
      <DishForm
        onSave={handleSaveForm}
        onCancel={handleCloseModal}
        open={openDishForm}
      ></DishForm>
    </div>
  );
}
