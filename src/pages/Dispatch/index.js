import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { useRoute } from '@react-navigation/native';
import styles from "./styles";


function Dispatch() {
    const route = useRoute();

    console.log('DADOS DO ITEM: ', route.params);

    const product = route?.params;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View>
                    <View style={styles.sideBySide}>

                        <Image
                            style={{
                                height: 100,
                                width: 100,
                                borderRadius: 50
                            }}
                            /*source={{ uri: route.params.image }}*/

                        />

                        <View>
                          {/*  <Text style={styles.cardTextTitle}>{product.produto}</Text>
                            <Text style={styles.cardText}>{product.marca}</Text>
                            <Text style={styles.cardText}>{product.codigo}</Text>
                            <Text style={styles.cardText}>{product.modelo}</Text>

                         */}
                        </View>
                    </View>

                    <View style={styles.mainContent}>

                        <View>
                            <Text style={styles.descText}>Produto atualmente no Almoxarifado</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.card_Button}>
                        <Text style={styles.font_button}>Despachar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card_Button2}>
                        <Text style={styles.font_button2}>Histórico</Text>
                    </TouchableOpacity>


                </View>


            </View>

        </View>


    );
}

export default Dispatch;