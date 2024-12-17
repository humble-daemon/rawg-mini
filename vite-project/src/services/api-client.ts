import axios from "axios";

const controller = new AbortController();

const ApiClient = axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : "7ad189985418493482e6d1fcd88ac5ee"
    },
    signal : controller.signal
})

export default ApiClient;
export {controller};