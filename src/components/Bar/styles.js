import { StyleSheet } from "react-native";
import { Branco } from "../../styles";

export default styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
  text: {
      flex: 1,
      textAlign: 'center',
      paddingRight: 42,
      color: Branco,
      fontSize: 16,
      fontWeight: 'bold',
      textTransform: 'uppercase'
  },
  textHome: {
      flex: 1,
      textAlign: 'center',
      color: Branco,
      fontSize: 16,
      fontWeight: 'bold',
      textTransform: 'uppercase'
  }
});
