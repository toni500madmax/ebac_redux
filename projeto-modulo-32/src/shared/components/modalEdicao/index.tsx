import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { modifyDialog } from "../../services/reducers/dialog";

function ModalEdicao() {
  const setIsOpen: boolean = useAppSelector((state) => state.dialog.isOpen);
  const getContato = useAppSelector((state) => state.contatos.contato);

  const dispatch = useAppDispatch();

  const catContato = (catId: string | number) => {
    if (catId === 1) {
      return `Contato normal.`;
    } else if (catId === 2) {
      return `Contato favorito.`;
    } else {
      return `Contato de emergência.`;
    }
  };

  // ToDo: atualizar contato com o reducer da função mutation update
  // a atualização será no onSubmit do componente Dialog:37.

  return (
    <React.Fragment>
      <Dialog
        open={setIsOpen}
        onClose={() => dispatch(modifyDialog(false))}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            dispatch(modifyDialog(false));
          },
        }}
      >
        <DialogTitle>Atualize este contato</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl>
              <InputLabel htmlFor="component-outlined">Nome</InputLabel>
              <OutlinedInput
                id="component-outlined"
                defaultValue={getContato.nome}
                label="Nome"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="component-outlined">E-Mail</InputLabel>
              <OutlinedInput
                id="component-outlined"
                defaultValue={getContato.email}
                label="E-mail"
              />
            </FormControl>
            {Array.isArray(getContato.telefone) &&
              getContato.telefone.map((tel) => (
                <FormControl key={tel}>
                  <InputLabel htmlFor="component-outlined">
                    Telefone{` (s)`}
                  </InputLabel>
                  <OutlinedInput
                    id="component-outlined"
                    defaultValue={tel}
                    label="Telefone"
                  />
                </FormControl>
              ))}
            <FormControl>
              <InputLabel htmlFor="component-outlined">
                Categoria do contato
              </InputLabel>
              <OutlinedInput
                id="component-outlined"
                defaultValue={catContato(getContato.categoriaId)}
                label="Contato normal"
              />
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(modifyDialog(false))}>Cancel</Button>
          <Button type="submit">Concluir</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default ModalEdicao;
