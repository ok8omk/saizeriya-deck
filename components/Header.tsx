import styled from "@emotion/styled";
import Image from "next/image";
import { GREEN_COLOR, LIGHT_GREEN_COLOR } from "styles/colors";

const Component: FCX = ({ className }) => (
  <div className={className}>
    <Image src="/site-name.png" width={120} height={24} alt="サイゼデッキ！" />
  </div>
);

const StyledComponent = styled(Component)`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${LIGHT_GREEN_COLOR};
  border-bottom: solid 2px ${GREEN_COLOR};
`;

export const Header = () => {
  return <StyledComponent />;
};
