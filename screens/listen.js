import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import layoutStyle from '../assets/styles/layout.style';
import { Actions } from 'react-native-router-flux';
import style from '../assets/styles/screens/listen.style';
import LinearGradient from 'react-native-linear-gradient';
export default class Listen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollView >
                <View style={style.container}>
                    <LinearGradient colors={['#66bece', '#66bece']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={style.containView} >
                        <TouchableOpacity style={style.containText} onPress={() => Actions.listVideo({ title: 'Pronounce', playListId: 'PLnwkiTgOYjUySjZmvQ77pqz-HsWXcTYV4' })}>
                            <Text style={layoutStyle.textBoldLarge}>Pronounce</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient colors={['#29d641', '#29d641']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={style.containView} >
                        <TouchableOpacity style={style.containText} onPress={() => Actions.listVideo({ title: 'Communication', playListId: 'PLxc4V8jyRl2ei5FbBsJcGaiYXtsorB8Yp' })}>
                            <Text style={layoutStyle.textBoldLarge}>Communication</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient colors={['#d6e236', '#d6e236']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={style.containView} >
                        <TouchableOpacity style={style.containText} onPress={() => Actions.listVideo({ title: 'Beginners', playListId: 'PL43YjTtbLaNQ8EcD5r4qqFytU1zkT983L' })}>
                            <Text style={layoutStyle.textBoldLarge}>Beginners</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient colors={['#4795b8', '#4795b8']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={style.containView}>
                        <TouchableOpacity style={style.containText} onPress={() => Actions.listVideo({ title: 'Elementary', playListId: 'PL43YjTtbLaNQySAV1ZSXCrlDas02l0tT4' })}>
                            <Text style={layoutStyle.textBoldLarge}>Elementary</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient colors={['#33a64c', '#33a64c']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={style.containView} >
                        <TouchableOpacity style={style.containText} onPress={() => Actions.listVideo({ title: 'Pre-Intermediate', playListId: 'PL43YjTtbLaNTm6ZiaGW-Qpih5mqGipR7y' })}>
                            <Text style={layoutStyle.textBoldLarge}>Pre-Intermediate</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient colors={['#e67b1f', '#e67b1f']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={style.containView} >
                        <TouchableOpacity style={style.containText} onPress={() => Actions.listVideo({ title: 'Intermediate', playListId: 'PL43YjTtbLaNSvj9LGlZlHBJidyeINXAeP' })}>
                            <Text style={layoutStyle.textBoldLarge}>Intermediate</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient colors={['#de4921', '#de4921']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={style.containView} >
                        <TouchableOpacity style={style.containText} onPress={() => Actions.listVideo({ title: 'Upper Intermediate', playListId: 'PL43YjTtbLaNTfIpDJ69s_qCpyyWBcF080' })}>
                            <Text style={layoutStyle.textBoldLarge}>Upper Intermediate</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </ScrollView>

        )
    }
}