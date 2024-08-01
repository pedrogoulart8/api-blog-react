import blogFetch from '../axios/config'

import { useState, useEffect } from 'react'

//Hook utilizado para acessar os parametros da URL em componentes de rota.

import { useParams } from 'react-router-dom'

import './PostUnico.css'


const PostUnico = () => {

    //useparams() é um hook que retorna o objeto de parâmetros da URL. Quando vc aciona esse hook vc reune os parametros da url e insere dentro de uma const o que vc quer utilizar.
    //a id é apenas um dos parametros do objeto da URL. Neste caso, desestruturamos este objeto para já buscar o valor de id e inserir o mesmo dentro de uma const chamada id.   
    const { id } = useParams()

    //post receberá um objeto
    const [post, setPost] = useState({})

    const getPost = async () => {

        try {
            
            //No momento que o usuario clica em um post do blog, ele acessa a rota dinamica '/post/:id'. 
            //O id do post acessado será armazenado na const id (const {id} = useparams). Em seguida será inserido na URL abaixo.
            //Agora usamos o metodo GET para coletar os dados dessa url e inserimos dentro da variavel response, para depois inserirmos dentro de setData
            const response = await blogFetch.get(`/posts/${id}`)

            //Obejto completo, contendo title, body, id..
            const data = response.data

            console.log(data)

            setPost(data)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() =>{

        getPost()

    }, [])

    return (

        <div className='post-container'>
            {!post.title
                ?
                (<p>Carregando..</p>)
                :
                (<div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>)
            }
        </div>

    )

}

export default PostUnico