import { FC } from "react";
import styled from "@emotion/styled";
import { Card, CardActionArea, CardContent, Grid } from "@mui/material";
import { theme } from "styles/theme";

type Props = {
  onClick: () => void;
  name: string;
};

type ComponentProps = Props;

const Component: FCX<ComponentProps> = ({ className, onClick, name }) => (
  <Card className={className}>
    <div className={className + "__card"}>
      <CardActionArea onClick={onClick}>
        <CardContent className={className + "__card-content"}>
          <div className="name">{name}</div>
        </CardContent>
      </CardActionArea>
    </div>
  </Card>
);

const StyledComponent = styled(Component)`
  &__card {
    overflow: hidden;
    background: 1px solid ${theme.palette.secondary.light};
    height: 56px;
  }

  &__card-content {
    > .name {
      font-size: 12px;
      font-weight: bold;
      width: 100%;
    }
  }
`;

export const CategoryCard: FC<Props> = (props) => {
  return <StyledComponent {...props} />;
};
