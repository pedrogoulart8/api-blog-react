
import blogFetch from '../axios/config'

import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import './Admin.css'


const Admin = () => {

  const [posts,setPosts] = useState([])  

  //Função responsável por coletar os dados dos posts
  const getPosts = async () => {

    try {
        
        const response = await blogFetch.get('/posts')

        const data = response.data
    
        setPosts(data)

    } catch (error) {
        
        console.log(error)

    }

  }

  //Recebe o parametro 'post.id' quando o usuario clica no botão 'deletar'
  const deletePost = async (id) => {

    await blogFetch.delete(`./posts/${id}`)

    //Metodo JS responsável por filtrar todos os id's dos posts que são diferentes ao id utilizado como parametro na função
    const filteredPosts = posts.filter((post) => post.id !== id)

    setPosts(filteredPosts)

  }

  //Função responsável por ativar a função getPosts apenas uma vez, ao carregar a página
  useEffect(() => {

    getPosts()

  }, [])


  return (

    <div className='admin'>
        <h1>Gerenciar Posts</h1>
        {posts.length === 0 ? (<p>Carregando..</p>) : (
            posts.map((post) => (
            <div className='post' key={post.id}>
                <h2>{post.title}</h2>
                <div className='actions'>
                    <Link className='btn edit-btn' to={`/posts/editar/${post.id}`}>Editar</Link>
                    <button className='btn delete-btn' onClick={() => deletePost(post.id)} >Excluir</button>
                </div>
            </div>
        )))}
    </div>

  )

}

export default Admin