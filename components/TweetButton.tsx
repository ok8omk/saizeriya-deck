import { FC } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";
import { serializeShareUrl } from "models/Deck/serializeShareUrl";

type Props = {
  shareUrl: string;
};

type ComponentProps = {
  url: string;
};

const Component: FCX<ComponentProps> = ({ className, url }) => (
  <Button
    color="secondary"
    href={url}
    variant="outlined"
    size="small"
    startIcon={<TwitterIcon />}
  >
    ツイート
  </Button>
);

export const TweetButton: FC<Props> = (props) => {
  let params = new URLSearchParams();
  params.set("url", props.shareUrl);
  params.set("hashtags", "サイゼデッキ！");
  params.set("text", "おすすめメニューはこれ！");
  const url = ["https://twitter.com/intent/tweet", "?", params.toString()].join(
    ""
  );

  const componentProps: ComponentProps = {
    url,
  };

  return <Component {...componentProps} />;
};
