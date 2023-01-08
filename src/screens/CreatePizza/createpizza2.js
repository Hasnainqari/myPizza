import { Text, View, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function Pizzatwo({ navigation }) {
    const B = props => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
    const pizzaImgOne = require('../CreatePizza/pizzaImg/pizza1.png');
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#eae9ef',
                flexDirection: 'column',
            }}>
            <LinearGradient
                useAngle={true}
                angle={108}
                angleCenter={{ x: 0.7, y: 0.6 }}
                locations={[0, 0.5]}
                colors={['#F5313F', '#FFAA6C']}
                style={{ width: 500, height: 270 }}>
                <View
                    style={{
                        marginLeft: 20,
                        marginBottom: -43,
                        marginTop: 25
                    }}>
                    <Text
                        style={{
                            fontSize: 27,
                            left: -1,
                            // fontWeight: '700',
                            color: '#ffffff',
                            letterSpacing: 0.3,
                            fontFamily: 'Roboto',
                        }}>
                        Create Your Pizza
                    </Text>
                    <Text
                        style={{
                            fontSize: 27,
                            left: 250,
                            top: -40,
                            fontWeight: 'bold',
                            color: '#ffffff',
                            letterSpacing: 0.3,
                            fontFamily: 'Roboto',
                        }}>
                        $12.00
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            left: 0.8,
                            textTransform: 'uppercase',
                            top: -42,
                            color: '#ffffff',
                            // opacity: ,
                            letterSpacing: 0.3,
                            fontFamily: 'Roboto',
                        }}>
                        <B>Medium</B>
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            left: 53,
                            textTransform: 'uppercase',
                            top: -64.8,
                            color: '#ffffff',
                            opacity: 0.5,
                            letterSpacing: 0.3,
                            fontFamily: 'Roboto',
                        }}>
                        <B style={{}}>, crust, topings</B>
                    </Text>

                </View>
            </LinearGradient>
            <View>
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: 350,
                    }}>
                    <View
                        style={{
                            borderWidth: 22,
                            borderColor: 'white',
                            opacity: 1,
                            width: '80%',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            marginTop: -150,
                            height: '82%',
                            borderRadius: 200,
                            shadowOpacity: 10,
                            alignItems: 'center',
                        }}>

                        <Image
                            source={pizzaImgOne}
                            style={{
                                marginTop: 39,
                                width: 356,
                                height: 282,
                            }}>

                        </Image>

                    </View>
                    <View
                        style={{
                            borderWidth: 24,
                            borderColor: 'white',
                            opacity: 0.6,
                            width: '93%',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            top: -311.3,
                            height: '96%',
                            borderRadius: 200,
                            shadowOpacity: 10,
                            alignItems: 'center',
                        }}>
                    </View>
                    {/* <View
                        style={{
                            // fontSize: 15,
                            top: -300,
                            borderRadius: 40,
                            width: 70,
                            padding: 5,
                            backgroundColor: '#DADAE5',
                            marginLeft: "41%",
                        }}>
                        <Text
                            style={{

                                textAlign: 'center',
                            }}>

                            12"
                        </Text>
                    </View> */}
                </View>
                <View
                    style={{
                        backgroundColor: '#ffffff',
                        width: '90%',
                        height: '27%',
                        top: -168,
                        alignSelf: 'center',
                        borderRadius: 20,
                    }}>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                top: 12,
                                letterSpacing: 0.4,
                                fontSize: 25,
                                color: '#6D6E9C',
                            }}>
                            Choose your <B>crust</B>
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            width: '100%',
                            alignSelf: 'center',
                            padding: 5,
                            justifyContent: 'space-between',
                        }}>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    fontSize: 22,
                                    letterSpacing: 1,
                                    color: '#6D6E9C',
                                    left: 240,
                                    top: 30,
                                }}>
                                Thick
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <LinearGradient
                        useAngle={true}
                        angle={108}
                        angleCenter={{ x: 0.5, y: 0.5 }}
                        locations={[0.3, 0.9]}
                        colors={['#F5313F', '#FFAA6C']}
                        style={{
                            width: "30%",
                            height: "30%",
                            padding: 8,
                            left: '11%',
                            top: -11,
                            borderRadius: 30,
                        }}>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: '700',
                                    letterSpacing: 2,
                                    color: '#ffffff',
                                    left: 22,
                                }}>
                                Thin
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
            <View style={{
                top: -180,
                // left: '43.5%',
            }}>
                <LinearGradient
                    useAngle={true}
                    angle={108}
                    angleCenter={{ x: 0.5, y: 0.5 }}
                    locations={[0.3, 0.9]}
                    colors={['#F5313F', '#FFAA6C']}
                    style={{
                        padding: 14,
                        top: -18,
                    }}>
                    <Text
                        onPress={() => navigation.navigate('Pizza3')}
                        style={{
                            left: '43.5%',
                            color: '#ffffff',
                            fontSize: 23,
                            fontWeight: '900',
                            letterSpacing: 1,
                            fontFamily: 'Roboto',
                        }}>
                        Next
                    </Text>
                </LinearGradient>
            </View>
        </View>
    );
}