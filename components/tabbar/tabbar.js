import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import style from '../../assets/styles/tabbar.style';
import { Actions } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen'
export default class Tabbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        SplashScreen.hide()
    }
    render() {
        const { index } = this.props.navigation.state;
        return (
            <Animatable.View animation="slideInUp" style={style.footer} >
                <View style={style.footerMenu} >
                    <TouchableOpacity onPress={() => Actions.listenBar()} style={style.bottomButtons}>
                        <Icon name="headphones" size={32} color={index === 0 ? "#f55f22" : "#fff" } />
                        <Text style={style.footerText}>Nge</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.speakBar()} style={style.bottomButtons}>
                        <Icon name="book-reader" size={32} color={index === 1 ? "#f55f22" : "#fff" } />
                        <Text style={style.footerText}>Nói</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.grammarBar()} style={style.bottomButtons}>
                        <Icon name="book" size={32} color={index === 2 ? "#f55f22" : "#fff" }/>
                        <Text style={style.footerText}>Ngữ Pháp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.vocabularyBar()} style={style.bottomButtons}>
                        <Icon name="pen" size={32} color={index === 3 ? "#f55f22" : "#fff" }/>
                        <Text style={style.footerText}>Từ Vựng</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        )
    }
}
