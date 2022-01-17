import React, { useEffect, useState } from "react";
import { TextInput, View, Text, FlatList, Image } from "react-native";
import { Link } from 'react-router-native';
import Bar from "../../components/Bar";
import SearchSVG from "../../assets/search_white_48dp.svg";
import styles from "./styles";
import { Cinza, Branco } from "../../styles";
import Item from "../../components/Item";
import Pagination from "../../components/Pagination";
import Store from "../../services/store";
import { api } from '../../services/api';

const mockProduto = [
  {
    id: 1,
    produto: "NOTEBOOK",
    marca: "DELL",
    codigo: 12345,
    modelo: "XPS-13",
    disponivel: true,
    image: {
      cancelled: false,
      height: 960,
      type: "image",
      uri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/UNVERIFIED-192.168.0.104-App/ImagePicker/9bfe6c2c-9a49-4b3a-ad00-282b80ad8d3a.jpg",
      width: 960,
    },
  },
  {
    id: 2,
    produto: "NOTEBOOK",
    marca: "DELL",
    codigo: 12346,
    modelo: "XPS-13",
    disponivel: true,
    image: {
      cancelled: false,
      height: 960,
      type: "image",
      uri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/UNVERIFIED-192.168.0.104-App/ImagePicker/9bfe6c2c-9a49-4b3a-ad00-282b80ad8d3a.jpg",
      width: 960,
    },
  },
  {
    id: 3,
    produto: "NOTEBOOK",
    marca: "DELL",
    codigo: 12347,
    modelo: "XPS-13",
    disponivel: false,
    image: {
      cancelled: false,
      height: 960,
      type: "image",
      uri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/UNVERIFIED-192.168.0.104-App/ImagePicker/9bfe6c2c-9a49-4b3a-ad00-282b80ad8d3a.jpg",
      width: 960,
    }
  },
];


function Search() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAllProducts() {
      const response = await api.get('/products');
      setProducts(response.data);
      setIsLoading(false);
    }

    getAllProducts();
  }, []);
 
  return (
    <View style={styles.container}>
      <Text>
        { isLoading ? 'Carregando...' : `Tenho: ${products.length} produtos` }
      </Text>

      <Bar>Pesquisar</Bar>
      <View style={styles.search}>
        <SearchSVG fill={Cinza} />
        <TextInput style={styles.input} />
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.info}>Total Disponíveis: 2</Text>
        <Text style={styles.info}>Total Cadastrados: 3</Text>
      </View>
      

      <FlatList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View style={{
            marginBottom: 10,
            backgroundColor: '#ddd',
          }}>
            <Image
              source={{ uri: item.image }}
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
              }}
            />

            <Text>PRODUCT NAME: {item.produto}</Text>
            <Text>PRODUCT MARCA: {item.marca}</Text>
            <Text>PRODUCT CODIGO: {item.codigo}</Text>
            <Text>PRODUCT MODELO: {item.modelo}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default Search;
