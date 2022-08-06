import React from 'react'; 

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { SettingsScreen } from '../../features/settings/screens/settings.screen';
import { FavouritesScreen } from '../../features/settings/screens/favourites.screen';

const SettingsStack = createStackNavigator(); 

export const SettingsNavigator = ({route, navigator}) => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ headerShown: false }}
            />
            <SettingsStack.Screen
                name="Favourites"
                component={FavouritesScreen}
                options={{ headerShown: "screen" }}
            />
        </SettingsStack.Navigator>
    );
}