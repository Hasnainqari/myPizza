import { View, Text, Image, TouchableOpacity, Button, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function OrderHistory({ navigation }) {
    var historyp2 = require('../assest/drawerIcon/historyp1.png');
    var historyp1 = require('../assest/drawerIcon/historyp2.png');
    var orderconfirm = require('../assest/drawerIcon/order.png');
    var prepare = require('../assest/drawerIcon/prepare.png');
    var deliver = require('../assest/drawerIcon/deliver.png');
    var transit = require('../assest/drawerIcon/transit.png');
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
                style={{ width: 500, height: 220 }}>
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
                                top: 21.5,
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
                        height: 550,
                        // top: 7,
                    }}>
                    <View
                        style={{
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
                                width: '100%',
                                marginTop: 50,
                                justifyContent: 'center',
                                paddingBottom: 8,
                                borderColor: '#A0A8CC',
                                borderBottomWidth: 0.5,
                            }}>

                            < View
                                style={{
                                    top: -25,
                                    width: 100,
                                    alignItems: 'center'
                                }}>
                                <Text
                                    style={{
                                        color: '#6D6E9C',
                                        fontSize: 12,
                                        fontWeight: '800',
                                        textTransform: 'uppercase',
                                    }}>
                                    ordered on
                                </Text>
                                <Text
                                    style={{
                                        top: -5,
                                        letterSpacing: 1,
                                        color: '#F5313F',
                                        fontSize: 18,
                                        fontWeight: '800',
                                    }}>
                                    14 Feb
                                </Text>
                            </View>
                            <View
                                style={{
                                    top: -25,
                                    width: 100,
                                    alignItems: 'center'
                                }}>
                                <Text
                                    style={{
                                        color: '#6D6E9C',
                                        fontSize: 12,
                                        fontWeight: '800',
                                        textTransform: 'uppercase',
                                    }}>
                                    invoice #
                                </Text>
                                <Text
                                    style={{
                                        top: -5,
                                        letterSpacing: 1,
                                        color: '#F5313F',
                                        fontSize: 17,
                                        fontWeight: '800',
                                    }}>
                                    # 15569
                                </Text>
                            </View>
                            <View
                                style={{
                                    top: -25,
                                    width: 100,
                                    alignItems: 'center'
                                }}>
                                <Text
                                    style={{
                                        color: '#6D6E9C',
                                        fontSize: 12,
                                        fontWeight: '800',
                                        textTransform: 'uppercase',
                                    }}>
                                    total due
                                </Text>
                                <Text
                                    style={{
                                        top: -5,
                                        letterSpacing: 1,
                                        color: '#F5313F',
                                        fontSize: 17,
                                        fontWeight: '800',
                                    }}>
                                    $14.50
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'column',
                                width: '80%',
                                marginTop: 12,
                                padding: 3,
                                height: '70%',
                            }}>
                            <View
                                style={{
                                    width: '100%',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    marginTop: 15,
                                    padding: 5,
                                }}>       
                            </View>
                        </View>
                    </View>
                </View>
            </View >
        </View >
    )
}