import React, { Component } from 'react';
import { BackHandler, Alert } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Tabbar from '../components/tabbar/tabbar';
import Listen from '../screens/listen';
import Speak from '../screens/speak';
import Grammar from '../screens/grammar';
import Vocabulary from '../screens/vocabulary';
import Video from '../components/video/playVideo';
import ListVideo from '../components/video/listVideo';
import ListVocabulary from '../components/vocabulary/listVocabulary';
import ListGrammars from '../components/grammar/listGrammars'
import ListStorys from '../components/speak/listStory'
import ListTranslate from '../components/speak/listTranslate'
/**
 * route config 
 */
const transitionConfig = () => ({
    // transition effects right to left
    screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;
        const translateX = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [layout.initWidth, 0, 0]
        });
        const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
            outputRange: [0, 1, 1, 0.3, 0]
        });
        return { opacity, transform: [{ translateX }] }
    }
})

// transition effects fade animation
const fadeTransition = () => ({
    screenInterpolator: sceneProps => {
        const { position, scene } = sceneProps

        const thisSceneIndex = scene.index

        const opacity = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex],
            outputRange: [0, 1],
        })

        return { opacity }
    },
})

/** define scene use back to exit */

const backAction = () => {
    const array = [
        'listen',
        'speak',
    ]
    if (array.indexOf(Actions.currentScene) !== -1) {
        Alert.alert(
            'Thoát ứng dụng',
            'Bạn có muốn thoát không?', [{
                text: 'Huỷ',
                onPress: () => { },
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => BackHandler.exitApp()
            },], {
                cancelable: false
            }
        )
        return true;
    }
    return false;
}
export default class Routes extends Component {
    render() {
        return (
            <Router backAndroidHandler={() => backAction()}>
                <Scene key="root" transitionConfig={transitionConfig} drawerLockMode={'locked-closed'} >
                    {/* <!-- Tabbar scene --> */}
                    {/* <Scene key = "splash" component = {Splash} title = "splash" ></Scene> */}
                    <Scene key="tabbar" tabs tabBarComponent={Tabbar} type="reset" hideNavBar>
                        <Scene key="listenBar" hideNavBar>
                            <Scene key="listen" component={Listen} title="listen" />
                            <Scene key="video" component={Video} title="video"  hideTabBar={true}/>
                            <Scene key="listVideo" component={ListVideo} title="listVideo" />
                        </Scene>
                        <Scene key="speakBar" hideNavBar>
                            <Scene key="speak" component={Speak} title="speak" hideNavBar />
                            <Scene key="listStorys" component={ListStorys} title="listStorys" hideNavBar />
                            <Scene key="listTranslate" component={ListTranslate} title="listTranslate" hideNavBar/>
                        </Scene>
                        <Scene key="grammarBar" hideNavBar>
                            <Scene key="grammar" component={Grammar} title="grammar" hideNavBar />
                            <Scene key="listGrammars" component={ListGrammars} title="listGrammars" hideNavBar />
                        </Scene>
                        <Scene key="vocabularyBar" hideNavBar>
                            <Scene key="vocabulary" component={Vocabulary} title="vocabulary" hideNavBar />
                            <Scene key="listVocabulary" component={ListVocabulary} title="listVocabulary" hideNavBar />
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

