import { StyleSheet } from "react-native"
import { Branco, Cinza } from "../../styles"

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 52
    },
    input: {
        marginHorizontal: 16,
        marginBottom: 16,
        marginTop: 0
    },
    upload: {
        alignItems: 'center',
        borderColor: Cinza,
        borderWidth: 1,
        marginHorizontal: 16,
        marginBottom: 32
    },
    uploadText: {
        color: Cinza,
        textTransform: 'uppercase',
        marginBottom: 16
    },
    image: {
        width: 170,
        height: 125
    },
    button: {
        marginHorizontal: 16,
        height: 52,
        justifyContent: 'center'
    },
    buttonText: {
        color: Branco
    }
})