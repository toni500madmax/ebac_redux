import { Link } from "react-router-dom";
import { LinkButtonContainer } from "./Style";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function RemoveButton() {
  return (
    <LinkButtonContainer typeLink={"remove"}>
      <Link to={"/removerContato"} className="button">
        <DeleteOutlineIcon />
      </Link>
    </LinkButtonContainer>
  );
}

export default RemoveButton;
