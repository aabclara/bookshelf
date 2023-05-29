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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
  },
  img: {
    height: "100%",
    width: Dimensions.get('window').width
  },
  meio: {
    alignItems: "center",
  }
});
  
  