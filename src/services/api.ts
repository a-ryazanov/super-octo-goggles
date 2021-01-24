import {identity, invoker} from 'ramda'

export class Api {
    private BASE_URL = 'https://jsonplaceholder.typicode.com'

    private sendRequest<T = any>(segment: string): Promise<T> {
        return fetch(`${this.BASE_URL}/${segment}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(invoker(0, 'json'))
            .then(identity)
            .catch((error) => {
                throw error
            })
    }

    public async fetchUsers() {
        return this.sendRequest('users')
    }
}
