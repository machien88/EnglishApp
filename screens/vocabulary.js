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
import Data from '../data/vocabulary/vocabularyData'
export default class Vocabulary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topicVocabularys: []
        }
    }
    componentDidMount() {
        this.getListData();
    }
    getListData = () => {
        console.log('aaaaaaa', Data.getVocabularysData())
        this.setState({ topicVocabularys: Data.getVocabularysData() });
    }
    render() {
        const { topicVocabularys } = this.state;
        return (
            <View style={style.container}>
                <FlatList
                    data={topicVocabularys}
                    extraData={this.state}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) =>
                        <LinearGradient colors={['#1790a0', '#1790a0']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={style.containView} >
                            <TouchableOpacity style={style.containText} onPress={() => Actions.listVocabulary({ data: item.data, title: item.title })}>
                                <Text style={layoutStyle.textBoldLarge}>{item.title}</Text>
                                <Text style={layoutStyle.textBoldLarge}>{item.description}</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    }
                />
            </View>
        )
    }
}