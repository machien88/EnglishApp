import { StyleSheet, Dimensions } from 'react-native';
const { width: widthDevice, height: heightDevice } = Dimensions.get('window');


const vocabularyStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        flexDirection: 'column',
        marginBottom: 65,
        backgroundColor:'#DCDCDC',
        padding:10,
    },
    containText: {
        flex: 1,
        height: heightDevice / 7,
        justifyContent: "center",
        borderRadius:10,
        margin:5,
        paddingLeft:20
    },
    
    
});

export default vocabularyStyle;