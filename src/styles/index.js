import { StyleSheet } from "react-native";
import { DefaultTheme } from "react-native-paper";

export const Azul = "#299FCE";
export const Vermelho = "#F82949";
export const Branco = "#FFFFFF";
export const Cinza = "#707070";

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Azul,
    error: Vermelho,
    background: Branco,
    text: Cinza,
    placeholder : Cinza
  },
};

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});