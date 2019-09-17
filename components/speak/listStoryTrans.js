import React, {Component} from 'react';
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
export default class listStoryTrans extends Component {
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
                    data = {this.props.dataTranslate}
                    extraData = {this.state}
                    keyExtractor = {( item,index ) => index.toString()}
                    renderItem={({ item, index }) =>
                            <View>
                                <Text style={layoutStyle.textRegularMedium}>{item}</Text>
                            </View>
                    }
                  />
                </View>
            </View>
        )
    }
}