import { TFilterQuery } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGetAllCategory = (query: TFilterQuery[]) => {
  return useQuery({
    queryKey: ["category", query],
    queryFn: async () => {
      const params = new URLSearchParams();
      query.forEach((q) => {
        params.append(q.name, q.value);
      });

      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_SERVER_BASE_URL
        }/category?${params.toString()}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      return response.json();
    },
  });
};
