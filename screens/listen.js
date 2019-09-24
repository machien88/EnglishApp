import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
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
            <View style={style.container}>
                <LinearGradient colors={['#0AB6DD', '#79CDCD']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }} >
                    <TouchableOpacity style={style.containText} onPress={() => Actions.listVideo({ title: 'Pronounce', playListId: 'PLnwkiTgOYjUySjZmvQ77pqz-HsWXcTYV4' })}>
                        <Text style={layoutStyle.textBoldLarge}>Pronounce</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <LinearGradient colors={['#86C891', '#43CD80']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }} >
                    <TouchableOpacity style={style.containText} onPress={() => Actions.listVideo({ title: 'Communication', playListId: 'PLxc4V8jyRl2ei5FbBsJcGaiYXtsorB8Yp' })}>
                        <Text style={layoutStyle.textBoldLarge}>Communication</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <LinearGradient colors={['#C8DD0A', '#EEE685']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }} >
                    <TouchableOpacity style={style.containText} onPress={() => Actions.listVideo({ title: 'Beginners', playListId: 'PL43YjTtbLaNQ8EcD5r4qqFytU1zkT983L' })}>
                        <Text style={layoutStyle.textBoldLarge}>Beginners</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <LinearGradient colors={['#86ACC8', '#79CDCD']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }} >
                    <TouchableOpacity style={style.containText} onPress={() => Actions.listVideo({ title: 'Elementary', playListId: 'PL43YjTtbLaNQySAV1ZSXCrlDas02l0tT4' })}>
                        <Text style={layoutStyle.textBoldLarge}>Elementary</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <LinearGradient colors={['#54FF9F', '#43CD80']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }} >
                    <TouchableOpacity style={style.containText} onPress={() => Actions.listVideo({ title: 'Pre-Intermediate', playListId: 'PL43YjTtbLaNTm6ZiaGW-Qpih5mqGipR7y' })}>
                        <Text style={layoutStyle.textBoldLarge}>Pre-Intermediate</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <LinearGradient colors={['#D35325', '#D7704B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }} >
                    <TouchableOpacity style={style.containText} onPress={() => Actions.listVideo({ title: 'Intermediate', playListId: 'PL43YjTtbLaNSvj9LGlZlHBJidyeINXAeP' })}>
                        <Text style={layoutStyle.textBoldLarge}>Intermediate</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <LinearGradient colors={['#FF4500', '#F5170B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }} >
                    <TouchableOpacity style={style.containText} onPress={() => Actions.listVideo({ title: 'Upper Intermediate', playListId: 'PL43YjTtbLaNTfIpDJ69s_qCpyyWBcF080' })}>
                        <Text style={layoutStyle.textBoldLarge}>Upper Intermediate</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        )
    }
}