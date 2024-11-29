import Container from "@/components/ui/Container";
import AddCategoryModal from "./_components/AddCategoryModal";
import AddAnimalModal from "./_components/AddAnimalModal";
import { Suspense } from "react";
import AnimalsLoading from "./_components/AnimalsLoading";
import ErrorBoundary from "@/components/ErrorBoundary";
import AnimalsErr from "./_components/AnimalsErr";
import dynamic from "next/dynamic";
import CategoryErr from "./_components/CategoryErr";
import CategoryLoading from "./_components/CategoryLoading";

const DynamicFilteringSection = dynamic(
  () => import("./_components/Categories"),
  { ssr: false }
);
const DynamicAnimalsSection = dynamic(() => import("./_components/Animals"), {
  ssr: false,
});

const page = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) => {
  if (searchParams) {
    searchParams.category = searchParams.category || "All";
  }
  return (
    <div className="py-[65px] min-h-screen !bg-black !text-white">
      <Container>
        <div className="flex justify-between gap-4">
          <div className="flex-1">
            <ErrorBoundary fallback={<CategoryErr />}>
              <Suspense fallback={<CategoryLoading />}>
                <DynamicFilteringSection searchParams={searchParams} />
              </Suspense>
            </ErrorBoundary>
          </div>

          <div className="flex gap-2 flex-1 justify-end">
            <AddAnimalModal />
            <AddCategoryModal />
          </div>
        </div>

        <div className="my-[60px] md:my-[80px]">
          <ErrorBoundary fallback={<AnimalsErr />}>
            <Suspense fallback={<AnimalsLoading />}>
              <DynamicAnimalsSection searchParams={searchParams} />
            </Suspense>
          </ErrorBoundary>
        </div>
      </Container>
    </div>
  );
};

export default page;
