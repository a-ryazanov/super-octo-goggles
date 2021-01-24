import React, {useState, useEffect} from 'react'

import {RootStore, RootStoreProvider, setupRootStore} from './stores'

import {RootNavigator} from './navigation'

import {BaseLoader} from './common-components'

const App: React.FC = () => {
    const [rootStore, setRootStore] = useState<RootStore | null>(null)

    useEffect(() => {
        ;(async () => {
            const store = await setupRootStore()

            setRootStore(store)
        })()
    }, [])

    return rootStore !== null ? (
        <RootStoreProvider value={rootStore}>
            <RootNavigator />
        </RootStoreProvider>
    ) : (
        <BaseLoader />
    )
}

export default App
