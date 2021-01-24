import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {
    USERS_SCREEN_NAME,
    USER_DETAILS_SCREEN_NAME,
} from '../screens/screen-names'
import {UserDetailsScreen, UsersScreen} from '../screens'

export type RootParamList = {
    [USERS_SCREEN_NAME]: undefined
    [USER_DETAILS_SCREEN_NAME]: undefined
}

const Stack = createStackNavigator<RootParamList>()

const RootStack = () => {
    return (
        <Stack.Navigator initialRouteName={USERS_SCREEN_NAME}>
            <Stack.Screen
                name={USERS_SCREEN_NAME}
                component={UsersScreen}
                options={{
                    title: 'Пользователи',
                }}
            />
            <Stack.Screen
                name={USER_DETAILS_SCREEN_NAME}
                component={UserDetailsScreen}
            />
        </Stack.Navigator>
    )
}

export const RootNavigator = () => (
    <NavigationContainer>
        <RootStack />
    </NavigationContainer>
)

RootNavigator.displayName = 'RootNavigator'
