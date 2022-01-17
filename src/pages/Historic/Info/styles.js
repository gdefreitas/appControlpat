import { StyleSheet } from "react-native";
import { Branco, Cinza } from "../../../styles";

export default styles = StyleSheet.create({
    container: {
        marginVertical: 8,
    },
    bar: {
        width: '90%',
        borderColor: Cinza,
        borderTopWidth: 1,
        paddingBottom: 16,
        alignSelf: 'center',
        opacity: 0.5
    },
    containerInfo: {
        flexDirection: 'row',
        marginHorizontal: 32
    },
    line: {
        width: 0,
        borderLeftWidth: 1,
        borderColor: Cinza,
        justifyContent: 'space-between',
        backgroundColor: '#FF0000',
        marginRight: 32
    },
    icon: {
        marginLeft: -12,
        backgroundColor: Branco
    },
    containerDate : {
        marginBottom: 16
    },
    devolucao: {
        color: '#1EBC48',
        fontSize: 14,
        fontWeight: 'bold'
    },
    saida: {
        color: '#F51818',
        fontSize: 14,
        fontWeight: 'bold'
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Cinza
    },
    user: {
        fontSize: 15,
        color: Cinza
    }
})