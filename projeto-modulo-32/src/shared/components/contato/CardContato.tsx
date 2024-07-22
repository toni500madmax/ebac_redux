import React from "react";
import Avatar from "./Avatar";
import Contato from "./Contato";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useGetContatosQuery } from "../../services/api";
import { ContatoCardContainer } from "./Style";

function CardContato() {
  const query = useGetContatosQuery();
  const { data: listaContatos, isFetching } = query;

  return (
    <>
      {isFetching ? (
        <p>Carregando...</p>
      ) : (
        listaContatos?.map((contato) => (
          <ContatoCardContainer key={contato.id}>
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
                    <Avatar inicial={contato.nome[0]} />
                    <h3>{contato.nome}</h3>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Contato contato={contato.telefone} />
              </AccordionDetails>
            </Accordion>
          </ContatoCardContainer>
        ))
      )}
    </>
  );
}

export default CardContato;
