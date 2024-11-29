'use client'
import { Skeleton } from "antd";
import React from "react";

const CategoryLoading = () => {
  return <Skeleton.Button active={true} className="!w-[200px] !h-[55px]" />;
};

export default CategoryLoading;
