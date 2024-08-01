import blogFetch from '../axios/config'

import { useState, useEffect } from 'react'

import { useParams, useNavigate } from 'react-router-dom'

import './NewPost.css'
import '../index.css'



const Editar = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    //Desestruturando o objeto da URL e pegando o paramentro id para transforma-lo em uma variável de mesmo nome
    const { id } = useParams()

    //Pegando os dados de todos os posts
    const getPost = async () => {

        try {

            //Pegando os dados do post escolhido pelo o usuario (id) 
            const response = await blogFetch.get(`/posts/${id}`)

            const data = response.data

            setTitle(data.title)
            setBody(data.body)

        } catch (error) {
            console.log(error)
        }

    }


    //Função responsável por editar o post, trocando os dados da variavel 'post'
    const editPost = async (e) => {

        e.preventDefault()

        //Objeto utilizado para armazenar os valores atualizados de title e body
        const post = {title, body, userId: 1 }

        //Aqui inserimos os dados atualizados com o metodo PUT e atualizamos o body com os valores da variavel 'post'
        await blogFetch.put(`/posts/${id}` , {
            body: post,
        })

        navigate(`/posts/${id}`);

    }


    useEffect(() => {

        getPost()

    }, [])

    return (

        <div className='new-post'>
            <h2>Editando: {title}</h2>
            {/*Chama a função createPost() após submit*/}
            <form onSubmit={(e) => editPost(e)}>

                <div className='form-control'>
                    <label htmlFor="title">Titulo:</label>
                    <input
                        type="text"
                        name='title'
                        id='title'
                        placeholder='Digite o titulo'
                        //Qualquer mudança no input irá ficar registrada dentro da const title
                        onChange={(e) => setTitle(e.target.value)} 
                        value={title || ''} />
                </div>

                <div className='form-control'>
                    <label htmlFor="body">Conteudo:</label>
                    <textarea
                        name="body"
                        id="body"
                        placeholder='Digite o conteúdo'
                        //Qualquer mudança no input irá ficar registrada dentro da const body
                        onChange={(e) => setBody(e.target.value)}
                        value={body || ''}
                    />
                </div>

                <input type="submit" value='Editar post' className='btn' />

            </form>
        </div>

    )

}

export default Editar