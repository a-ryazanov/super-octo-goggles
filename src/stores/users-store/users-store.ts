import {types, flow} from 'mobx-state-tree'

import {UserModel, IUserModel} from './user'

import {withRootEnvironment} from '../extensions/with-root-environment'

export const UsersStoreModel = types
    .model('UsersStore')

    .props({
        items: types.array(UserModel),

        selectedItem: types.maybeNull(types.reference(UserModel)),
    })

    .extend(withRootEnvironment)

    .actions((self) => ({
        setSelectedItem: (item: IUserModel | null) => {
            self.selectedItem = item
        },

        fetchUsers: flow(function* () {
            try {
                self.items = yield self.environment.api.fetchUsers()
            } catch (e) {
                throw e
            }
        }),
    }))
