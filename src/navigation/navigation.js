import * as React from 'react';
import { Text, Button, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import DrawerItem from '@react-navigation/drawer';
import HomeScreen from '../screens/home';
import ChatScreen from '../screens/chat';


function MainMenu ({}){
    var profileBack = require('../assest/profile/profileback.png');
    var ProfileFront = require('../assest/profile/profilefront.png');
    return(
        <View style={{flex:1, flexDirection: 'column', }}>
            <View style={{
                 backgroundColor: 'white',
                 flex: 1.5,
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    marginTop: 15,
                }}>
                    <Image 
                    source={ProfileFront} 
                    style={{
                        width: 130,
                        height: 130,
                        opacity: 0.2,
                        top:21,
                    }}>
                    </Image>
                    <Image 
                    source={ProfileFront} 
                    style={{
                        width: 100,
                        height:100,
                        marginTop: -95,
                    }}></Image>
                    <Text 
                    style={{
                        top:8,
                        fontSize:18.89,
                        fontWeight: '700',
                        color: '#6D6E9C',
                        fontFamily: 'Roboto',
                    }}>Jaykey del Mar</Text>
                    <Text 
                    style={{
                        top:4,
                        fontSize:13.22,
                        fontFamily: 'Roboto',
                        fontWeight: '400',
                        color: '#A0A8CC',
                    }}>Janedone@gmail.com</Text>
                </View>
            </View>
        </View>
    );
}



const Drawer = createDrawerNavigator();

export default function App() {

    const Baket = require('../assest/Icon/Vector.png');

    return (
        <NavigationContainer theme={MyTheme}>
            <Drawer.Navigator initialRouteName="Home" drawerContent={MainMenu} >
                <Drawer.Screen name="Deliver to Home" component={HomeScreen} options={{ headerRight: () => (<Image source={ Baket } style={{ width: 17, height: 16.15, marginRight: 20 }}></Image>) }} />
                <Drawer.Screen name="Chat" component={ChatScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 82)',
    },
  };