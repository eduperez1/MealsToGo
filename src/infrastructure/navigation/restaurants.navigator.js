import React from 'react'; 

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { RestaurantsScreen } from './../../features/restaurants/screens/restaurant.screen';
import { RestaurantDetailScreen } from './../../features/restaurants/screens/restaurant-detail.screen';

const RestaurantsStack = createStackNavigator(); 

export const RestaurantsNavigator = () => {
    return (
        <RestaurantsStack.Navigator screenOptions={TransitionPresets.ModalPresentationIOS}>
            <RestaurantsStack.Screen
                name="Restaurants"
                component={RestaurantsScreen}
                options={{ headerShown: false }}
            />
            <RestaurantsStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
                options={{ headerShown: false }}
            />
        </RestaurantsStack.Navigator>
    );
}