import * as React from 'react';
import { Text, Button, View, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import DrawerItem from '@react-navigation/drawer';
import HomeScreen from '../screens/home';
import PaymentMethod from '../screens/payment';
import OrderHistory from '../screens/history';
import Address from '../screens/address';
import Pizzaone from '../screens/CreatePizza/createpizza1';
import Pizzatwo from '../screens/CreatePizza/createpizza2';
import LinearGradient from 'react-native-linear-gradient';



function MainMenu({ navigation }) {
    var ProfileFront = require('../assest/profile/profilefront.png');
    var profileIcon = require('../assest/drawerIcon/Vector.png');
    var paymentIcon = require('../assest/drawerIcon/Payment.png');
    var orderHistory = require('../assest/drawerIcon/OrderHistory.png');
    var address = require('../assest/drawerIcon/Location.png');
    var helpCenter = require('../assest/drawerIcon/Help.png');
    var setting = require('../assest/drawerIcon/Settings.png');
    var logout = require('../assest/drawerIcon/log.png');
    var logarrow = require('../assest/drawerIcon/logarrow.png');
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
            }}>
            <View style={{
                backgroundColor: 'white',
                flex: 1.18,
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
                            top: 21,
                        }}>
                    </Image>
                    <Image
                        source={ProfileFront}
                        style={{
                            width: 100,
                            height: 100,
                            marginTop: -95,
                        }}></Image>
                    <Text
                        style={{
                            top: 8,
                            fontSize: 18.89,
                            fontWeight: '700',
                            color: '#6D6E9C',
                            fontFamily: 'Roboto',
                        }}>Jaykey del Mar</Text>
                    <Text
                        style={{
                            top: 4,
                            fontSize: 13.22,
                            fontFamily: 'Roboto',
                            fontWeight: '400',
                            color: '#A0A8CC',
                        }}>Janedone@gmail.com
                    </Text>
                </View>
            </View>
            <View
                style={{
                    top: 18,
                    backgroundColor: '#F4F3F9',
                    flex: 2,
                }}>
                <View
                    style={{
                        height: 280,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 40,
                            width: 200,
                            padding: 3,
                        }}>
                        <Image
                            source={profileIcon}
                            style={{
                                left: 10,
                                width: 20,
                                height: 19,
                                color: '#F5313F',
                            }}>
                        </Image>
                        <TouchableOpacity>
                            <Text
                                onPress={() => navigation.navigate('Home')}
                                style={{
                                    color: '#6D6E9C',
                                    left: 53,
                                    letterSpacing: 1,
                                    fontSize: 15,
                                    bottom: 1,
                                    fontWeight: '600',
                                }}>
                                Profile
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            width: 200,
                            padding: 3,
                        }}>
                        <Image
                            source={paymentIcon}
                            style={{
                                left: 10,
                                width: 25,
                                height: 15,
                                color: '#F5313F',
                            }}>
                        </Image>
                        <TouchableOpacity>
                            <Text
                                onPress={() => navigation.navigate('Payment')}
                                style={{
                                    color: '#6D6E9C',
                                    left: 48,
                                    letterSpacing: 0.5,
                                    fontSize: 15,
                                    bottom: 5,
                                    fontWeight: '600',
                                }}>
                                Payment Method
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            width: 200,
                            padding: 3,
                        }}>
                        <Image
                            source={orderHistory}
                            style={{
                                left: 10.8,
                                width: 20,
                                bottom: 3,
                                height: 21,
                                color: '#F5313F',
                            }}>
                        </Image>
                        <TouchableOpacity>
                            <Text
                                onPress={() => navigation.navigate('History')}
                                style={{
                                    color: '#6D6E9C',
                                    left: 52.8,
                                    letterSpacing: 0.8,
                                    fontSize: 15,
                                    bottom: 5.3,
                                    fontWeight: '600',
                                }}>
                                Order History
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            width: 200,
                            padding: 3,
                        }}>
                        <Image
                            source={address}
                            style={{
                                left: 12.8,
                                width: 17,
                                bottom: 3,
                                height: 19,
                                color: '#F5313F',
                            }}>
                        </Image>
                        <TouchableOpacity>
                            <Text
                                onPress={() => navigation.navigate('Address')}
                                style={{
                                    color: '#6D6E9C',
                                    left: 55.8,
                                    letterSpacing: 1,
                                    fontSize: 15,
                                    bottom: 5.3,
                                    fontWeight: '600',
                                }}>
                                Addresses
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            width: 200,
                            padding: 3,
                        }}>
                        <Image
                            source={helpCenter}
                            style={{
                                left: 12,
                                width: 20,
                                bottom: 3,
                                height: 19,
                                color: '#F5313F',
                            }}>
                        </Image>
                        <TouchableOpacity>
                            <Text
                                // onPress={() => navigation.navigate('Home')} 
                                style={{
                                    color: '#6D6E9C',
                                    left: 53.5,
                                    letterSpacing: 1,
                                    fontSize: 15,
                                    bottom: 5.3,
                                    fontWeight: '600',
                                }}>
                                Help Center
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#ffffff'
                }}>
                <View
                    style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        marginTop: 40,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            width: 200,
                            padding: 3,
                        }}>
                        <Image
                            source={setting}
                            style={{
                                left: 12,
                            }}>
                        </Image>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    left: 53.5,
                                    fontSize: 16,
                                    color: '#6D6E9C',
                                    letterSpacing: 1,
                                    fontFamily: 'Roboto',
                                    fontWeight: '700',
                                    bottom: 1.3,
                                }}>
                                Settings
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            width: 200,
                            padding: 3,
                        }}>
                        <Image
                            source={logout}
                            style={{
                                left: 15.8,
                            }}>
                        </Image>
                        <Image
                            source={logarrow}
                            style={{
                                left: -7.5,
                                top: 5
                            }}>
                        </Image>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    left: 41,
                                    fontSize: 16,
                                    color: '#6D6E9C',
                                    letterSpacing: 1,
                                    fontFamily: 'Roboto',
                                    fontWeight: '900',
                                    bottom: 2,
                                }}>
                                Log out
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}



