import React, { useContext, useState } from "react";
import styled from "styled-components/native"
import { TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { FadeInView } from "../../../components/animations/fade.animation";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component"
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { RestaurantList } from "../components/restaurant-list.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouriteContext } from "../../../services/favourites/favourites.context";

const LoadingContainer = styled.View`
    position: absolute;
    top: 50%; 
    left:50%;
`;

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`;

export const RestaurantsScreen = ({navigation}) => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext);
    const { favourites } = useContext(FavouriteContext);

    const [ isToggled, setIsToggled ] = useState(false); 

    return (
        <SafeArea>
            { isLoading && (
                <LoadingContainer>
                    <Loading size={50} animating={true} color={Colors.blue300} />
                </LoadingContainer>
            )}
            <Search
                isFavouritesToggled={isToggled}
                onFavouritesToggle={() => setIsToggled(!isToggled)}
            />
            { isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate}/> }
            <RestaurantList
                data={restaurants}
                renderItem={({item}) => {
                    return ( 
                        <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {restaurant: item})}>
                            <Spacer position={"bottom"} size="large">
                                <FadeInView>
                                    <RestaurantInfoCard restaurant={item}/> 
                                </FadeInView>
                            </Spacer>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    );
}