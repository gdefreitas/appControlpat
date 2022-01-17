import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Circle from "../../../assets/circle_black_24dp.svg";
import CircleAtivo from "../../../assets/circle_colorfull_24dp.svg";
import { Cinza, Vermelho } from "../../../styles";
import { dateFormated } from "../../../services/Date";

function Info({ saida, devolucao, funcionario, setor, ramal }) {
  return (
    <View style={styles.container}>
      <View style={styles.bar} />
      <View style={styles.containerInfo}>
        <View style={styles.line}>
            {devolucao ? <CircleAtivo style={styles.icon} fill={'#00FF00'} /> : <Circle style={styles.icon} fill={Cinza} />}
          <CircleAtivo style={styles.icon} fill={Vermelho} />
        </View>
        <View>
          {devolucao && (
            <View style={styles.containerDate}>
              <Text style={styles.devolucao}>DEVOLUÇÃO</Text>
              <Text style={styles.date}>{dateFormated(devolucao)}</Text>
            </View>
          )}
          <View style={styles.containerDate}>
            <Text style={styles.saida}>SAIDA</Text>
            <Text style={styles.date}>{dateFormated(saida)}</Text>
          </View>
          <View>
            <Text style={styles.user}>FUNCIONARIO: {funcionario}</Text>
            <Text style={styles.user}>SETOR: {setor}</Text>
            <Text style={styles.user}>RAMAL: {ramal}</Text>
          </View>
        </View>
        <Text></Text>
      </View>
    </View>
  );
}

export default Info;
