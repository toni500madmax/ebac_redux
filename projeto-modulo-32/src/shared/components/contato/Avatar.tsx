import * as React from "react";
import { Avatar as AvaImg } from "@mui/material";
import Stack from "@mui/material/Stack";

function Avatar() {
  return (
    <Stack direction="row" spacing={2}>
      <AvaImg>H</AvaImg>
    </Stack>
  );
}

export default Avatar;
