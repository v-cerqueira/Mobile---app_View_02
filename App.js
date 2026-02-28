import React from "react";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View style={{ backgroundColor: "#B7E321", width: "100%", height: "100%" }}>

      {/* Vermelho */}
      <View
        style={{
          backgroundColor: "red",
          width: "90%",
          height: 80,
          marginTop: 30,
          marginLeft: 20,
          borderWidth: 3,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text style={{ margin: 10 }}>COMPONENTE VIEW</Text>
      </View>

      {/* Amarelo */}
      <View
        style={{
          backgroundColor: "yellow",
          width: "90%",
          height: 300,
          marginTop: 20,
          marginLeft: 20,
          borderWidth: 3,
        }}
      >
        <Text style={{ margin: 10, fontSize: 22 }}>CONTEÚDO</Text>
      </View>

      {/* Cinza */}
      <View
        style={{
          backgroundColor: "gray",
          width: "90%",
          height: 80,
          marginTop: 20,
          marginLeft: 20,
          borderWidth: 3,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <Text style={{ marginLeft: 10, marginTop: 10 }}>&lt;VINICIUS CERQUEIRA SILVA&gt;</Text>
        <Text style={{ marginLeft: 10 }}>&lt;02/02/1999&gt;</Text>
      </View>

    </View>
  );
}