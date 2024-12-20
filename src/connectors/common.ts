import axios from 'axios';

export default class AxiosClient {
    baseURL: string;
    client: any;

    constructor(baseURL = null) {
        this.baseURL = baseURL || 'http://localhost:3030';
        const options = {
            baseURL: this.baseURL,
            headers: {
                //  Authorization: `<Your Auth Token>`,
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
                timeout : 1000,
            }
        }
        
        this.client = axios.create(options);
    }

    send(method: string, path: string, params: any, data: {}) {
        const sendOptions = {
            method,
            url: `${this.baseURL}/${path}`,
            params: params || {},
            data,
            basic: '',
        };
        return this.client.request(sendOptions);
    }

    post(path: string,  data: any) {
        const url = `${this.baseURL}/${path}`;
        return this.client.post(url, data);
    }

    getBaseURL() {
        return this.baseURL;
    }
}
