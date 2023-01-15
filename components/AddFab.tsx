import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  onClick: () => void;
};
type ComponentProps = Props;

const Component: FCX<ComponentProps> = ({ className, onClick }) => (
  <Fab className={className} onClick={onClick} color="primary" aria-label="add">
    <AddIcon />
  </Fab>
);

export const AddFab: FCX<Props> = (props) => {
  return <Component {...props} />;
};
