/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

let React = require('react-native');
let {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    AlertIOS
} = React;

class ReactNativeTest extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            box: {
                w: 100,
                h: 100
            }
        };
    }

    _onPress = (state) => {
        this.setState({
            box: {
                w: this.state.box.w + 10,
                h: this.state.box.h + 10
            }
        });

        if (this.state.box.w === 150) {
            AlertIOS.alert('Box size 150', null, [{
                text: 'OK',
                onPress: (text) => console.log('OK pressed'),
                type: 'default'
            }]);
        }
    }

    render(): ReactElement {
        return (
            <View style={styles.container}>
                <Text style={styles.hello}>Hello World!</Text>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit index.ios.js</Text>
                <Text style={styles.instructions}>Shake or press menu button for dev menu</Text>
                <Image source={require('./img/heart.png')} />
                <View style={[styles.box, {
                    width: this.state.box.w,
                    height: this.state.box.h
                }]}>
                </View>
                <TouchableOpacity onPress={this._onPress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Press Me!</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
};

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    hello: {
        fontSize:40,
        textAlign: 'center'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    box: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'red'
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'black'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

AppRegistry.registerComponent('ReactNativeTest', () => ReactNativeTest);
