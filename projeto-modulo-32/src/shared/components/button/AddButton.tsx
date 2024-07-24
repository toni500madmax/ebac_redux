import { Link } from "react-router-dom";
import { LinkButtonContainer } from "./Style";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

export const AddButton = () => {
  return (
    <LinkButtonContainer typeLink={"add"}>
      <Link to={"/adicionarContato"} className="button">
        <PersonAddAltIcon />
      </Link>
    </LinkButtonContainer>
  );
};
