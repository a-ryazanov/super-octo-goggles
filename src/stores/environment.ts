import {Api} from '../services'

export class Environment {
    api: Api

    constructor() {
        this.api = new Api()
    }
}
