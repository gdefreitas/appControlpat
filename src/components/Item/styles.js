import { StyleSheet } from "react-native";
import { Branco, Cinza } from "../../styles";

export default styles = StyleSheet.create({
 container: {
   padding: 16,
   flexDirection: 'row',
 },
 image: {
  height: 120,
  width: 120,
  borderRadius: 8,
  marginRight: 16
 },
 containerText: {
   justifyContent: 'space-between'
 },
 name: {
   fontSize: 20,
   fontWeight: 'bold',
   color: Cinza
 },
 info: {
  fontSize: 15,
  fontWeight: 'normal',
  color: Cinza,
  paddingVertical: 2
 },
 disponivel: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#1EBC48'
 },
 indisponivel: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#F51818'
 }
});
