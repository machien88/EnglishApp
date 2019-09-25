import { StyleSheet, Dimensions } from 'react-native';
const { width: widthDevice, height: heightDevice } = Dimensions.get('window');


const translateStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    containText: {
        flex: 1,
        height: heightDevice / 6,
        justifyContent: "center",
        borderRadius:10,
        margin:5,
        paddingLeft:20
    }
});

export default translateStyle;