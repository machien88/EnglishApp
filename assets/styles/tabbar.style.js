import { ScaledSheet } from 'react-native-size-matters';
/* get width, height */

export default style = ScaledSheet.create({
    footer: {
        position: 'absolute',
        flex: 1,
        left: '0@ms',
        right: '0@ms',
        bottom: '0@ms',
        backgroundColor: '#00CCCC',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    footerMenu: {
        height:65,
        flex: 1,
        backgroundColor: '#00CCCC',
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomButtons: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: '-5@ms',
        flex: 1,
    },
    footerText: {
        color: 'white',
        alignItems: 'center',
        fontSize:'14@ms',
        fontFamily: 'Quicksand-Bold'
    },
    paddingPort:{
        flex: 1,
    }
})