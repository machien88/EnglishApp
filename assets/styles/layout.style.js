import { StyleSheet,Dimensions } from 'react-native';

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */

const layoutStyle = StyleSheet.create({
    /* Start content APP style */
    container: {
        flex: 1,
        backgroundColor:'#fff'
    },
    /** text bold */
    textBoldNomal:{
        color:'#333',
        fontSize: widthDevice*0.035,
        fontFamily:'Quicksand-Bold'
    },
    textBoldMedium:{
        color:'#333',
        fontSize: widthDevice*0.04,
        fontFamily:'Quicksand-Bold'
    },
    textBoldLarge:{
        color:'#fff',
        fontSize: widthDevice*0.05,
        fontFamily:'Quicksand-Bold'
    },
    /** text Regular */
    textRegularNomal:{
        color:'#333',
        fontSize: widthDevice*0.035,
        fontFamily:'Quicksand-Regular'
    },
    textRegularMedium:{
        color:'#333',
        fontSize: widthDevice*0.04,
        fontFamily:'Quicksand-Regular'
    },
    textRegularLarge:{
        color:'#333',
        fontSize: widthDevice*0.045,
        fontFamily:'Quicksand-Regular'
    },
    text_center:{
        textAlign:'center'
    },
    button_translate: {
        backgroundColor: '#009966',
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default layoutStyle;
