import axios from 'axios'

export default axios.create({
    // baseURL: 'https://ecofaith.azurewebsites.net/', //local
    // baseURL: 'https://churchplusv3coreapi.azurewebsites.net/',
    // baseURL: 'https://churchplusapi3v.azurewebsites.net/',
    // baseURL: 'https://d958-102-88-34-243.eu.ngrok.io/',
    // baseURL: 'https://daposta.pythonanywhere.com/',
    // baseURL: 'https://daposta.pythonanywhere.com/',
    baseURL: 'http://127.0.0.1:5000/',
    
    
    // baseURL: 'https://unionfaith.azurewebsites.net/',
    timeout: 500000,
    headers: {
        'Content-Type': 'application/json',
    }
})