import { useState } from "react";

type Category = {
  id: string;
  name: string;
};

export const useSearchCategory = () => {
  const [category, setCategory] = useState<Category | undefined>();

  const handleSetCategory = (category: Category) => {
    setCategory(category);
  };

  const handleUnsetCategory = () => {
    setCategory(undefined);
  };

  return {
    category,
    handleSetCategory,
    handleUnsetCategory,
  };
};
