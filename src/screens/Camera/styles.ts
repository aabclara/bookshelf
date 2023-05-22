import { Dimensions, StyleSheet } from "react-native"
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
    justifyContent: "flex-end"
    
  },
  camera2: {
    flex: 1,
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
    justifyContent: "center",
    alignItems: "center"
    
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  img: {
    height: "100%",
    width: Dimensions.get('window').width
  },
  botao1: {
    width: "50%",
    alignItems: "flex-end"
  },
  botao2: {
    width: "35%",
    alignItems: "flex-end",
    marginRight: 5
  },
  voltar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
    marginLeft: 5,
  },
  botaocima: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 5,
    marginTop: 120
  },
  ladinho: {
    flexDirection: "row",
    alignItems: "center"
  },
  setinha: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 50
  }
});
  
  