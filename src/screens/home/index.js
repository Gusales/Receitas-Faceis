import { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Logo } from "../../components/logo";

// Use SafeAreaView For Iphone Users

export function Home() {
  const [food, setFood] = useState("");

  function searchFood() {
    console.log(food);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Text style={styles.title}> Encontre a receita </Text>
      <Text style={styles.title}> que combina com você </Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Digite o nome da comida"
          style={styles.input}
          value={food}
          onChangeText={(text) => setFood(text)}
        />

        <TouchableOpacity onPress={searchFood}>
          <Ionicons name="search" size={22} color={"rgba(70, 189, 106, 1)"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F9FF",
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14,
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
    color: "#0E0E0E",
  },
  form: {
    width: "100%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: 20,
    marginBottom: 20,

    padding: 14,

    backgroundColor: "#ffffff",
    borderRadius: 14,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ECECEC",
  },
  input: {
    width: "90%",
    maxHeight: "90%",
  },
});
