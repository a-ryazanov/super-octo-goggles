import React from 'react'
import {ActivityIndicator, StyleSheet} from 'react-native'

import {palette} from '../styles'

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
    },
})

export const BaseLoader: React.FC = () => (
    <ActivityIndicator
        style={styles.container}
        size="large"
        color={palette.chateauGreen}
    />
)
