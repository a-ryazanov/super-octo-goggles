import {StyleSheet} from 'react-native'

import {commonStyles} from '../../styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: commonStyles.mainAppBg,
    },

    itemContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 54,
        marginLeft: commonStyles.mainSidePadding,
        marginRight: commonStyles.mainSidePadding * 2,
    },

    itemMainText: commonStyles.baseText,

    itemSecondaryText: {
        ...commonStyles.secondaryText,
        marginTop: 4,
    },
})
