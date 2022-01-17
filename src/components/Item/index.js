import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

function Item({ produto, marca, codigo, modelo, image, search, disponivel }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image.uri }} style={styles.image} />
      <View style={styles.containerText}>
        <Text style={styles.name}>{produto}</Text>
        <View>
          <Text style={styles.info}>MODELO: {modelo}</Text>
          <Text style={styles.info}>MARCA: {marca}</Text>
          <Text style={styles.info}>COD: {codigo}</Text>
        </View>
        {search ? (
          disponivel ? (
            <Text style={styles.disponivel}>DISPONIVEL</Text>
          ) : (
            <Text style={styles.indisponivel}>INDISPONIVEL</Text>
          )
        ) : null}
      </View>
    </View>
  );
}

export default Item;