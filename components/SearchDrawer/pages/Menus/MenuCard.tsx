import { FC } from "react";
import styled from "@emotion/styled";
import { Card, CardActionArea } from "@mui/material";
import { theme } from "styles/theme";
import type { Menu } from "pages/api/menus";
import { useDeckDispatch } from "hooks/useDeckReducer";

type Props = {
  menu: Menu;
};
type ComponentProps = {
  imageUrl: string;
  name: string;
  price: string;
  onClick: () => void;
};

const Component: FCX<ComponentProps> = ({
  className,
  imageUrl,
  name,
  price,
  onClick,
}) => (
  <Card className={className}>
    <CardActionArea onClick={onClick}>
      <div className={className + "__container"}>
        <div className="image-container">
          {
            // 画像によってサイズが違っており、width・heightを指定できないのでImageは使わない
            /* eslint-disable @next/next/no-img-element */
          }
          <img className="image" src={imageUrl} alt={name} />
        </div>
        <div className="description">
          <div className="name">{name}</div>
          <div className="price">{price}円</div>
        </div>
      </div>
    </CardActionArea>
  </Card>
);

const StyledComponent = styled(Component)`
  height: 160px;

  .MuiCardActionArea-root {
    height: 100%;
  }

  &__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    > .image-container {
      width: 100%;
      height: 80px;
      flex-shrink: 0;
      > .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      > .no-image {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${theme.palette.grey[300]};
        > .icon {
          fill: ${theme.palette.common.white};
        }
      }
    }

    > .description {
      width: 100%;
      flex-grow: 1;
      overflow: hidden;
      padding: ${theme.spacing(1)};
      > .name {
        font-size: 12px;
        font-weight: bold;
        margin-bottom: ${theme.spacing(0.5)};
      }
      > .price {
        font-size: 10px;
      }
    }
  }
`;

export const MenuCard: FC<Props> = ({ menu }) => {
  const dispatch = useDeckDispatch();

  const onClick = () => {
    dispatch({ type: "addMenu", menu });
  };

  const componentProps: ComponentProps = {
    imageUrl: menu.imageUrl,
    name: menu.name,
    price: menu.price.toLocaleString(),
    onClick,
  };

  return <StyledComponent {...componentProps} />;
};
