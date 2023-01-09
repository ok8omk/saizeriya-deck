import styled from "@emotion/styled";
import { BLACK_COLOR } from "styles/colors";

type ComponentProps = {
  price: number;
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

export const TotalPrice = () => {
  const componentProps: ComponentProps = {
    price: 50000, // 後で設定する
  };

  return <StyledComponent {...componentProps} />;
};
