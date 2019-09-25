import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TouchableOpacity,
    StatusBar,
    Dimensions
} from 'react-native';
import style from '../assets/styles/headerNavigation.style';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * define default navigation component
 * use with props 
 */

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */

export default class HeaderNavigation extends Component {
    render(){
        // set status bar light 
        StatusBar.setBarStyle('light-content', true);
        return (
            <LinearGradient colors={['#2bd4ae','#2bd4ae' ]} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={style.nav_container} >
                <StatusBar barStyle="light-content"/>
                <TouchableOpacity onPress={ this.props.actionButtonLeft } style={style.nav_back} >
                    { this.props.iconLeft }
                </TouchableOpacity>
                <View style={style.nav_title}>
                    { this.props.content }
                </View>
                <TouchableOpacity style={style.nav_menu} onPress={ this.props.actionButtonRight }>
                    { this.props.iconRight }
                </TouchableOpacity>
            </LinearGradient>
        )
    }
}

HeaderNavigation.defaultProps = {
    backgroundColor: '#0e1944',
    content: "Metiz Title",
    actionButtonLeft: ()=>{ },
    actionButtonRight: ()=>{ },
    iconLeft: <Icon name="ios-arrow-back" size={widthDevice/12} color="#fff" />,
    iconRight: <Icon name="ios-menu" size={widthDevice/10} color="#fff" />
}

HeaderNavigation.propTypes = {
    content : PropTypes.element.isRequired,
    backgroundColor: PropTypes.string,
    actionButtonLeft : PropTypes.func.isRequired,
    actionButtonRight : PropTypes.func.isRequired,
    iconLeft: PropTypes.element,
    iconRight: PropTypes.element
};
