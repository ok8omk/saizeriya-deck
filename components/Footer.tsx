import styled from "@emotion/styled";
import { Link } from "@mui/material";
import { theme } from "styles/theme";

const Component: FCX = ({ className }) => (
  <div className={className}>
    <a href="/about" target="_blank">
      このサイトについて
    </a>
  </div>
);

const StyledComponent = styled(Component)`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.palette.secondary.dark};
  color: ${theme.palette.secondary.contrastText};
  font-size: 12px;
`;

export const Footer = () => {
  return <StyledComponent />;
};
