// タブを使用した最小限のサンプルプログラム
import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

// Otherスクリーンを追加してみた。ちゃんと動いた
class OtherScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Other dayo!!!</Text>
            </View>
        )
    }
}

export default createBottomTabNavigator(
// 第1引数は表示するコンポーネントをまとめて記述
// ここに書くだけでタブに追加されるっぽい。便利すぎる
    {
        Home: { screen: HomeScreen },
        Settings: { screen: SettingsScreen },
        Other: { screen: OtherScreen },
    }
);