"use client";
import { Skeleton } from "antd";
import React from "react";

const AnimalsLoading = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6">
      <Skeleton.Button active={true} className="!w-full h-[145px]" />
    </div>
  );
};

export default AnimalsLoading;
