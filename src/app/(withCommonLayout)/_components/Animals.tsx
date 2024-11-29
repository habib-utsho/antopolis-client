import { getAllAnimals } from "@/services/animal";
import { TAnimal } from "@/types/animal";
import { Empty } from "antd";
import Image from "next/image";
import React from "react";

const Animals = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) => {
  const filters = [
    ...(searchParams?.category && searchParams?.category !== "All"
      ? [{ name: "category", value: searchParams.category }]
      : []),
  ];
  const animalsR = await getAllAnimals(filters);
  const animals = animalsR.data as TAnimal[];
  return (
    <div>
      {animals?.length === 0 ? (
        <div className="min-h-[45vh] flex items-center justify-center">
          <Empty
            description={<h2 className="text-white">No animals found!</h2>}
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6">
          {animals?.map((animal: TAnimal, ind: number) => {
            return (
              <div key={ind} className="flex flex-col items-center gap-2">
                <Image
                  src={animal.img}
                  alt={animal.name}
                  width={100}
                  height={100}
                  className="!h-[100px] !w-[100px]"
                />
                <h2 className="text-slate-100 font-light">{animal.name}</h2>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Animals;
