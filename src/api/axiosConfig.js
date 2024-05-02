import axios from 'axios';
export default axios.create({
    baseURL: "https://066c-118-189-129-142.ngrok-free.app",
    headers:{"ngrok-skip-browser-warning": true , "Access-Control-Allow-Origin	":"*"}
});