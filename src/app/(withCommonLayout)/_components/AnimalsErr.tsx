import { ErrorIcon } from "@/components/ui/icons";
import React from "react";

const AnimalsErr = () => {
  return (
    <div className="h-[30vh] flex items-center justify-center">
      <div className="rounded-md bg-slate-100 shadow-md text-danger p-4 text-center flex flex-col gap-1 items-center">
        <ErrorIcon /> <h2 className="">Something is wrong with animal</h2>
      </div>
    </div>
  );
};

export default AnimalsErr;
