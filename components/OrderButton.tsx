import RoomServiceIcon from "@mui/icons-material/RoomService";
import { Button } from "@mui/material";

type ComponentProps = {
  onClick: () => void;
};

const Component: FCX<ComponentProps> = ({ className, onClick }) => (
  <Button
    color="secondary"
    variant="outlined"
    size="small"
    startIcon={<RoomServiceIcon />}
  >
    注文する
  </Button>
);

export const OrderButton = () => {
  const componentProps: ComponentProps = {
    onClick: () => {}, // 後で設定する
  };

  return <Component {...componentProps} />;
};
