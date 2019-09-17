import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Button,
    StyleSheet
} from 'react-native';
import layoutStyle from '../../assets/styles/layout.style';
import style from '../../assets/styles/compoments/listVocabulary.style';
import LinearGradient from 'react-native-linear-gradient';
import HeaderNavigation from '../../components/headerNavigation';
import { Actions } from 'react-native-router-flux';
import dataStoryTrans from '../../data/speak/storyData'


export default class ListStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTrans: []
        }
    }
    componentDidMount() {
        this.getStoryTrans()
    }

    getStoryTrans = () => {
        this.setState({
            dataTrans: dataStoryTrans.getStory()
        });
    }

    render() {
        const { dataTrans } = this.state;
        return(
            <View style={{flex:1}}>
                 <HeaderNavigation
                    content={<Text numberOfLines={1} style={layoutStyle.textBoldLarge}>{this.props.title}</Text>}
                    actionButtonLeft={() => Actions.pop()}
                    actionButtonRight={() => Actions.drawerOpen()}
                    actionButtonLeft={() => Actions.pop()}
                    iconRight={null}
                />
                <View style={style.container}>
                  <FlatList
                    data = {this.props.data}
                    extraData = {this.state}
                    keyExtractor = {( item,index ) => index.toString()}
                    renderItem={({ item, index }) =>
                            <View>
                                <Text style={layoutStyle.textRegularMedium}>{item.content}</Text>
                            </View>
                    }
                  />
                  <TouchableOpacity  style={layoutStyle.button} onPress={() => Actions.listStoryTrans({ dataTranslate: dataTrans.data, title: "Translate"})} >
                    <Text style={layoutStyle.button}>Translate</Text>
                  </TouchableOpacity>
                </View>
            </View>
        )
    }
} 
