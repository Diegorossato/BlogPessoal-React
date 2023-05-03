import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { addToken } from "../../../store/tokens/Actions";

function Navbar() {
  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    toast.info("Usuário deslogad com Sucesso!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
    navigate("/login");
  }

  var navbarComponent;

  if (token !== "") {
    navbarComponent = (
      <AppBar position="static" className="bg-color">
        <Toolbar variant="dense" className="container">
        <Link to="/home">
          <Box className="itens">
            <Typography variant="h5" color="inherit" className="cursor">
              BlogPessoal
            </Typography>
          </Box>
          </Link>

          <Box display="flex" justifyContent="center">
            <Link to="/home" className="text-decorator-none">
              <Box mx={1} className="itens">
                <Typography variant="h6" className="color-itens">
                  Home
                </Typography>
              </Box>
            </Link>

            <Link to="/posts" className="text-decorator-none">
              <Box mx={1} className="itens">
                <Typography variant="h6" className="color-itens">
                  Postagens
                </Typography>
              </Box>
            </Link>

            <Link to="/temas" className="text-decorator-none">
              <Box mx={1} className="itens">
                <Typography variant="h6" className="color-itens">
                  Temas
                </Typography>
              </Box>
            </Link>

            <Link to="/formularioTema" className="text-decorator-none">
              <Box mx={1} className="itens">
                <Typography variant="h6" className="color-itens">
                  Cadastrar Tema
                </Typography>
              </Box>
            </Link>

            <Box mx={1} className="itens" color="white" onClick={goLogout}>
              <Typography variant="h6" className="color-itens">
                Logout
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;
