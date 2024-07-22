import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Avatar from "../../shared/components/contato/Avatar";
import Contato from "../../shared/components/contato/Contato";
import { useGetContatosQuery } from "../../shared/services/api";

export const HomePage = () => {
  const query = useGetContatosQuery();
  const { data: listaContatos } = query;

  return (
    <div>
      <h1>Contatos</h1>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Avatar />
                <h3>
                  {query.isLoading &&
                    listaContatos?.map((contato) => contato.nome)}
                </h3>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Contato />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
