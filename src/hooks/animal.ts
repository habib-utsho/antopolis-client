import { TFilterQuery } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGetAllAnimal = (query: TFilterQuery[]) => {
  return useQuery({
    queryKey: ["animal", query],
    queryFn: async () => {
      const params = new URLSearchParams();
      query.forEach((q) => {
        params.append(q.name, q.value);
      });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/animal?${params.toString()}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      return response.json();
    },
  });
};
