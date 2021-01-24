import {Environment} from '../environment'

import {RootStore, RootStoreModel} from './root-store'

// Инициализация может быть асинхронной.
const createEnvironment = () => new Environment()

export async function setupRootStore(): Promise<RootStore> {
    // Здесь возможна инициализация из
    // persist-хранилища.
    const rootStore: RootStore = RootStoreModel.create(
        {
            usersStore: {
                items: [],
                selectedItem: null,
            },
        },
        createEnvironment(),
    )

    await rootStore.setup()

    return rootStore
}
