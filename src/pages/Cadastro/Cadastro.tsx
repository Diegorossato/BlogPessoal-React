import React, { useState, useEffect, ChangeEvent } from "react";
import { cadastroUsuario } from "../../services/Service";
import "./Cadastro.css";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import User from "../../models/User";
import { toast } from "react-toastify";

function Cadastro() {
  let history = useNavigate();
  const [confirmaSenha, setConfirmaSenha] = useState<String>("");
  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (userResult.id != 0) {
      history("/login");
      console.log(userResult);
    }
  }, [userResult]);

  function confirmaSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmaSenha == user.senha) {
      await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
      toast.success("Usuário cadastrado com sucesso!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } else {
      toast.error("Erro ao efetuar o cadastro, tente novamente", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} className="imagem2"></Grid>

        <Grid item xs={6} alignItems="center">
          <Box padding={10}>
            <form onSubmit={onSubmit}>
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className="negrito2"
              >
                Cadastre-se
                <TextField
                  value={user.nome}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updatedModel(e)
                  }
                  id="nome"
                  label="Digite seu nome"
                  variant="outlined"
                  name="nome"
                  margin="normal"
                  fullWidth
                />
                <TextField
                  value={user.usuario}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updatedModel(e)
                  }
                  id="usuario"
                  label="Digite o nome de usuario"
                  variant="outlined"
                  name="usuario"
                  margin="normal"
                  fullWidth
                />
                <TextField
                  value={user.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updatedModel(e)
                  }
                  id="senha"
                  label="Digite sua senha"
                  variant="outlined"
                  name="senha"
                  margin="normal"
                  fullWidth
                  type="password"
                />
                <TextField
                  value={confirmaSenha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    confirmaSenhaHandle(e)
                  }
                  id="confirmaSenha"
                  label="Confirme sua senha"
                  variant="outlined"
                  name="confirmaSenha"
                  margin="normal"
                  fullWidth
                  type="password"
                />
                <TextField
                  value={user.foto}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updatedModel(e)
                  }
                  id="foto"
                  label="Link da foto"
                  variant="outlined"
                  name="foto"
                  margin="normal"
                  fullWidth
                />
                <Box marginTop={2} textAlign="center">
                  <Link to="/login">
                    <Button
                      variant="contained"
                      color="secondary"
                      className="btnCancelar"
                    >
                      Cancelar
                    </Button>
                  </Link>

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="btnCadastrar"
                  >
                    Cadastrar
                  </Button>
                </Box>
              </Typography>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Cadastro;
