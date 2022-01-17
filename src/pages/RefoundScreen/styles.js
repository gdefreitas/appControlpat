import { StyleSheet } from "react-native";
import { Branco, Azul } from "../../styles";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        margin: 16,
        padding: 32,
        borderRadius: 8,
        flexDirection: 'row',
        elevation: 4,
        backgroundColor: "#299FCE",
        width: 350,
        height: 650
    },
    cardTextTitle: {
        paddingLeft: 32,
        fontSize: 28,
        fontWeight: "bold",
        color: Branco,
    },
    cardText: {
        paddingLeft: 32,
        fontSize: 16,
        color: Branco,
        textAlign: "left"
    },
    
    cardButton: {
        margin: 16,
        padding: 32,
        borderRadius: 10,
        flexDirection: 'column',
        elevation: 4,
        backgroundColor: Branco,
        alignItems: 'center'
    },
    cardButton2: {
        margin: 16,
        padding: 32,
        borderRadius: 10,
        flexDirection: 'column',
        elevation: 4,
        backgroundColor: Azul,
        alignItems: 'center'
    },
    
    
    fontButton:{
        fontWeight: "bold",
        color: Azul
    },
    fontButton2:{
        fontWeight: "bold",
        color: Branco
    },


    image: {
        width: 108,
        height:72
    },
    sideBySide: {
        flexDirection: "row"
    },
    mainContent: {
        marginTop: 64
    },
    descText: {
        paddingLeft: 0,
        fontSize: 20,
        color: Branco,
        textAlign: "center"
    },

    descText2: {
        paddingLeft: 0,
        fontSize: 18,
        color: Branco,
        textAlign: "center"
    },
    
    fundoBranco: {
        margin: 8,
        backgroundColor: Branco,
        width: 130,
        height:90
    },

    propdesc:{
     padding: "10%"
    }



})