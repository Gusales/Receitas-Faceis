import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { Entypo } from "@expo/vector-icons";

export function Detail() {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.data
        ? route.params?.data.name
        : "Detalhes da Receita",

      headerRight: () => (
        <Pressable
          onPress={() => {
            console.log("Clicassste no botãaaaaaaaao???");
          }}
        >
          <Entypo name="heart" size={28} color="#ff4141" />
        </Pressable>
      ),
    });
  }, [navigation, route.params?.data]);

  return (
    <View>
      <Text> WORKING DETAILS PAGE... </Text>
      <Text> {route.params?.data.name} </Text>
    </View>
  );
}
