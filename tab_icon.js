// タブをアイコン表示にしたサンプルプログラム
import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

export default createBottomTabNavigator(
    // 第1引数はタブで表示するコンポーネントを記述
    {
        Home: HomeScreen,
        Settings: SettingsScreen,
    },
    // 第2引数はタブに関する設定を書く
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    // ライブラリios-options-outlineが存在しないから以下のコードではWarningが出る
                    // iconName = `ios-options${focused ? '' : '-outline'}`;
                    // Warningが嫌なのでとりあえずテキトーなアイコンに設定しておく
                    iconName = focused ? 'ios-options' : 'ios-arrow-down';
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);