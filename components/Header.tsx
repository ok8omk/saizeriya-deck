import styled from "@emotion/styled";
import Image from "next/image";
import { AppBar } from "@mui/material";

const Component: FCX = ({ className }) => (
  <AppBar className={className}>
    <Image src="/site-name.png" width={120} height={24} alt="サイゼデッキ！" />
  </AppBar>
);

const StyledComponent = styled(Component)`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = () => {
  return <StyledComponent />;
};
