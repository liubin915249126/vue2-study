import axios from 'axios'
let BASE_URL = 'http://localhost:3000'
export default function request(data){
  let options = {...data} 
  options.url = `${BASE_URL}${data.url}`
  return axios(options)
         .then(checkStatus)
         .then(parseJSON)
         .catch((e)=>{
             return new Promise((resolve, reject)=>{
                 reject(e)
             })
         })
}

export function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

export function parseJSON(response) {
    if (response.status === 204) {
        return undefined;
    } else {
        return response.data;
    }
}