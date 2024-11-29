"use server";

import { TFilterQuery } from "@/types";
import { revalidateTag } from "next/cache";

// Get a single animal by ID
export const getSingleAnimal = async (id: string) => {
  const fetchOptions = {
    next: {
      tags: ["animal"],
      revalidate: 60,
    },
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/animal/${id}`,
    fetchOptions
  );

  if (!response.ok) {
    throw new Error("Failed to fetch animal data from the server");
  }

  const data = await response.json();
  return data;
};

// Create a new animal
export const createAnimal = async (payload: FormData) => {
  const fetchOptions = {
    method: "POST",
    body: payload,
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/animal`,
    fetchOptions
  );

  if (!response.ok) {
    throw new Error("Failed to create the animal");
  }
  revalidateTag("animal");

  const data = await response.json();
  return data;
};

// Get all animals with optional query parameters
export const getAllAnimals = async (query?: TFilterQuery[]) => {
  const params = new URLSearchParams();
  query?.forEach((q) => {
    params.set(q.name, q.value);
  });

  const fetchOptions = {
    next: {
      tags: ["animal"],
      revalidate: 60,
    },
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/animal?${params.toString()}`,
    fetchOptions
  );

  if (!response.ok) {
    throw new Error("Failed to fetch animals from the server");
  }

  const data = await response.json();
  return data;
};
