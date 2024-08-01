import axios from 'axios'

const urlAPI = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'content-type' : 'application/json'
    }
})

export default urlAPI