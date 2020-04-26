import axios from 'axios'

export default () => {
    //change to real URL
    return axios.create({
        baseURL: 'http://localhost:8082'
    });

}