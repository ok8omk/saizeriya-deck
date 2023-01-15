import styled from "@emotion/styled";
import { Drawer, IconButton } from "@mui/material";
import { theme } from "styles/theme";
import { Categories } from "./pages/Categories";
import { Menus } from "./pages/Menus";
import { useSearchCategory } from "./useSearchCategory";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  open: boolean;
  onClose: () => void;
};
type ComponentProps = Props & ReturnType<typeof useSearchCategory>;

const Component: FCX<ComponentProps> = ({
  className,
  open,
  onClose,
  category,
  handleSetCategory,
  handleUnsetCategory,
}) => (
  <Drawer className={className} anchor="bottom" open={open} onClose={onClose}>
    {category ? (
      <div className={className + "__container"}>
        <div className="header">
          <div className="container">
            <IconButton
              className="back-button"
              onClick={() => handleUnsetCategory()}
            >
              <ArrowBackIcon />
            </IconButton>
            <div className="title">{category.name}</div>
            <IconButton className="close-button">
              <CloseIcon onClick={onClose} />
            </IconButton>
          </div>
        </div>
        <div className="content">
          <Menus category={category} />
        </div>
      </div>
    ) : (
      <div className={className + "__container"}>
        <div className="header">
          <div className="container">
            メニュー
            <IconButton className="close-button">
              <CloseIcon onClick={onClose} />
            </IconButton>
          </div>
        </div>
        <div className="content">
          <Categories handleSetCategory={handleSetCategory} />
        </div>
      </div>
    )}
  </Drawer>
);

const StyledComponent = styled(Component)`
  .MuiDrawer-paperAnchorBottom {
    border-radius: 4px 4px 0 0;
  }

  &__container {
    position: relative;
    height: calc(100vh - 112px); // 合計金額まで見える
    overflow-y: scroll;

    > .header {
      z-index: 2;
      position: sticky;
      top: 0px;
      width: 100%;
      background: ${theme.palette.common.white};
      padding: ${theme.spacing(1)};
      border-bottom: 1px solid ${theme.palette.secondary.light};

      > .container {
        position: relative;
        display: flex;
        height: 40px;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: bold;
        > .back-button {
          position: absolute;
          top: 0;
          left: 0;
        }
        > .close-button {
          position: absolute;
          top: 0;
          right: 0;
        }
      }
    }

    > .content {
      z-index: 1;
      padding: ${theme.spacing(2)};
    }
  }
`;

export const SearchDrawer: FCX<Props> = (props) => {
  const { category, handleSetCategory, handleUnsetCategory } =
    useSearchCategory();

  const componentProps: ComponentProps = {
    ...props,
    category,
    handleSetCategory,
    handleUnsetCategory,
  };

  return <StyledComponent {...componentProps} />;
};
