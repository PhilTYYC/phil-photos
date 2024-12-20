import AxiosClient from './common';

export default class BackendConnector extends AxiosClient {
    async getImageList() {
        let data;
        await this.send('GET', 'images', [], '').then(response => {
            data = response.data;
        });
        return data;
    }

    async getImage(imageName: string) {
        let data;
        await this.send('GET', `images/${imageName}`, [], '').then(response => {
            data = response.data;
        });
        return data;
    }

    async login(username: string, password: string) {
        const reqData = {
            username,
            password,
        };

        let data;
        await this.send('POST', `users/login`, reqData, reqData).then(response => {
            data = response.data;
        }).catch(error => {
            data = error;
        });
        return data;
    }
}


