import React from "react";
import { View, Text } from "react-native";
import Bar from "../../components/Bar";
import Item from "../../components/Item";
import Pagination from "../../components/Pagination";
import Info from "./Info";
import styles from "./styles";

const mockProduto = {
  id: 1,
  produto: 'NOTEBOOK',
  marca: 'DELL',
  codigo: 12345,
  modelo: 'XPS-13',
  image: {
    cancelled: false,
    height: 960,
    type: "image",
    uri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/UNVERIFIED-192.168.0.104-App/ImagePicker/9bfe6c2c-9a49-4b3a-ad00-282b80ad8d3a.jpg",
    width: 960,
  },
};

const mockDia = [
  {
    saida: 1628576400123,
    funcionario: 'GABRIEL.SOUSA',
    setor: 'TRANSPORTE',
    ramal: 169
  },
  {
    saida: 1628664401230,
    devolucao: 1629083812300,
    funcionario: 'GABRIEL.SOUSA',
    setor: 'TRANSPORTE',
    ramal: 169
  },

]

function Historic() {
  return (
    <View style={styles.container}>
      <Bar>Historico</Bar>
      <Item {...mockProduto} />
      {mockDia.map( (item, i) => <Info key={i} {...item}/>)}
      <Pagination />
    </View>
  );
}

export default Historic;
