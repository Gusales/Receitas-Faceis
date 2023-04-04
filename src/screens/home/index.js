import { useEffect, useState } from "react";
import api from "../../services/api";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Logo } from "../../components/logo";
import { FoodCard } from "../../components/foodcard";

// Use SafeAreaView For Iphone Users

export function Home() {
  const [input, setInput] = useState("");
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      await api.get("/foods").then(({ data }) => setFoods(data));
    }

    fetchApi();
  }, []);

  function searchinput() {
    console.log(input);
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
          value={input}
          onChangeText={(text) => setInput(text)}
        />

        <TouchableOpacity onPress={searchinput}>
          <Ionicons name="search" size={22} color={"rgba(70, 189, 106, 1)"} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={foods}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodCard data={item} />}
        showsVerticalScrollIndicator={false}
      />
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
