import { StyleSheet } from "react-native";
import { Cinza } from "../../styles";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 68,
  },
  search: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignSelf: "center",
    width: "90%",
    elevation: 4,
    borderRadius: 8,
    padding: 4,
    marginVertical: 8
  },
  input: {},
  containerInfo: {
    flexDirection: "row",
    paddingHorizontal: 32,
    justifyContent: "space-between",
  },
  info: {
    fontSize: 16,
    fontWeight: "bold",
    color: Cinza,
  },
  list: {
    margin: 0,
    padding: 0,
  },
  div: {
      borderTopWidth: 1,
      borderTopColor: Cinza,
      width: '90%',
      alignSelf: 'center',
      opacity: 0.5
  }
});
