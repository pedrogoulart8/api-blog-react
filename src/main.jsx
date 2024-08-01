import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//createBrowserRouter = configure suas rotas aqui dentro
//RouterProvider = responsável por inserir suas rotas na arvore de components do react
// Route = 
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"

//importando páginas
import Home from './routes/Home'
import NewPost from   './routes/NewPost'
import PostUnico from './routes/PostUnico'
import Admin from './routes/Admin.jsx'
import Editar from './routes/Editar.jsx'

import './index.css'


//array de objetos de configuração do roteamento
//Abaixo criaremos as rotas do projeto, que poderão ser acessadas pelo menu (NavBar), através do recurso Link do react-router-dom
const routerCriado = createBrowserRouter (
    
  [
    {

      //Conteudo principal e seus filhos
      path: '/api-blog-react/',
      element: <App />,
  
      //rotas do site, paginas.
      children: [
  
        {
          path: '/',
          element: <Home />
        },
  
        //rota para criar post
        {
          path: '/new',
          element: <NewPost />
        },

        //rota para visualizar um post específico
        {
          path: '/posts/:id',
          element: <PostUnico />
        },

        {
          path: '/admin',
          element: <Admin />,
        },

        {
          path: '/posts/editar/:id',
          element: <Editar />
        }

      ],
    },
  ],
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* RouterProvider é o responsavel por trazer o roteador que eu criei (const routerCriado) para a arvore de componentes de aplicação. Basta passar as rotas configuradas para a propriedade 'router' */}
    <RouterProvider router={routerCriado} />

  </React.StrictMode>,
)
