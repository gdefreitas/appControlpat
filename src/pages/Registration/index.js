import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Platform, Image, Alert } from "react-native";
import { v4 as uuidv4 } from 'uuid';
import styles from "./styles.js";
import Bar from "../../components/Bar";
import * as ImagePicker from "expo-image-picker";
import UpLoad from "../../assets/cloud_upload_white_48dp.svg";
import { Button, TextInput } from "react-native-paper";
import { Cinza } from "../../styles/index.js";
import Store from "../../services/store.js";
import axios from "axios";
import { api } from "../../services/api.js";
function Registration() {
  
  const [produto, setProduto] = useState("Teste Produto");
  const [marca, setMarca] = useState("Teste marca");
  const [codigo, setCodigo] = useState("Reste código");
  const [modelo, setModelo] = useState("Teste modelo");
  const [quantidade, setQuantidade] = useState("Teste quantidade");
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);

    }
  };

  const post = async () => {
    if (!produto || !marca || !codigo || !modelo || !quantidade) {
      Alert.alert(
        "Error",
        "Preencha todos os campos para cadastrar um novo produto",
        [
          {
            text: "OK",
            onPress: () => {}
          }
        ]
      )
      return;
    }


    const randomId = uuidv4();

    const productStock = {
      id: randomId,
      amount: quantidade,
    };

    const data = {
      'id': randomId,
      'produto': produto,
      'marca': marca,
      'codigo': codigo,
      'modelo': modelo,
      'image': image
    }

    try {
      

      const productResponse = await api.post('/products', data);
      // Caso o ID do produto no db.json vier diferente do id do produto em stock, deve ser passado no lugar do productStock o objeto com:
      // { id: productResponse.data.id, amount: quantidade  }
      const stockResponse = await api.post('/stock', productStock);

      console.log('Caiu aqui');

      console.log('Dados retornados do produto: ', productResponse.data);
      console.log('Dados retornados do stock: ', stockResponse.data);

      if (productResponse && stockResponse) {
        Alert.alert(
          "Registrado com sucesso",
          "O produto foi registrado com sucesso!",
        );
      }
    } catch (err) {
      console.log(err);

      Alert.alert(
        "Erro ao registrar",
        "Ocorreu um erro ao realizar o cadastro do produto",
      );
    }

    

   /* await fetch("http:// 192.168.0.104:3000/products", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST", 
      body: JSON.stringify(data)
    })
  */

    
    setProduto('');
    setMarca('');
    setCodigo('');
    setModelo('');
    setQuantidade('');
  }

  return (
    <View style={styles.container}>
      <Bar>Cadastro</Bar>
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Produto"
        value={produto}
        onChangeText={(text) => setProduto(text)}
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Marca"
        value={marca}
        onChangeText={(text) => setMarca(text)}
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Codigo"
        value={codigo}
        onChangeText={(text) => setCodigo(text)}
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Modelo"
        value={modelo}
        onChangeText={(text) => setModelo(text)}
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Quantidade"
        value={quantidade}
        onChangeText={(text) => setQuantidade(text)}
      />
      <TouchableOpacity
        style={styles.upload}
        onPress={pickImage}
        activeOpacity={0.8}
      >
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <>
            <UpLoad fill={Cinza} height="100" width="100" />
            <Text style={styles.uploadText}>Carregar Foto</Text>
          </>
        )}
      </TouchableOpacity>
      <Button
        style={styles.button}
        mode="contained"
        onPress={post}
        
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
        
      </Button>
    </View>
  );
}

export default Registration;
