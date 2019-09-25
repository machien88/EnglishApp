import { StyleSheet, Dimensions } from 'react-native';
const { width: widthDevice, height: heightDevice } = Dimensions.get('window');


const listenStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        flexDirection: 'column',
        marginBottom: 65
    },
    containView: {
        height: heightDevice / 6
    },
    containText: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default listenStyle;
