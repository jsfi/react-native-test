/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    Animated
} = React;

class ReactNativeTest extends React.Component {
    render(): ReactElement {
        return (
            <View style={styles.container}>
                <Text style={styles.hello}>Hello World!</Text>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit index.android.js</Text>
                <Text style={styles.instructions}>Shake or press menu button for dev menu</Text>
                <Image source={require('./img/heart.png')} />
            </View>
        );
    }
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    hello: {
        fontSize:40,
        textAlign: 'center'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('ReactNativeTest', () => ReactNativeTest);
