import { StyleSheet, Dimensions } from 'react-native';
const { width: widthDevice, height: heightDevice } = Dimensions.get('window');


const speakStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        flexDirection: 'column',
        marginBottom: 65,
        padding:10,
        backgroundColor:'#DCDCDC'
    }
})
export default speakStyle;