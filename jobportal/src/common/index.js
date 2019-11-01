import Axios from "axios";
const baseUrl = "http://192.168.0.123:5000/";
export default class HttpService {
    static getRequest = (url = "", headers = {},customUrl="") => {
       return Axios.get(customUrl?customUrl:`${baseUrl}${url}`, {
            headers
        }).then((res) => res).catch((err) => err.response)
    }
    static postRequest = (url = "", headers, body = {}) => {
        return Axios.post(`${baseUrl}${url}`, body,{headers}).then((res)=> res).catch((err)=> err.response);
    }
}