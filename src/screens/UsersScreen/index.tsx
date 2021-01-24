import React from 'react'
import {
    StatusBar,
    TouchableOpacity,
    FlatList,
    ListRenderItem,
    Text,
} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {observer, useLocalObservable} from 'mobx-react'
import {prop, pipe, toString} from 'ramda'

import {BaseListItemSeparator} from '../../common-components'

import {useStores} from '../../stores'
import {IUserModel} from '../../stores/users-store/user'

import {commonStyles} from '../../styles'

import {USER_DETAILS_SCREEN_NAME} from '../screen-names'

import {styles} from './styles'

export const UsersScreen: React.FC = observer(() => {
    const {usersStore} = useStores()
    const navigation = useNavigation()

    const localStore = useLocalObservable(() => ({
        handleItemPress: (item: IUserModel) => {
            usersStore.setSelectedItem(item)

            navigation.navigate(USER_DETAILS_SCREEN_NAME)
        },
    }))

    const renderItem: ListRenderItem<IUserModel> = ({item}) => (
        <TouchableOpacity
            style={styles.itemContainer}
            activeOpacity={0.8}
            onPress={() => {
                localStore.handleItemPress(item)
            }}>
            <Text
                style={styles.itemMainText}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.name}
            </Text>

            <Text
                style={styles.itemSecondaryText}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.address.city}
            </Text>
        </TouchableOpacity>
    )

    return (
        <>
            <StatusBar
                backgroundColor={commonStyles.mainStatusBarColor}
                barStyle="light-content"
                animated
                translucent
            />

            <FlatList<IUserModel>
                data={usersStore.items}
                keyExtractor={pipe(prop('id'), toString)}
                renderItem={renderItem}
                ItemSeparatorComponent={BaseListItemSeparator}
                ListEmptyComponent={() => <Text>Нет данных</Text>}
                style={styles.container}
            />
        </>
    )
})
