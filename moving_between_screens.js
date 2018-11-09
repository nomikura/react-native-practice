// ボタンによる画面遷移のサンプルプログラム
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Details.. again"
                    // Detailsを新しい画面で開く
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="Go to Home"
                    // Homeへ遷移
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    // ひとつ前の画面へ戻る
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    // 表示に使うコンポーネントを用意する
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        // initialRouteNameで指定されたコンポーネントが最初に表示される
        initialRouteName: 'Home',
    }
);

// ここから呼び出すっぽい？
export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}