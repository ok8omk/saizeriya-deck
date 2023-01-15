import useSWR from "swr";
import type { Menu } from "pages/api/menus";

export const useMenus = (category?: string): [Menu[], boolean] => {
  let path = "/api/menus";
  if (category) path += `?category=${category}`;

  const { data, isLoading } = useSWR(path);

  return [data, isLoading];
};
