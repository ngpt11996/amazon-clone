import axios from "axios";

const instance= axios.create({
    baseURL: 'http://localhost:5001/challenge-64265/us-central1/api',  //api url (cloud function url)
    headers: {'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization'
    }
});

export default instance;