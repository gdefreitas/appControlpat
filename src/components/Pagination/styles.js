import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Cinza } from "../../styles";

export default styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'absolute',
        flex: 1,
        bottom: 0,
        height: 52,
        alignItems: 'center'
    },
    bar: {
        width: '90%',
        borderColor: Cinza,
        borderTopWidth: 1,
        paddingBottom: 16
    },
    menu: {
        paddingHorizontal: 32,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menuText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Cinza
    }
})