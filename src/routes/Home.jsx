import axios from 'axios'
import urlAPI from '../axios/config'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import './Home.css'


const Home = () => {

  const [posts,setPosts] = useState([])

  //Função assincrona, que permite o uso do 'await' dentro do seu corpo. Neste caso a função será pausada até que o await obtenha sua resposta, que no caso são os dados da API.
  const getPosts = async() => {

    try {
      
      //Endereço principal da API está dentro da variavel urlAPI (config.js). Abaixo apenas o end point
      const response = await urlAPI.get('/posts')

      const data = response.data
      
      setPosts(data)

    } catch (error) {
      
      console.log(error)

    }


  }

  // useEffect utilizado para que a função getPosts() seja chamada apenas uma vez, quando carrega a pagina. Ou seja, só chamaremos a API uma unica vez.
  useEffect(() => {

    getPosts()

  }, [])

  

  return (

    <div className='home'>

      <h1>Ultimos posts</h1>

      {posts.length === 0 ? <p>Carregando..</p> : (
        posts.map((post) => (
          <div className='post' key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            {/*Link utilizado para levar o usuario a um outro componente, que no caso será  a página de cada post unitário, de acordo com seu id*/}
            <Link className='btn' to={`/posts/${post.id}`}>Ler mais!</Link>

          </div>
        ))
      )}

    </div>

  )

}

export default Home