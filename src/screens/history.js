import { View, Text, Image, TouchableOpacity, Button, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function OrderHistory({ navigation }) {
    var historyp2 = require('../assest/drawerIcon/historyp1.png');
    var historyp1 = require('../assest/drawerIcon/historyp2.png');
    var allicons = require('../assest/drawerIcon/detailicons.png');
    var cashbag = require('../assest/drawerIcon/cashbag.png');
    var arrow = require('../assest/drawerIcon/arrow.png');

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
                                left: -6.5,
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
                        height: 550,
                        // top: 7,
                    }}>
                    <View
                        style={{
                            backgroundColor: 'white',
                            opacity: 0.9,
                            width: '90%',
                            alignSelf: 'center',
                            marginTop: -95,
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
                                // height: '70%',
                            }}>
                            <View
                                style={{
                                    width: '100%',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    marginTop: 15,
                                    padding: 5,
                                }}>
                                <Image
                                    source={allicons}
                                    style={{
                                        top: -32,
                                        left: -22,
                                    }}>
                                </Image>
                                <Text
                                    style={{
                                        left: -10,
                                        top: -160,
                                        letterSpacing: 0.8,
                                        fontWeight: '700',
                                        color: '#6D6E9C',
                                    }}>
                                    11:43 AM
                                </Text>
                                <Text
                                    style={{
                                        left: -65,
                                        top: -143,
                                        letterSpacing: 1,
                                        fontWeight: '700',
                                        fontSize: 18,
                                        color: '#6D6E9C',
                                    }}>
                                    OrderConfirmed
                                </Text>
                                <Text
                                    style={{
                                        left: -188,
                                        top: -95,
                                        letterSpacing: 0.8,
                                        fontWeight: '700',
                                        color: '#6D6E9C',
                                    }}>
                                    12:01 PM
                                </Text>
                                <Text
                                    style={{
                                        left: -239.2,
                                        top: -79,
                                        letterSpacing: 1.3,
                                        fontWeight: '700',
                                        fontSize: 18,
                                        color: '#6D6E9C',
                                    }}>
                                    Preparing...
                                </Text>
                                <Text
                                    style={{
                                        left: -332,
                                        top: -25.8,
                                        letterSpacing: 1.3,
                                        fontWeight: '100',
                                        fontSize: 18,
                                        color: '#6D6E9C',
                                    }}>
                                    Dispatched
                                </Text>
                                <Text
                                    style={{
                                        left: -420,
                                        top: 39,
                                        letterSpacing: 1.3,
                                        fontWeight: '100',
                                        fontSize: 18,
                                        color: '#6D6E9C',
                                    }}>
                                    In Transit
                                </Text>
                                <Text
                                    style={{
                                        left: -499,
                                        top: 105,
                                        letterSpacing: 1.3,
                                        fontWeight: '100',
                                        fontSize: 18,
                                        color: '#6D6E9C',
                                    }}>
                                    Delivered
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: '#e7f1eb',
                        width: '90%',
                        alignSelf: 'center',
                        height: '17%',
                        marginTop: -190,
                        marginBottom: 10,
                        borderRadius: 20,
                        borderColor: '#57C168',
                        borderWidth: 1,
                        flexDirection: 'row',
                        elevation: 2,
                        shadowColor: '#000',
                        shadowOpacity: 0.7
                    }}>
                    <View
                        style={{
                            width: '100%',
                            marginTop: -15,
                            padding: 5,
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                        <TouchableOpacity>
                            <View style={{
                                width: 50,
                                height: 50,
                                top: 7,
                                left: 22,
                                borderWidth: 1,
                                backgroundColor: '#def3e1',
                                borderColor: '#6bc77a',
                                borderRadius: 30,
                            }}>
                                <Image
                                    source={cashbag}
                                    style={{
                                        top: 12,
                                        left: 12.5,
                                    }}>
                                </Image>
                            </View>
                        </TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 18,
                                left: 38,
                                top: -5,
                                letterSpacing: 0.5,
                                fontFamily: 'Roboto',
                                fontWeight: '700',
                                color: '#57C168',
                            }}>
                            Earned cashback!
                        </Text>
                        <Text
                            style={{
                                fontSize: 18,
                                left: -91,
                                top: 19,
                                opacity: 0.8,
                                fontFamily: 'Roboto',
                                fontWeight: '100',
                                color: '#6D6E9C',
                            }}>
                            + $1.45
                        </Text>
                        <View
                            style={{
                                height: 80,
                                top: 8,
                                borderLeftWidth: 1,
                                marginLeft: 35,
                                borderColor: '#57C168',
                            }}>
                            <TouchableOpacity>
                                <Image
                                    source={arrow}
                                    style={{
                                        left: 20,
                                        top: 28,
                                    }}>

                                </Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View >
        </View >
    )
}