import React, { useEffect, useState } from "react";
import { TextInput, View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Link } from 'react-router-native';
import Bar from "../../components/Bar";
import SearchSVG from "../../assets/search_white_48dp.svg";
import styles from "./styles";
import { Cinza, Branco } from "../../styles";
import Item from "../../components/Item";
import Store from "../../services/store";
import { api } from '../../services/api';
import { useNavigation } from "@react-navigation/native"



function Search() {
  const [products, setProducts] = useState([]);
  const [productscopy, setProductscopy] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    async function getAllProducts() {
      const response = await api.get('/products');
      setProducts(response.data);
      setProductscopy(response.data);
      setIsLoading(false);
    }

    getAllProducts();
  }, []);

  function handleSearch(searchValue) {
    const result = productscopy
      .filter(
        (product) => product.produto
          .toLowerCase()
          .includes(searchValue.toLowerCase()),
      );
    setProducts(result);
  }

  return (
    <View style={styles.container}>



      <View style={styles.search}>
        <SearchSVG fill={Cinza} />
        <TextInput onChangeText={handleSearch} style={styles.input} />
      </View>
      <View style={styles.containerInfo}>
        {/*<Text style={styles.info}>Total Disponíveis: </Text>*/}
        <Text style={styles.info}> {isLoading ? 'Carregando...' : ` ${products.length} itens`}   Cadastrados </Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Withdraw', item)}
            style={{
              marginBottom: 10,
              backgroundColor: '#ddd',
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,

              }}
            />

            <Text style={styles.info}> NOME:   {item.produto} </Text>
            <Text style={styles.info}> MARCA:  {item.marca}   </Text>
            <Text style={styles.info}> CODIGO: {item.codigo}  </Text>
            <Text style={styles.info}> MODELO: {item.modelo}  </Text>
            {/* <Text style={styles.info}>QUANTIDADE: {item.Quantidade}</Text> */}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Search;
