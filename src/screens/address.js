import { Text, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";



export default function Address({ navigation }) {
    var currentLocation = require('../assest/drawerIcon/currentl.png');
    var current = require('../assest/drawerIcon/current.png');
    var Home = require('../assest/drawerIcon/home.png');
    var location = require('../assest/drawerIcon/Location.png');
    var work = require('../assest/drawerIcon/work.png');
    var plus = require('../assest/drawerIcon/plus.png');
    return (
        <View
            style={{
                backgroundColor: '#e6ecf1',
                flex: 1,
            }}>
            <View
                style={{
                    color: '#000',
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#ffffff',
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        alignItems: 'center',
                    }}>
                    <View
                        style={{
                            width: 400,
                            // borderBottomWidth: 1,
                            borderTopWidth: 1,
                            borderColor: '#DADAE5',
                            padding: 20,
                            flexDirection: 'column',
                            width: 380,
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                width: 250,
                            }}>
                            <Image
                                source={currentLocation}
                                style={{
                                    left: 11,
                                    width: 29,
                                    height: 27,
                                }}>
                            </Image>
                            <Image
                                source={current}
                                style={{
                                    left: -7.5,
                                    top: 9.8,
                                    width: 9.33,
                                    height: 9,
                                }}>
                            </Image>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 27,
                                    fontWeight: '900',
                                    color: '#6D6E9C',
                                }}>
                                Current Location
                            </Text>

                        </View>
                    </View>
                    <View
                        style={{
                            width: 400,
                            borderTopWidth: 1,
                            borderColor: '#DADAE5',
                            paddingTop: 22,
                            paddingBottom: 33,
                            flexDirection: 'column',
                            width: 380,
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                width: 250,
                            }}>
                            <Image
                                source={Home}
                                style={{
                                    color: '#F5313F',
                                    left: 14,
                                    width: 25,
                                    height: 23,
                                }}>
                            </Image>
                            <Text
                                style={{
                                    top: -6,
                                    letterSpacing: 0.5,
                                    fontSize: 20,
                                    marginLeft: 40,
                                    fontWeight: '900',
                                    color: '#6D6E9C',
                                }}>
                                Home
                            </Text>
                            <Text
                                style={{
                                    top: 18,
                                    letterSpacing: 0.3,
                                    fontSize: 15,
                                    marginLeft: -45,
                                    color: '#6D6E9C',
                                }}>
                                3728  Brand Road, Swift Current
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: 400,
                            borderTopWidth: 1,
                            borderColor: '#DADAE5',
                            paddingTop: 22,
                            paddingBottom: 33,
                            flexDirection: 'column',
                            width: 380,
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                width: 250,
                            }}>
                            <Image
                                source={location}
                                style={{
                                    color: '#F5313F',
                                    left: 14,
                                    width: 23,
                                    height: 26,
                                }}>
                            </Image>
                            <Text
                                style={{
                                    top: -6,
                                    letterSpacing: 0.5,
                                    fontSize: 20,
                                    marginLeft: 40,
                                    fontWeight: '900',
                                    color: '#6D6E9C',
                                }}>
                                Other
                            </Text>
                            <Text
                                style={{
                                    top: 18,
                                    letterSpacing: 0.5,
                                    fontSize: 15,
                                    marginLeft: -45,
                                    color: '#6D6E9C',
                                }}>
                                81 Springside, Lancaster
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: 400,
                            // borderBottomWidth: 2,
                            borderTopWidth: 1,
                            borderColor: '#DADAE5',
                            paddingTop: 22,
                            paddingBottom: 33,
                            flexDirection: 'column',
                            width: 380,
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                width: 250,
                            }}>
                            <Image
                                source={work}
                                style={{
                                    color: '#F5313F',
                                    left: 13,
                                    width: 28.83,
                                    height: 25,
                                }}>
                            </Image>
                            <Text
                                style={{
                                    top: -6,
                                    letterSpacing: 0.5,
                                    fontSize: 20,
                                    marginLeft: 40,
                                    fontWeight: '900',
                                    color: '#6D6E9C',
                                }}>
                                Work
                            </Text>
                            <Text
                                style={{
                                    top: 18,
                                    letterSpacing: 0.5,
                                    fontSize: 15,
                                    marginLeft: -45,
                                    color: '#6D6E9C',
                                }}>
                                4932 Sixth Street, Westminster
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: 400,
                            borderBottomWidth: 1,
                            borderTopWidth: 1,
                            borderColor: '#DADAE5',
                            padding: 23,
                            flexDirection: 'column',
                            width: 380,
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                width: 250,
                            }}>
                            <View
                                style={{
                                    backgroundColor: '#feeaec',
                                    width: 25,
                                    height: 25,
                                    left: 17,
                                    borderRadius: 30
                                }}>
                            </View>
                            <Image
                                source={plus}
                                style={{
                                    top: 6,
                                    left: -1.5,
                                    width: 12,
                                    height: 12,
                                }}>
                            </Image>
                            <Text
                                style={{
                                    marginTop: -3,
                                    fontSize: 20,
                                    marginLeft: 38,
                                    fontWeight: '900',
                                    color: '#FFA360',
                                }}>
                                Add a new address
                            </Text>

                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}