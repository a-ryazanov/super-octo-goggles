import {getEnv, getRoot, IStateTreeNode} from 'mobx-state-tree'

import {Environment} from '../environment'

export const withRootEnvironment = (self: IStateTreeNode) => ({
    views: {
        get environment() {
            return getEnv<Environment>(getRoot(self))
        },
    },
})
