import { FC } from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { useSearchCategory } from "../../useSearchCategory";
import { CategoryCard } from "./CategoryCard";
import type { Category } from "pages/api/categories";
import { useCategories } from "hooks/useCategories";

type Props = Pick<ReturnType<typeof useSearchCategory>, "handleSetCategory">;
type ComponentProps = {
  categories: Category[];
} & Props;

const Component: FCX<ComponentProps> = ({
  className,
  categories,
  handleSetCategory,
}) => (
  <div className={className}>
    <Grid container spacing={2}>
      {categories.map((category) => (
        <Grid key={category.id} item xs={6}>
          <CategoryCard
            onClick={() => handleSetCategory(category)}
            name={category.name}
          />
        </Grid>
      ))}
    </Grid>
  </div>
);

const StyledComponent = styled(Component)``;

export const Categories: FC<Props> = (props) => {
  const [categories, isLoading] = useCategories();

  const componentProps: ComponentProps = {
    categories: isLoading ? [] : categories,
    handleSetCategory: props.handleSetCategory,
  };

  return <StyledComponent {...componentProps} />;
};
