import useSWR from "swr";
import type { Category } from "pages/api/categories";

export const useCategories = (): [Category[], boolean] => {
  const { data, isLoading } = useSWR("/api/categories");

  return [data, isLoading];
};
