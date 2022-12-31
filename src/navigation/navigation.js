import * as React from 'react';
import { Button, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/home';
import ChatScreen from '../screens/chat';

const Drawer = createDrawerNavigator();

export default function App() {

    const Baket = require('../assest/Icon/Vector.png');

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Deliver to Home" component={HomeScreen} options={{ headerRight: () => (<Image source={ Baket } style={{ width: 17, height: 16.15, marginRight: 20 }}></Image>) }} />
                {/* <Drawer.Screen name="Deliver to Home" component={HomeScreen} /> */}
                <Drawer.Screen name="Chat" component={ChatScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}