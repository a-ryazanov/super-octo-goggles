import {StyleSheet} from 'react-native'

import {commonStyles} from '../../styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: commonStyles.mainAppBg,
        paddingTop: commonStyles.mainSidePadding,
        paddingHorizontal: commonStyles.mainSidePadding,
    },

    rowContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: commonStyles.mainSidePadding / 2,
        paddingVertical: commonStyles.mainSidePadding / 3,
        borderBottomColor: commonStyles.separatorColor,
        borderBottomWidth: 1,
    },

    rowLabel: commonStyles.secondaryText,

    rowValue: {
        ...commonStyles.baseText,
        marginTop: 4,
    },
})
