import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
import WebView from "react-native-webview";
import { Platform } from "react-native";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const FavouritesWrapper = styled.View`
  padding-right: 10px;
  padding-left: 10px;
`;

const isAndroid = Platform.OS === "android";
export const FavouritesBar = ({ favourites, onNavigate, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;
  if (!favourites.length) {
    return (
      <Text variant="caption" style={{ paddingLeft: 20 }}>
        No favourites Yet
      </Text>
    );
  }
  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => {
                  onNavigate("RestaurantDetails", {
                    restaurant,
                  });
                }}
              >
                <Item>
                  <Image source={{ uri: restaurant.photos[0] }} />
                  <Text center variant="caption" numberOfLines={3}>
                    {restaurant.name}
                  </Text>
                </Item>
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
