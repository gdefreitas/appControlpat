import { StyleSheet } from "react-native";
import { Cinza } from "../../styles";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 52
    },
    card: {
        margin: 16,
        padding: 32,
        borderRadius: 8,
        flexDirection: 'row',
        elevation: 4,
        alignItems: 'center',
    },
    cardText: {
        paddingLeft: 32,
        fontSize: 28,
        color: Cinza,
    }
})