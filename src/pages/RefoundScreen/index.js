import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Bar from "../../components/Bar";
import { Branco } from "../../styles";
import styles from "./styles";


function Refound() {
  return (
    <View style={styles.container}>
      <Bar>Devolução</Bar>
      <View style={styles.card}>
        <View>
          <View style={styles.sideBySide}>

            <Image
              style={styles.image}
              source={require('../../../src/assets/notebook.png')}
            />

            <View>
              <Text style={styles.cardTextTitle}>Notebook</Text>
              <Text style={styles.cardText}>MODELO: TF8-ERH</Text>
              <Text style={styles.cardText}>MARCA: DELL</Text>
              <Text style={styles.cardText}>COD: 2548-SDS</Text>
            </View>
          </View>




          <View style={styles.mainContent}>

            <View>
              <Text style={styles.descText}>Produto atualmente nas responsabilidades de GABRIEL.SOUZA</Text>
            </View>


            <View style={styles.propdesc}>
              <Text style={styles.descText}>SETOR: TRANSPORTE</Text>
              <Text style={styles.descText}>RAMAL: 169</Text>
            </View>

          </View>

          <TouchableOpacity style={styles.cardButton}>
            <Text style = {styles.fontButton}>Devolver</Text>
          </TouchableOpacity>



          <TouchableOpacity style={styles.cardButton2}>
            <Text style = {styles.fontButton2}>Histórico</Text>
          </TouchableOpacity>


        </View>

        
      </View>

    </View>


  );
}

export default Refound;