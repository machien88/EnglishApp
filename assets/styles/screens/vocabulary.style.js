import { StyleSheet, Dimensions } from 'react-native';
const { width: widthDevice, height: heightDevice } = Dimensions.get('window');


const vocabularyStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        flexDirection: 'column',
        marginBottom: 65,
        padding:10,
        backgroundColor:'#DCDCDC'
    },
    containView:{
        flex: 1,
        height: heightDevice / 5,
        borderRadius:10,
        margin:5
    },
    containText: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default vocabularyStyle;