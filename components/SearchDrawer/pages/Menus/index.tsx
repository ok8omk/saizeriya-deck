import { FC } from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { MenuCard } from "./MenuCard";
import { useMenus } from "hooks/useMenus";
import type { Category } from "pages/api/categories";
import type { Menu } from "pages/api/menus";

type Props = {
  category: Category;
};
type ComponentProps = {
  menus: Menu[];
};

const Component: FCX<ComponentProps> = ({ className, menus }) => (
  <div className={className}>
    <Grid container spacing={2}>
      {menus.map((menu) => (
        <Grid key={menu.id} item xs={6}>
          <MenuCard key={menu.id} menu={menu} />
        </Grid>
      ))}
    </Grid>
  </div>
);

const StyledComponent = styled(Component)``;

export const Menus: FC<Props> = ({ category }) => {
  const [categoryMenus, isLoading] = useMenus(category.id);

  const componentProps: ComponentProps = {
    menus: isLoading ? [] : categoryMenus,
  };

  return <StyledComponent {...componentProps} />;
};
