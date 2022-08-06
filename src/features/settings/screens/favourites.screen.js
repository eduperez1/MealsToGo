import React, { useContext } from "react"; 
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utilities/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

import { FavouriteContext } from "../../../services/favourites/favourites.context";
import { RestaurantList } from "../../restaurants/components/restaurant-list.component";

const NoFavouritesArea = styled(SafeArea)`
    align-items: center;
    justify-content: center; 
`;

export const FavouritesScreen = ({ navigation }) => {
    
    const { favourites } = useContext(FavouriteContext); 
    return favourites.length ? (
        <SafeArea>
            <RestaurantList
                data={favourites}
                keyExtractor={(item) => item.name}
                renderItem={({item}) => {
                    return ( 
                        <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {restaurant: item})}>
                            <Spacer position={"bottom"} size="large">
                                <RestaurantInfoCard restaurant={item}/> 
                            </Spacer>
                        </TouchableOpacity>
                    );
                }}   
            />
        </SafeArea>
    ) : (
        <NoFavouritesArea>
            <Text center>No favourites yet</Text>
        </NoFavouritesArea>
    )
}