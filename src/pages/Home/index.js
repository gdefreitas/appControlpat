import React from "react";
import { Text, View } from "react-native";
import Bar from "../../components/Bar";
import styles from "./styles";
import ScanSVG from "../../assets/qr_code_scanner_white_48dp.svg";
import SearchSVG from "../../assets/search_white_48dp.svg";
import RegisterSVG from "../../assets/app_registration_white_48dp.svg";
import RemoveSVG from "../../assets/highlight_off_white_48dp.svg";
import { Branco, Cinza } from "../../styles";
import { Link } from "react-router-native";


function Home() {
  return (
    <View style={styles.container}>
      <Bar home>Controle de Patrimonio</Bar>
      <Link to="/" underlayColor={Branco}>
        <View style={styles.card}>
        <ScanSVG fill={Cinza} />
        <Text style={styles.cardText}>Escanear</Text>
        </View>
      </Link>
      <Link to="/search" underlayColor={Branco}>
        <View style={styles.card}>
        <SearchSVG fill={Cinza} />
        <Text style={styles.cardText}>Procurar</Text>
        </View>
      </Link>
      <Link to="/registration" underlayColor={Branco}>
        <View style={styles.card}>
        <RegisterSVG fill={Cinza} />
        <Text style={styles.cardText}>Cadastrar</Text>
        </View>
      </Link>
      <Link to="/" underlayColor={Branco}>
        <View style={styles.card}>
        <RemoveSVG fill={Cinza} />
        <Text style={styles.cardText}>Despachar</Text>
        </View>
      </Link>
    </View>
  );
}

export default Home;
