import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import layoutStyle from '../assets/styles/layout.style';
import { Actions } from 'react-native-router-flux';
import style from '../assets/styles/screens/vocabulary.style';
import LinearGradient from 'react-native-linear-gradient';
import Data from '../data/speak/storyData'
export default class Speak extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listStorys: []
        }
    }
    componentDidMount() {
        this.getlistStory();
    }
    getlistStory = () => {
        this.setState({ listStorys: Data.getStory() });
    }
    render() {
        const { listStorys } = this.state;
        return (
            <View>
                <FlatList 
                    data = {listStorys}
                    extraData = {this.data}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem = {( { item, index }) => 
                        <LinearGradient colors={['#FFF68F', '#EEE685']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={style.containView} >
                            <TouchableOpacity style={style.containText} onPress={() => Actions.listStorys({ data: item.data, title: item.title })}>
                                <Text style={layoutStyle.textBoldLarge}>{item.title}</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    }
                />
            </View>
        )
    }
}