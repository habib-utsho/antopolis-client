"use server";

import { TFilterQuery } from "@/types";
import { TCreateCategory } from "@/types/category";
import { revalidateTag } from "next/cache";

// Get a single category by ID
export const getSingleCategory = async (id: string) => {
  const fetchOptions = {
    next: {
      tags: ["category"],
      revalidate: 60,
    },
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/category/${id}`,
    fetchOptions
  );

  if (!response.ok) {
    throw new Error("Failed to fetch category data from the server");
  }

  const data = await response.json();
  return data;
};

// Create a new category
export const createCategory = async (category: TCreateCategory) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/category`,
    fetchOptions
  );

  if (!response.ok) {
    throw new Error("Failed to create the category");
  }
  revalidateTag("category");
  const data = await response.json();
  return data;
};

// Get all categories with optional query parameters
export const getAllCategories = async (query?: TFilterQuery[]) => {
  const params = new URLSearchParams();
  query?.forEach((q) => {
    params.set(q.name, q.value);
  });

  const fetchOptions = {
    next: {
      tags: ["category"],
      revalidate: 60,
    },
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/category?${params.toString()}`,
    fetchOptions
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories from the server");
  }

  const data = await response.json();
  return data;
};
