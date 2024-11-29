import Container from "@/components/ui/Container";
import { getAllCategories } from "@/services/category";
import { TCategory } from "@/types/category";
import { Button } from "antd";
import AddCategoryModal from "./_components/AddCategoryModal";
import AddAnimalModal from "./_components/AddAnimalModal";
import Animals from "./_components/Animals";
import { Suspense } from "react";
import AnimalsLoading from "./_components/AnimalsLoading";
import ErrorBoundary from "@/components/ErrorBoundary";
import AnimalsErr from "./_components/AnimalsErr";

const page = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) => {
  console.log(searchParams, "params from home");
  const categories = await getAllCategories([{ name: "limit", value: 500 }]);
  if (searchParams) {
    searchParams.category = searchParams.category || "All";
  }
  return (
    <div className="py-[65px] min-h-screen !bg-black !text-white">
      <Container>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center flex-1">
            {[{ _id: "All", name: "All" }, ...categories.data]?.map(
              (category: TCategory, ind: number) => {
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
          <div className="flex gap-2">
            <AddAnimalModal />
            <AddCategoryModal />
          </div>
        </div>

        <div className="my-[60px] md:my-[80px]">
          <Suspense fallback={<AnimalsLoading />}>
            <ErrorBoundary fallback={<AnimalsErr />}>
              <Animals searchParams={searchParams} />
            </ErrorBoundary>
          </Suspense>
        </div>
      </Container>
    </div>
  );
};

export default page;
