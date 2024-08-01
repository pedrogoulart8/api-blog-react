
//Importando URL da API
import blogFetch from '../axios/config'


import { useState } from 'react'

//Hook usado para inserir um atalho de navegação entre as páginas 
import { useNavigate } from 'react-router-dom'

import './NewPost.css'

const NewPost = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) => {

    e.preventDefault()

    //Variavel responsável por agrupar titulo e corpo do post adicionados pelo usuario
    const novoPost = { title, body, userId:1 }

    //Utilizado o metodo POST para adicionar na area de postagens do blog (/posts), os dados da const 'novoPost'
    await blogFetch.post('/posts', {
      body: novoPost
    })

    navigate('/')

    //OBS: Como trata-se de um projeto de treino com API, apenas enviamos os dados com o metodo POST para testar as requisições. Os dados nao ficam salvos e registrados no site.

  }

  return (

    <div className='new-post'>

      {/*Chama a função createPost() após submit*/}
      <form onSubmit={(e) => createPost(e)}>

        <div className='form-control'>
          <label htmlFor="title">Titulo:</label>
          <input 
          type="text" 
          name='title' 
          id='title' 
          placeholder='Digite o titulo' 
          //Qualquer mudança no input irá ficar registrada dentro da const title
          onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className='form-control'>
          <label htmlFor="body">Conteudo:</label>
          <textarea 
          name="body" 
          id="body" 
          placeholder='Digite o conteúdo'
           //Qualquer mudança no input irá ficar registrada dentro da const body
           onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <input type="submit" value='Criar post' className='btn' />

      </form>

    </div>

  )

}

export default NewPost