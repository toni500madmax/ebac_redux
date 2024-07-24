import { Link } from "react-router-dom";
import { LinkButtonContainer } from "./Style";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

export const ReturnButton = () => {
  return (
    <LinkButtonContainer typeLink={"remove"}>
      <Link to={"/"} className="button">
        <KeyboardReturnIcon />
      </Link>
    </LinkButtonContainer>
  );
};
