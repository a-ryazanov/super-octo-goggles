import {Instance, types, flow} from 'mobx-state-tree'

import {UsersStoreModel} from '../users-store/users-store'

export const RootStoreModel = types
    .model('RootStore')

    .props({
        usersStore: UsersStoreModel,
    })

    .actions((self) => ({
        setup: flow(function* () {
            try {
                yield self.usersStore.fetchUsers()
            } catch (e) {
                throw e
            }
        }),
    }))

export interface RootStore extends Instance<typeof RootStoreModel> {}
