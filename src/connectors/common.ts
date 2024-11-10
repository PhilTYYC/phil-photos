import axios, { AxiosInstance } from 'axios';

export default class AxiosClient {
    instance: AxiosInstance;
    baseURL: string;

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

        this.instance = axios.create(options);
    }

    send(method: string, path: string, params: string[], data: string) {
        const sendOptions = {
            method,
            url: `${this.baseURL}/${path}`,
            params: params || {},
            data,
            basic: '',
        };
        return this.instance.request(sendOptions);
    }

    getBaseURL() {
        return this.baseURL;
    }
}
