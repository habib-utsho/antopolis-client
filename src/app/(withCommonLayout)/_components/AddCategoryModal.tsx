"use client";
import MyInp from "@/components/ui/Form/MyInp";
import { createCategory } from "@/services/category";
import { TCreateCategory } from "@/types/category";
import { Button, Form, message, Modal } from "antd";
import React, { useState } from "react";

const AddCategoryModal = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [isAddCategoryLoading, setIsAddCategoryLoading] = useState(false);

  const handleAddCategory = async (values: TCreateCategory) => {
    setIsAddCategoryLoading(true);
    try {
      const res = await createCategory(values);
      if (res?.success) {
        message.success(res?.message || "Category added successfully");
        setVisible(false);
        setIsAddCategoryLoading(false);
        form.resetFields();
      } else {
        message.error(res?.message || "Failed to add category");
        setIsAddCategoryLoading(false);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      message.error(error?.message || "Failed to add category");
      setIsAddCategoryLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setVisible(true)}
        type="primary"
        className="!bg-transparent !text-white !border !border-white"
      >
        Add Category
      </Button>
      <Modal
        open={visible}
        onCancel={() => setVisible(false)}
        title="Add Category"
        footer={null}
      >
        <Form layout="vertical" onFinish={handleAddCategory} form={form}>
          <MyInp
            type="text"
            name={"name"}
            label="Name"
            placeholder="Enter category name"
            rules={[{ required: true, message: "Category is required" }]}
          />
          <Button
            loading={isAddCategoryLoading}
            type="primary"
            htmlType="submit"
          >
            Add
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default AddCategoryModal;
