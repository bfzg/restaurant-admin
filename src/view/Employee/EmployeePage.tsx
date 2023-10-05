import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Table, Space } from "antd";
import {useTranslation} from "react-i18next";
import type { ColumnsType } from "antd/es/table";
import { getEmployeeList } from "../../api/employee.api.ts";
import EmployeeForm from "./components/EmployeeForm.tsx";

interface ColumnType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  dataIndex:any;
  id:number
}

interface DataType {
    result:[];
    total:number;
}




export default function EmployeePage() {   //员工管理组件

  const {t} = useTranslation();


  const columns: ColumnsType<ColumnType> = [
    {
      title: t('tableName'),
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title:"ID",
      width:100,
      dataIndex:"id",
      key:"id"
    },
    { title: t('tableSex'), dataIndex: "sex", key: "sex",width: 100, },
    { title: t('tablePhone'), dataIndex: "phone", key: "phone",width: 180,},
    {
      title: t('tableIDCard'),
      dataIndex: "id_number",
      key: "id_number",
    },
    { title: t('createTime'), dataIndex: "create_time", key: "3" },
    { title: t('updateTime'), dataIndex: "update_time", key: "4" },
    {
      title: t('tableOperate'),
      key: "operation",
      fixed: "right",
      width:150,
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>editEvent(record)}>{t('tableEdit')}</a>
          <a className="text-red-400">{t('tableDelete')}</a>
        </Space>
      ),
    },
  ];

  //获取员工列表
  const [EmployeeList, setEmployeeList]= useState<DataType>({result:[],total:0});
  useEffect(() => {
    let ignore = false;
    async function getDataList() {
      const { data: res } = await getEmployeeList();
      if (!ignore) {
        setEmployeeList(res.data);
        console.log(res.data);
        
      }
    }
    getDataList();

    return () => {
      ignore = true;
    };
  }, []);

  //新增员工
  const [openForm,setOpenForm] = useState(false);
  //新增 编辑对话框显示隐藏
  const showModal = () =>{
    setOpenForm(true)
  }

  //编辑表单
  function editEvent(data:any) {
    console.log(data);
  }

  //关闭表单
  const handleCloseModal = () =>{
    setOpenForm(false)
  }

  //保存表单
  const handleSaveForm = (values:any) =>{
    console.log('保存的数据',values);
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <Breadcrumb style={{ margin: "16px 0" }} items={[{title:'home'},{title:'Emloyess'}]}/>
        <Button type="primary" onClick={showModal}>新增员工</Button>
      </div>
      <Table rowKey={(record) =>record.id} columns={columns} dataSource={EmployeeList.result} scroll={{ x: 1300 }} />
      <EmployeeForm onSave={handleSaveForm} onCancel={handleCloseModal} open={openForm}></EmployeeForm>
    </div>
  );
}
