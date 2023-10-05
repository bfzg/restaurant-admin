import React, { useState } from "react";
import { useRequest } from 'ahooks';
import {toast} from "react-toastify";
import { Button, Upload, Form, Input, Card, Select, message } from "antd";
import type { UploadProps } from 'antd';
import { InboxOutlined } from "@ant-design/icons";
import {postSaveDish,getCategoryList} from '../../api/dish.api'
import {getFlavorList} from '@/api/dishFlavor.api'

export default function DishFormPage() {
  const [form] = Form.useForm();
  //上传成功后保存的图片地址
  const [imgUrl,setImgUrl] = useState<string[]>([])

   //获取口味列表
  const {data:dishFlavorDataList,error:getDishFlavorError,loading:getDishFlvaorLoading,} = useRequest(getFlavorList)
  if(getDishFlavorError) toast.error('获取口味列表失败!')
  //获取分类列表
  const {data:categoryDataList,error:getCategoryError,loading:getCategoryLoading} = useRequest(getCategoryList)
  if(getCategoryError) toast.error('获取分类列表失败!')

  //上传参数事件
  const uploadProps:UploadProps={
    name:"file",
    multiple:true,
    action:import.meta.env.VITE_APP_UPLOAD_URL,
    onChange(info){ //当上传文件发生改变时触发
      const {status} = info.file;
      if(status !== 'uploading'){
        console.log("🚀 ~ ",info.file,info.fileList)
      }
      if(status === 'done'){
        console.log("🚀 ~ 上传成功!", info)
        info.fileList.forEach(item=>{
          setImgUrl([...imgUrl,item.response.data])
        })
        message.success(`${info.file.name} 上传成功!.`)
      }else if(status === 'error'){
        message.error(`${info.file.name} file uploaded failed`)
      }
    },
    onDrop(e) { //当文件被拖拽到上传区域执行该事件
      console.log("🚀 ~ dropped files:", e)
    },
  }


  //确定添加菜品
  const onFinish = async (values: any) => {
    values.image = imgUrl
    console.log("Success:", values);
    let {data:res} = await postSaveDish(values)
    if(res.code != 200) return toast.error(`添加失败 ${res.data}`)
    onReset()
    toast.success('添加成功!')
  };

  //添加菜品失败
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  //重置表单
  const onReset = () => {
    form.resetFields();
  };

  //上传
  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  //TODO 新建菜品表单

  return (
    <Card className="flex justify-center items-center w-full">
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="xl:w-[60rem] lg:w-[48rem] md:w-[25rem] sm:w-40 "
      >
        <Form.Item<Model.DishType>
          label="菜品名称"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<Model.DishType>
          label="菜品价格"
          name="price"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<Model.DishType> label="菜品分类" name="category_id">
        <Select
            placeholder="请选择分类"
            options={categoryDataList?.data.data.result}
            fieldNames={{label:'name',value:'id'}}
          />
        </Form.Item>
        <Form.Item<Model.DishType> label="菜品状态" name="status">
          <Select>
            <Select.Option value="1">起售</Select.Option>
            <Select.Option value="0">禁售</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="菜品描述"
          hasFeedback
          name="description"
        >
          <Input.TextArea allowClear showCount />
        </Form.Item>
        <Form.Item<Model.DishType>
          label="口味名称"
          name="flavors_id"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Select
            placeholder="请选择口味"
            options={dishFlavorDataList?.data.data.result}
            fieldNames={{label:'flavors_name',value:'id'}}
          />
        </Form.Item>
        <Form.Item label="上传">
          <Form.Item
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger {...uploadProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                点击选择上传文件，或者将文件直接拖入
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button className="ml-3" htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
