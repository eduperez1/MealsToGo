import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Favourite } from  "../../../components/favourites/favourite.component";
import { 
    Icon, 
    Address, 
    RestaurantCard, 
    RestaurantCardCover, 
    Info, 
    Rating, 
    Section, 
    SectionEnd 
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({restaurant = {}}) => {   
    const {
        name = "Some Restaurant", 
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        ], 
        address = "100 Rando Street", 
        isOpenNow = true, 
        rating = 4, 
        isClosedTemporarily = true,
        placeId,
    } = restaurant;  

    const ratingArray = Array.from(new Array(Math.floor(rating))); 

    return (
        <RestaurantCard elevation={5}>
            <Favourite restaurant={restaurant} />
            <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
            <Info>
                <Text variant="label">{name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map((_,i) => (
                            <SvgXml 
                                key={`star-${placeId}-${i}`}
                                xml={star} 
                                width={20} 
                                height={20}/> 
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="error">
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <Spacer position="left" size="large">
                            {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}
                        </Spacer>
                        <Spacer position="left" size="large">
                            <Icon source={{ uri: icon }}/>
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
}