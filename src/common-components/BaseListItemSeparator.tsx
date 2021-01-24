import React from 'react'
import {StyleSheet, View} from 'react-native'

import {commonStyles} from '../styles'

const styles = StyleSheet.create({
    container: {
        height: 1,
        backgroundColor: commonStyles.separatorColor,
    },
})

export const BaseListItemSeparator: React.FC = () => (
    <View style={styles.container} />
)
