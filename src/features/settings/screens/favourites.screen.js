import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurants-info-card.component";
import { RestaurantList } from "../../restaurants/screens/restaurants.style";
import styled from "styled-components";
import { Text } from "../../../components/typography/text.component";

const NoFavourites = styled.View`
flex: 1
align-items: center 
justify-content: center
`;

export const FavouritesScreen = () => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetails", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavourites>
      <Text variant="label">You don't have any favourites yet</Text>
    </NoFavourites>
  );
};
