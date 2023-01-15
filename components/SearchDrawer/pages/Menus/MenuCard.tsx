import { FC } from "react";
import styled from "@emotion/styled";
import { Card } from "@mui/material";
import NoPhotographyOutlinedIcon from "@mui/icons-material/NoPhotographyOutlined";
import { theme } from "styles/theme";

type Props = {
  imageUrl?: string;
  name: string;
  price: number;
};
type ComponentProps = {
  imageUrl?: string;
  name: string;
  price: string;
};

const Component: FCX<ComponentProps> = ({
  className,
  imageUrl,
  name,
  price,
}) => (
  <Card className={className}>
    <div className={className + "__image-container"}>
      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="image" src={imageUrl} alt={name} />
      ) : (
        <div className="no-image">
          <NoPhotographyOutlinedIcon className="icon" />
        </div>
      )}
    </div>
    <div>
      <div className={className + "__description"}>
        <div className="name">{name}</div>
        <div className="price">{price}円</div>
      </div>
    </div>
  </Card>
);

const StyledComponent = styled(Component)`
  height: 160px;

  &__image-container {
    width: 100%;
    height: 80px;
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

  &__description {
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

  > .buttons {
    flex-shrink: 0;
  }
`;

export const MenuCard: FC<Props> = ({ imageUrl, name, price }) => {
  const componentProps: ComponentProps = {
    imageUrl,
    name,
    price: price.toLocaleString(),
  };
  return <StyledComponent {...componentProps} />;
};
