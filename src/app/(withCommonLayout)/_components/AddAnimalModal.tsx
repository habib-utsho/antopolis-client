"use client";
import MyInp from "@/components/ui/Form/MyInp";
import { useGetAllCategory } from "@/hooks/category";
import { createAnimal } from "@/services/animal";
import { TCreateAnimal } from "@/types/animal";
import { TCategory } from "@/types/category";
import { Button, Form, message, Modal } from "antd";
import React, { useState } from "react";

const AddAnimalModal = () => {
  const [visible, setVisible] = useState(false);
  const { data: categories } = useGetAllCategory([
    { name: "limit", value: 50000 },
  ]);
  const [isAddAnimalLoading, setIsAddAnimalLoading] = useState(false);

  const handleAddCategory = async (values: TCreateAnimal) => {
    setIsAddAnimalLoading(true);
    const formData = new FormData();
    if (values.img?.file && values.img?.file?.originFileObj) {
      formData.append("file", values.img?.file?.originFileObj);
      delete values.img;
    }
    formData.append("data", JSON.stringify(values));
    formData.forEach((value, key) => {
      console.log(key, value, "key value");
    });

    try {
      const res = await createAnimal(formData);
      if (res?.success) {
        message.success(res?.message || "Animal added successfully");
        setVisible(false);
        setIsAddAnimalLoading(false);
      } else {
        message.error(res?.message || "Failed to add animal");
        setIsAddAnimalLoading(false);
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      message.error(error?.message || "Failed to add animal");
      setIsAddAnimalLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setVisible(true)}
        type="primary"
        className="!bg-transparent !text-white !border !border-white"
      >
        Add Animal
      </Button>
      <Modal
        open={visible}
        onCancel={() => setVisible(false)}
        title="Add Animal"
        footer={null}
      >
        <Form layout="vertical" onFinish={handleAddCategory}>
          <MyInp
            type="text"
            name={"name"}
            label="Name"
            placeholder="Enter animal name"
            rules={[{ required: true, message: "Animal name is required" }]}
          />
          <MyInp
            type="select"
            name={"category"}
            label="Category"
            placeholder="Select a category"
            rules={[{ required: true, message: "Category is required" }]}
            options={categories?.data?.map((category: TCategory) => ({
              label: category.name,
              value: category._id,
            }))}
          />
          <MyInp
            type="file"
            name={"img"}
            label="Image"
            rules={[{ required: true, message: "Animal avatar is required" }]}
          />

          <Button type="primary" htmlType="submit" loading={isAddAnimalLoading}>
            Add Animal
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default AddAnimalModal;
