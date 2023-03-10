import type { FC } from "react";
import styled from "@emotion/styled";
import { Card, CardActions, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { theme } from "styles/theme";
import { useDeckDispatch } from "hooks/useDeckReducer";
import { Menu } from "pages/api/menus";

type Props = {
  index: number;
  menu: Menu;
};

type ComponentProps = {
  imageUrl: string;
  name: string;
  price: string;
  onClickDelete: () => void;
};

const Component: FCX<ComponentProps> = ({
  className,
  imageUrl,
  name,
  price,
  onClickDelete,
}) => (
  <Card className={className}>
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

    <CardActions className="buttons">
      <IconButton onClick={onClickDelete}>
        <DeleteOutlineIcon />
      </IconButton>
    </CardActions>
  </Card>
);

const StyledComponent = styled(Component)`
  display: flex;
  height: 56px;

  > .image-container {
    flex-shrink: 0;
    width: 56px;
    height: 56px;
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
    flex-grow: 1;
    overflow: hidden;
    padding: ${theme.spacing(1, 0, 1, 1)};
    > .name {
      font-size: 14px;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: ${theme.spacing(0.5)};
    }
    > .price {
      font-size: 10px;
    }
  }

  > .buttons {
    flex-shrink: 0;
  }
`;

export const MenuItem: FC<Props> = ({ index, menu }) => {
  const dispatch = useDeckDispatch();

  const onClickDelete = () => {
    dispatch({ type: "deleteMenu", index });
  };

  const componentProps: ComponentProps = {
    imageUrl: menu.imageUrl,
    name: menu.name,
    price: menu.price.toLocaleString(),
    onClickDelete,
  };

  return <StyledComponent {...componentProps} />;
};
