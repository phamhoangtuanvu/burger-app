import axios from "axios"

const instance = axios.create({
    baseURL: 'https://burger-app-bdc55-default-rtdb.asia-southeast1.firebasedatabase.app/'
})

export default instance