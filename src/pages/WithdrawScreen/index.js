import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Bar from "../../components/Bar";
import { Branco } from "../../styles";
import styles from "./styles";


function Withdraw() {
    return (
        <View style={styles.container}>
            <Bar >RETIRADA</Bar>
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
                            <Text style={styles.descText}>Produto atualmente no Almoxarifado</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.card_Button}>
                        <Text style ={styles.font_button}>Retirar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card_Button2}>
                        <Text style={styles.font_button2}>Histórico</Text>
                    </TouchableOpacity>


                </View>


            </View>

        </View>


    );
}

export default Withdraw;