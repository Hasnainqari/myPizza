import { Text, View, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function Pizzathree({ navigation }) {
    const B = props => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
    const pizzaImgOne = require('../CreatePizza/pizzaImg/pizza1.png');
    const pepperoni1 = require('../CreatePizza/pizzaImg/pepperoni1.png');
    const pepperoni2 = require('../CreatePizza/pizzaImg/pepperoni2.png');
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
                        $14.00
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
                        <B>Medium, thick crust,</B>
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            left: 148,
                            textTransform: 'uppercase',
                            top: -64.8,
                            color: '#ffffff',
                            opacity: 0.5,
                            letterSpacing: 0.3,
                            fontFamily: 'Roboto',
                        }}>
                        <B style={{}}> topings</B>
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
                            borderWidth: 16,
                            borderColor: 'white',
                            opacity: 1,
                            width: '75%',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            marginTop: -150,
                            height: '77%',
                            borderRadius: 200,
                            shadowOpacity: 10,
                            alignItems: 'center',
                        }}>

                        <Image
                            source={pizzaImgOne}
                            style={{
                                marginTop: 39,
                                width: 348,
                                height: 272,
                            }}>

                        </Image>

                    </View>
                    <View
                        style={{
                            borderWidth: 24,
                            borderColor: 'white',
                            opacity: 0.6,
                            width: '88%',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            top: -291.3,
                            height: '90.1%',
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
                        backgroundColor: '#f9f8fb',
                        width: '90%',
                        height: '29%',
                        top: -190,
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
                            Choose up to<B>7 Topings</B>
                        </Text>
                        <Text
                            style={{
                                top: 7,
                                fontSize: 12,
                                fontWeight: '900',
                                opacity: 0.7,
                                letterSpacing: 1,
                                color: '#6D6E9C',
                                textTransform: 'uppercase',
                            }}>
                            free 3 add-ons
                        </Text>
                    </View>
                    <View
                        style={{
                            width: 225,
                            height: 66,
                            top: 18,
                            left: 20,
                            borderRadius: 20,
                            backgroundColor: '#ffffff',

                        }}>
                    </View>
                    <Image
                        source={pepperoni1}
                        style={{
                            width: 70,
                            height: 70,
                            top: -50,
                            left: 28,
                        }}>
                    </Image>
                    <Text
                        style={{
                            fontFamily: 'Roboto',
                            fontSize: 18,
                            top: -110,
                            left: 110,
                            fontWeight: '900',
                            letterSpacing: 0.5,
                            color: '#6D6E9C',
                        }}>
                        Pepperoni
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Roboto',
                            fontSize: 18,
                            top: -115,
                            left: 110,
                            letterSpacing: 0.5,
                            color: '#6D6E9C',
                        }}>
                        +$0.00
                    </Text>
                    <View
                        style={{
                            width: 23,
                            height: 23,
                            top: -143,
                            left: 200,
                            borderRadius: 30,
                            backgroundColor: '#ecebf4',
                        }}>

                    </View>
                    <View
                        style={{
                            width: 225,
                            height: 66,
                            top: -195,
                            left: 260,
                            borderRadius: 20,
                            backgroundColor: '#fff',

                        }}>
                    </View>
                    <Image
                        source={pepperoni2}
                        style={{
                            width: 70,
                            height: 70,
                            top: -261,
                            left: 268,
                        }}>
                    </Image>
                </View>
            </View>
            <View style={{
                top: -198,
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
                        //  onPress={() => navigation.navigate('Pizza2')}
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