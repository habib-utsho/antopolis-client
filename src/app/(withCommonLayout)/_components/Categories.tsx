import { getAllCategories } from "@/services/category";
import { TCategory } from "@/types/category";
import { Button, Empty } from "antd";
import React from "react";

const Categories = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) => {
  const categoriesT = await getAllCategories([{ name: "limit", value: 500 }]);
  const categories = categoriesT.data as TCategory[];
  return (
    <div>
      {categories?.length === 0 ? (
        <div className="min-h-[45vh] flex items-center justify-center">
          <Empty
            description={<h2 className="text-white">No categories found!</h2>}
          />
        </div>
      ) : (
        <div className="flex gap-2 items-center flex-1">
          {[{ _id: "All", name: "All" }, ...categories]?.map(
            (
              category: TCategory | { _id: string; name: string },
              ind: number
            ) => {
              return (
                <Button
                  href={`?category=${category._id}`}
                  key={ind}
                  className={`${
                    searchParams?.category === "All" && category._id === "All"
                      ? "!bg-success !text-white"
                      : searchParams?.category === category._id
                      ? "!bg-success !text-white"
                      : "!bg-transparent !text-success"
                  }   !border !border-success`}
                >
                  {category.name}
                </Button>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default Categories;
