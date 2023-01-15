import { FC } from "react";
import styled from "@emotion/styled";
import { BLACK_COLOR } from "styles/colors";

type Props = {
  price: number;
};

type ComponentProps = {
  price: string;
};

const Component: FCX<ComponentProps> = ({ className, price }) => (
  <div className={className}>
    合計
    <span className="price">{price}</span>円
  </div>
);

const StyledComponent = styled(Component)`
  display: inline-block;
  color: ${BLACK_COLOR};
  font-size: 14px;
  > .price {
    font-size: 20px;
    font-weight: bold;
    margin: 0 4px;
  }
`;

export const TotalPrice: FC<Props> = ({ price }) => {
  const componentProps: ComponentProps = {
    price: price.toLocaleString(),
  };

  return <StyledComponent {...componentProps} />;
};
