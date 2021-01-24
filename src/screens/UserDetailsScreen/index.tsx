import React, {useEffect} from 'react'
import {ScrollView, View, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {observer} from 'mobx-react'

import {useStores} from '../../stores'

import {styles} from './styles'

interface ISectionView {
    // Заголовок строки
    label: string

    // Имя поля в модели, откуда берутся данные
    name: string
}

interface Dictionary {
    [key: string]: any
}

export const UserDetailsScreen: React.FC = observer(() => {
    const navigation = useNavigation()
    const {usersStore} = useStores()
    const {selectedItem} = usersStore

    if (selectedItem === null) return null

    useEffect(() => {
        navigation.setOptions({
            title: selectedItem.name,
        })
    })

    const sections: Array<ISectionView> = [
        {
            label: 'Имя пользователя',
            name: 'username',
        },
        {
            label: 'Почта',
            name: 'email',
        },
        {
            label: 'Номер телефона',
            name: 'phone',
        },
        {
            label: 'Веб-сайт',
            name: 'website',
        },
    ]

    return (
        <ScrollView style={styles.container}>
            {sections.map((section) => (
                <View key={section.label} style={styles.rowContainer}>
                    <Text style={styles.rowLabel}>{`${section.label}:`}</Text>
                    <Text style={styles.rowValue}>
                        {(selectedItem as Dictionary)[section.name]}
                    </Text>
                </View>
            ))}
        </ScrollView>
    )
})
