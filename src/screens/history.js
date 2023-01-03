import { View, Text, Image, TouchableOpacity, Button, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function OrderHistory({ navigation }) {
    var historyp2 = require('../assest/drawerIcon/historyp1.png');
    var historyp1 = require('../assest/drawerIcon/historyp2.png');
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'F9F7FB',
            }}>
            <LinearGradient
                useAngle={true}
                angle={108}
                angleCenter={{ x: 0.7, y: 0.6 }}
                locations={[0, 0.6]}
                colors={['#F5313F', '#FFAA6C']}
                style={{ width: 500, height: 210 }}>
                <View
                    style={{
                        paddingLeft: 29,
                        marginTop: 15,
                    }}>
                    <TouchableOpacity>
                        <Image
                            source={historyp1}
                            style={{
                                width: 32,
                                left: -6,
                                top: 22,
                                height: 36,
                            }}>
                        </Image>
                        <Image
                            source={historyp2}
                            style={{
                                width: 22,
                                left: -11,
                                top: 10,
                                height: 12,
                            }}>
                        </Image>
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: 33,
                            fontWeight: '300',
                            fontFamily: 'Roboto',
                            top: 16,
                            left: -11,
                            letterSpacing: 1,
                            color: '#ffffff',
                        }}>
                        Order Details
                    </Text>
                </View>
            </LinearGradient>
            <View>
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: 500,
                        top: 13,
                    }}>
                    <View
                        style={{
                            borderColor: 'red',
                            backgroundColor: 'white',
                            opacity: 0.9,
                            width: '90%',
                            alignSelf: 'center',
                            marginTop: -75,
                            height: '80%',
                            borderRadius: 20,
                            alignItems: 'center',
                            elevation: 2,
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                width: '80%',
                                padding: 2,
                                marginTop: 19,
                            }}>
                            <Text
                                style={{
                                    top: 7,
                                    fontFamily: 'Roboto',
                                    fontWeight: 'bold',
                                    fontSize: 10,
                                    color: '#6D6E9C',
                                    textTransform: 'uppercase',
                                    letterSpacing: 1,
                                }}>
                                ordered on
                            </Text>
                            <Text
                                style={{
                                    left: -56,
                                    top: 18,
                                    fontFamily: 'Roboto',
                                    fontWeight: '900',
                                    fontSize: 16.5,
                                    color: '#F5313F',
                                    textTransform: 'uppercase',
                                    letterSpacing: 1.3,
                                }}>
                                14 Feb
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                width: '80%',
                                padding: 2,
                                left: 105,
                                marginTop: -27,
                            }}>
                            <Text
                                style={{
                                    top: 6,
                                    fontFamily: 'Roboto',
                                    fontWeight: 'bold',
                                    fontSize: 10,
                                    color: '#6D6E9C',
                                    textTransform: 'uppercase',
                                    letterSpacing: 1,
                                }}>
                                invoice #
                            </Text>
                            <Text
                                style={{
                                    left: -59,
                                    top: 17,
                                    fontFamily: 'Roboto',
                                    fontWeight: '900',
                                    fontSize: 17,
                                    color: '#F5313F',
                                    textTransform: 'uppercase',
                                    letterSpacing: 1.1,
                                }}>
                                # 15569
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                width: '80%',
                                padding: 2,
                                left: 200,
                                marginTop: -31,
                            }}>
                            <Text
                                style={{
                                    top: 7,
                                    fontFamily: 'Roboto',
                                    fontWeight: 'bold',
                                    fontSize: 10,
                                    color: '#6D6E9C',
                                    textTransform: 'uppercase',
                                    letterSpacing: 1,
                                }}>
                                total due
                            </Text>
                            <Text
                                style={{
                                    left: -55,
                                    top: 18.5,
                                    fontFamily: 'Roboto',
                                    fontWeight: '900',
                                    fontSize: 17,
                                    color: '#F5313F',
                                    textTransform: 'uppercase',
                                    letterSpacing: 1.8,
                                }}>
                                $14.50
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}