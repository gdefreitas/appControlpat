import React from "react";
import {useNavigation} from  "@react-navigation/native"
import { Text, View } from "react-native";
import Bar from "../../components/Bar";
import styles from "./styles";
import ScanSVG from "../../assets/qr_code_scanner_white_48dp.svg";
import SearchSVG from "../../assets/search_white_48dp.svg";
import RegisterSVG from "../../assets/app_registration_white_48dp.svg";
import RemoveSVG from "../../assets/highlight_off_white_48dp.svg";
import { Branco, Cinza } from "../../styles";
import { Link } from "react-router-native";
import {TouchableOpacity} from "react-native"

function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Bar home>Controle de Patrimonio</Bar>

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View style={styles.card}>
        <ScanSVG fill={Cinza} />
        <Text style={styles.cardText}>Escanear</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <View style={styles.card}>
        <SearchSVG fill={Cinza} />
        <Text style={styles.cardText}>Procurar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Registration", {teste: 'ok'})}>
        <View style={styles.card}>
        <RegisterSVG fill={Cinza} />
        <Text style={styles.cardText}>Cadastrar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View style={styles.card}>
        <RemoveSVG fill={Cinza} />
        <Text style={styles.cardText}>Despachar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
