import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import layoutStyle from '../../assets/styles/layout.style';
import style from '../../assets/styles/compoments/listVocabulary.style';
import LinearGradient from 'react-native-linear-gradient';
import HeaderNavigation from '../../components/headerNavigation';
import { Actions } from 'react-native-router-flux';
export default class ListVocabulary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
                        data={this.props.data}
                        extraData={this.state}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            <LinearGradient colors={['#0A70DD', '#0F5096']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={style.containText} >
                                <TouchableOpacity>
                                    <Text style={layoutStyle.textBoldLarge}>{item.word} - {item.spelling}: {item.translate}</Text>
                                    {/* <Text style={layoutStyle.textBoldLarge}>{item.spelling}</Text>
                                    <Text style={layoutStyle.textBoldLarge}>{item.translate}</Text> */}
                                </TouchableOpacity>
                            </LinearGradient>
                        }
                    />
                </View>
            </View>
        )
    }
}