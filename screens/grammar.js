import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';
import layoutStyle from '../assets/styles/layout.style';
import { Actions } from 'react-native-router-flux';
import style from '../assets/styles/screens/vocabulary.style';
import LinearGradient from 'react-native-linear-gradient';
import Data from '../data/grammar/grammarData'
export default class Grammar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topicGrammars: []
        }
    }
    componentDidMount() {
        this.getListData()
    }
    getListData = () => {
        this.setState({ topicGrammars: Data.getGrammarData() })
    }
    render() {
        const { topicGrammars } = this.state;
        return (
            <View style = {style.container}>
                <FlatList 
                    data ={topicGrammars}
                    extraData = {this.state}
                    keyExtractor = {(item,index) => index.toString()}
                    renderItem = {({ item, index}) => 
                        <LinearGradient colors ={['#6e8f91', '#6e8f91']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={style.containView} >
                            <TouchableOpacity style={style.containText} onPress ={() => Actions.listGrammars({ data: item.data, title: item.title })} >
                            <Text style={layoutStyle.textBoldLarge}>{item.title}</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    }
                />
            </View>
        )
    }
}