import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import { Image } from 'react-native';
import HomeScreen from '../screens/home';
import ChatScreen from '../screens/chat';

const Drawer = createDrawerNavigator();

export default function App() {

    // var Baket = require("./img/Icon");

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                {/* <Drawer.Screen name="Deliver to Home" component={HomeScreen} options={{ headerRight: () => (<Image source={ Baket } style={{ width: 25, height: 25, marginRight: 20, opacity: 0.7 }}></Image>) }} /> */}
                <Drawer.Screen name="Deliver to Home" component={HomeScreen} />
                <Drawer.Screen name="Chat" component={ChatScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}