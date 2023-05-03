import { BrowserRouter, Route, Routes } from 'react-router-dom'

import React from 'react';

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Cadastro from './pages/Cadastro/Cadastro';
import './App.css'
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTemas/CadastroTemas';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTemas/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Provider store={store}>
      <ToastContainer/>
      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/temas' element={<ListaTemas/>}/>
            <Route path='/posts' element={<ListaPostagem/>}/>
            <Route path='/formularioPostagem/' element={<CadastroPost/>}/>
            <Route path='/formularioPostagem/:id' element={<CadastroPost/>}/>
            <Route path='/formularioTema' element={<CadastroTema/>}/>
            <Route path='/formularioTema/:id' element={<CadastroTema/>}/>
            <Route path='/deletarPostagem/:id' element={<DeletarPostagem/>}/>
            <Route path='/deletarTema/:id' element={<DeletarTema/>}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App
