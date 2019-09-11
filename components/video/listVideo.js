import React, { Component } from 'react'
import {
    Image,
    TouchableHighlight,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons'
import HeaderNavigation from '../../components/headerNavigation';
import layoutStyle from '../../assets/styles/layout.style';
const API_KEY = 'AIzaSyCYvyBKC-EkOLiIhTaLdPMM4eEkwQHcDCw'
const MAX_RESULT = 50
export default class ListVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }
    componentWillMount() {
        this.fetchPlaylistData();
    }
    componentDidMount() {
        this.fetchPlaylistData();
    }
    fetchPlaylistData = async () => {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${this.props.playListId}&maxResults=${MAX_RESULT}&part=snippet%2CcontentDetails&key=${API_KEY}`);
        if (response) {
            const json = await response.json();
            this.setState({ videos: json['items'] });
            console.log(this.state.videos)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderNavigation
                    content={<Text numberOfLines={1} style={layoutStyle.appTitle}>{this.props.title}</Text>}
                    actionButtonLeft={() => Actions.pop()}
                    actionButtonRight={() => Actions.drawerOpen()}
                    actionButtonLeft={() => Actions.pop()}
                    iconRight={null}
                />
                <ScrollView>
                    <View style={styles.body}>
                        {this.state.videos && this.state.videos.map((item, i) =>
                            <TouchableHighlight
                                key={i}
                                // key={item.id.videoId}
                                onPress={() => Actions.video({ youtubeId: item.contentDetails.videoId })}>
                                <View style={styles.vids}>
                                    <Image
                                        source={{ uri: item.snippet.thumbnails.medium.url }}
                                        style={{ width: 320, height: 180 }} />
                                    <View style={styles.vidItems}>
                                        <Text style={styles.vidText}>{item.snippet.title}</Text>
                                        <Icon name='more-vert' size={20} color='#555' />
                                    </View>
                                </View>
                            </TouchableHighlight>
                        )}
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 30
    },
    vids: {
        paddingBottom: 30,
        width: 320,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderBottomWidth: 0.6,
        borderColor: '#aaa'
    },
    vidItems: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10
    },
    vidText: {
        padding: 20,
        color: '#000'
    }
})
