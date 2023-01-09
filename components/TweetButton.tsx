import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";

type ComponentProps = {
  onClick: () => void;
};

const Component: FCX<ComponentProps> = ({ className, onClick }) => (
  <Button
    color="secondary"
    variant="outlined"
    size="small"
    startIcon={<TwitterIcon />}
  >
    ツイート
  </Button>
);

export const TweetButton = () => {
  const componentProps: ComponentProps = {
    onClick: () => {}, // 後で設定する
  };

  return <Component {...componentProps} />;
};
