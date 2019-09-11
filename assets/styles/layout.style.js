import { StyleSheet,Dimensions } from 'react-native';

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */

const layoutStyle = StyleSheet.create({
    /** input common style */
    gradientInput: {
        height: 46,
        borderRadius: 23,
        borderWidth: 1,
        padding:1,
        borderColor: 'transparent',
        marginVertical:10,
        marginHorizontal:20,
    },
    wrapper_input:{
        flex:1,
        flexDirection:'row',
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: 23,
        borderWidth: 1,
        borderColor: 'transparent',
        justifyContent:'center',
        alignItems:'center',
    },
	text_input:{
		flex:1,
		paddingHorizontal:10,
        fontFamily:'Quicksand-Regular',
        textAlign: 'center',
        color : "#4a4a4a",
        fontSize: 14,
    },
    
    clear_bottom:{
        paddingBottom:100
    },
	/* Start Header APP Style */
    appTitle: {
        color:'#fff',
        fontSize: widthDevice*0.04,
        fontFamily:'Quicksand-Bold'
    },
    /* End Header APP Style */

    /* Start content APP style */
    container: {
        flex: 1,
        backgroundColor:'#fff'
    },
    /* End content APP style */

    /*Start Element Common*/

    text_button:{
        color: "rgb(255, 255, 255)",
        fontSize: widthDevice*0.04,
        fontFamily:'Quicksand-Bold'
    },
    btn_global: {
      height: 50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 30,
    },
    button:{
        flexDirection:'row',
        marginHorizontal:20,
        marginVertical:10,
    },
    touch_button:{
        flex:1,
        height:widthDevice/9,
    },
    bottom_button:{
        position:'absolute',
        bottom:10,
        backgroundColor:'#fff'
    },
    nextButton:{
        flex:1,
        borderRadius:widthDevice/18,
        height:widthDevice/9,
        justifyContent:'center',
        alignItems:'center',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation:2
    },
    itemInputRow: {
        marginHorizontal:15,
    },
    textError: {
        color:'red',
        textAlign:'center',
        fontSize: widthDevice*0.03,
        fontFamily:'Quicksand-Regular'
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
        color:'#333',
        fontSize: widthDevice*0.045,
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
    /* End Input Form */

    disableButton: {
        opacity: 0.5
    },

    /** choose password active style */
    password_tick:{
        position:'absolute',
        top:3,
        right:3,
        zIndex:999
    },

    /** check box style */
    check_box:{
        backgroundColor:'#fff',
        borderWidth:2,
        borderColor:'#92c732',
        borderRadius:widthDevice/24,
        width:widthDevice/12,
        height:widthDevice/12,
        justifyContent:'center',
        alignItems:'center',
        elevation: 2,
        shadowOffset: { width: 0.2, height: 0.2 },
        shadowOpacity: 0.8,
        shadowRadius: 1
    },
    check_box_active:{
        backgroundColor:'#92c732'
    },
    /** picker select  */
    
    icon_picker_select:{
        backgroundColor: 'transparent',
        justifyContent:'center',
        alignItems:'center',
        borderBottomRightRadius:8,
        borderTopRightRadius:8,
        overflow: 'hidden',
        width: 40,
        height: 40,
        flex:1
    },

    /** book style */

    book_item:{
        width:(widthDevice-10)/3,
        height:widthDevice*0.55,
        marginVertical:10,
        paddingHorizontal:5,
        justifyContent:'flex-start'
    },
    book_name:{
        paddingTop:5
    },
    passwordEye:{
        position:'absolute',
        zIndex:10,
        top:0,
        justifyContent:'center',
        bottom:0,
        right:15
    },
    favorite_thumbnail:{
        position:'absolute',
        top:0,
        left:10,
        height:30
    },
    favorite_thumbnail_icon:{
        width:20,
        height:30
    },
    new_thumbnail:{
        position:'absolute',
        top:0,
        right:0,
        height:30
    },
    new_thumbnail_icon:{
        width:30,
        height:30
    },
    book_status:{
        position:'absolute',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        flexDirection:'row',
        // backgroundColor:'#63be69',
        bottom:0, 
        right:0, 
        left:0, 
        height:25,
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden'
    },
    book_status_item:{
        flex:1,
        padding:3,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:1
    },
    book_status_icon:{
        flex:1
    },
    book_status_item_active:{
        backgroundColor:'#63be69',
    }
});

export default layoutStyle;
