import React from 'react'; 

import { createStackNavigator } from '@react-navigation/stack';

import { SettingsScreen } from '../../features/settings/screens/settings.screen';
import { FavouritesScreen } from '../../features/settings/screens/favourites.screen';
import { CameraScreen } from '../../features/settings/screens/camera.screen';

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
            <SettingsStack.Screen
                name="Camera"
                component={CameraScreen}
                options={{ headerShown: "screen" }}
            />
        </SettingsStack.Navigator>
    );
}