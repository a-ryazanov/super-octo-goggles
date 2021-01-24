import {Instance, types} from 'mobx-state-tree'

export const UserModel = types
    .model('UserModel')

    .props({
        id: types.identifierNumber,
        name: types.string,
        username: types.string,
        email: types.string,
        phone: types.string,
        website: types.string,
        address: types.model('UserAddressModel', {
            city: types.string,
        }),
    })

export interface IUserModel extends Instance<typeof UserModel> {}