const Drawer = createDrawerNavigator();

export default function App() {

    var Baket = require('../assest/Icon/Vector.png');
    var homeImag = require('../assest/Icon/home.png');

    return (
        <NavigationContainer theme={MyTheme}>
            <Drawer.Navigator initialRouteName="Home" drawerContent={MainMenu} >
                <Drawer.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{

                        title: 'Deliever to Home:',
                        headerRight: () =>
                        (<TouchableOpacity>
                            <Image source={Baket}
                                style={{
                                    width: 17,
                                    height: 16.15,
                                    marginRight: 20
                                }}>
                            </Image>
                        </TouchableOpacity>)
                    }} />
                <Drawer.Screen
                    name="Payment"
                    component={PaymentMethod}
                    options={{
                        title: "Uncle John Pizzas",
                        headerTitleAlign: 'center',
                        headerTitleStyle:
                        {
                            fontWeight: '300',
                            letterSpacing: 0.3,
                            color: '#6D6E9C',
                        },
                        headerStyle: { backgroundColor: '#ffffff' },
                        headerRight: () => (
                            <TouchableOpacity>
                                <Image
                                    source={homeImag}
                                    style={{
                                        width: 17,
                                        height: 16.15,
                                        marginRight: 20,
                                    }}>
                                </Image>
                            </TouchableOpacity>)
                    }} />
                <Drawer.Screen
                    name="History"
                    component={OrderHistory}
                    options={{
                        title: "Uncle John Pizzas",
                        headerTitleAlign: 'center',
                        headerTitleStyle:
                        {
                            fontWeight: '300',
                            letterSpacing: 0.3,
                            color: '#6D6E9C',
                        },
                        headerStyle: { backgroundColor: '#ffffff' },
                        headerRight: () => (
                            <TouchableOpacity>
                                <Image
                                    source={homeImag}
                                    style={{
                                        width: 17,
                                        height: 16.15,
                                        marginRight: 20,
                                    }}>
                                </Image>
                            </TouchableOpacity>)
                    }} />
                <Drawer.Screen
                    name="Address"
                    component={Address}
                    options={{
                        title: "Deliver to: Home",
                        left: -10,
                        // headerTitleAlign: 'center',
                        headerTitleStyle:
                        {
                            fontWeight: '300',
                            letterSpacing: 0.3,
                            color: '#6D6E9C',
                        },
                        headerStyle: { backgroundColor: '#ffffff' },
                        headerRight: () => (
                            <TouchableOpacity>
                                <Image
                                    source={Baket}
                                    style={{
                                        width: 17,
                                        height: 16.15,
                                        marginRight: 20,
                                    }}>
                                </Image>
                            </TouchableOpacity>)
                    }} />
                <Drawer.Screen
                    name="Pizza1"
                    component={Pizzaone}
                    options={{
                        title: "Uncle John Pizzas ",
                        left: -10,
                        headerTitleAlign: 'center',
                        headerTitleStyle:
                        {
                            fontWeight: '300',
                            letterSpacing: 0.3,
                            color: '#6D6E9C',
                        },
                        headerStyle: { backgroundColor: '#ffffff' },
                        headerRight: () => (
                            <TouchableOpacity>
                                <Image
                                    source={homeImag}
                                    style={{
                                        width: 17,
                                        height: 16.15,
                                        marginRight: 20,
                                    }}>
                                </Image>
                            </TouchableOpacity>)
                    }} />
                       <Drawer.Screen
                    name="Pizza2"
                    component={Pizzatwo}
                    options={{
                        title: "Uncle John Pizzas ",
                        left: -10,
                        headerTitleAlign: 'center',
                        headerTitleStyle:
                        {
                            fontWeight: '300',
                            letterSpacing: 0.3,
                            color: '#6D6E9C',
                        },
                        headerStyle: { backgroundColor: '#ffffff' },
                        headerRight: () => (
                            <TouchableOpacity>
                                <Image
                                    source={homeImag}
                                    style={{
                                        width: 17,
                                        height: 16.15,
                                        marginRight: 20,
                                    }}>
                                </Image>
                            </TouchableOpacity>)
                    }} />
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