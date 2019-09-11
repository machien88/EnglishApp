import { StyleSheet,Dimensions,Platform } from 'react-native';

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */

export default StyleSheet.create({
    nav_container:{
        paddingTop: (Platform.OS == 'ios') ? 20 : 0,
        height:(Platform.OS == 'ios') ? widthDevice/6 : widthDevice/8,
        flexDirection:"row",
        justifyContent:'center',
    },
    nav_back:{
        flex:1,
        paddingLeft:6,
        justifyContent:'center',
        alignItems:'center'
    },
    nav_title:{
        flex:7,
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        fontFamily:'Quicksand-Bold'
    },
    titletext:{
        fontSize:widthDevice*0.04,
        color:'#fff',
    },
    subTitle:{
        fontSize:10,
    },
    nav_menu:{
        flex:1,
        paddingLeft:6,
        justifyContent:'center',
        alignItems:'center'
    },
})
