import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import YouTube from 'react-native-youtube';
import HeaderNavigation from '../../components/headerNavigation';
import layoutStyle from '../../assets/styles/layout.style';
import { Actions } from 'react-native-router-flux';
export default class PlayVideo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderNavigation
                    content={<Text numberOfLines={1} style={layoutStyle.appTitle}>Listen</Text>}
                    actionButtonLeft={() => Actions.pop()}
                    actionButtonRight={() => Actions.drawerOpen()}
                    actionButtonLeft={() => Actions.pop()}
                    iconRight={null}
                />
                <View style={styles.containVideo}>
                    <YouTube
                        videoId={this.props.youtubeId}
                        play={true}
                        fullscreen={true}
                        loop={false}
                        apiKey={'AIzaSyBJ3ntReiv0L19H2RoYW62LpRdIuyPhIpw'}
                        onReady={e => this.setState({ isReady: true })}
                        onChangeState={e => this.setState({ status: e.state })}
                        onChangeQuality={e => this.setState({ quality: e.quality })}
                        onError={e => this.setState({ error: e.error })}
                        style={{ alignSelf: 'stretch', height: 300,width:'100%' }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containVideo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})

