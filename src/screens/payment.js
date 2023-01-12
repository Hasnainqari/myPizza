import { View, Text, Image, TouchableOpacity, Button, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default function PaymentMethod({ navigation }) {

  const B = props => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
  var cart = require('../assest/Icon/cartImage.png');
  var location = require('../assest/drawerIcon/Location.png');
  var pencil = require('../assest/drawerIcon/Pencil.png');
  var pcard = require('../assest/drawerIcon/pcard.png');
  var visa = require('../assest/drawerIcon/visa.png');
  var backImg = require('../assest/drawerIcon/backImg.png');
  var HomeImg = require('../assest/drawerIcon/home2.png');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'F9F7FB',
      }}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#fff',
            height: 50,
          }}>
          <Text
            style={{
              left: -75,
              top: 15,
            }}
            onPress={() => navigation.navigate('Home')}>
            <Image
              source={backImg}
              style={{
                width: 15,
                height: 15,
              }}>

            </Image>
          </Text>
          <Text
            style={{
              left: -9,
              top: 10,
              fontWeight: '400',
              letterSpacing: 0.7,
              fontSize: 20,
            }}>
            Uncle John Pizzas
          </Text>
          <Text
            style={{
              left: 74,
              top: 11,
            }}
            onPress={() => navigation.navigate('Home')}>
            <Image
              source={HomeImg}
              style={{
                width: 18,
                height: 18,
              }}>

            </Image>
          </Text>
        </View>
      </View>
      <LinearGradient
        useAngle={true}
        angle={108}
        angleCenter={{ x: 0.7, y: 0.6 }}
        locations={[0, 0.6]}
        colors={['#F5313F', '#FFAA6C']}
        style={{ width: 500, height: 210 }}>
        <View
          style={{
            paddingLeft: 26,
            marginTop: 20,
          }}>
          <TouchableOpacity>
            <Image
              source={cart}
              style={{
                width: 30,
                left: -6,
                top: 10,
                height: 28,
              }}>
            </Image>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '300',
              fontFamily: 'Roboto',
              top: 16,
              left: -6,
              letterSpacing: 0.6,
              color: '#ffffff',
            }}>
            Checkout
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
                marginTop: 50,
              }}>
              <TouchableOpacity>
                <Image
                  source={location}
                  style={{
                    top: -20,
                    width: 23,
                    height: 25,
                    color: '#F5313F',
                  }}>
                </Image>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 30,
                  left: 12,
                  bottom: 29,
                  fontFamily: 'Roboto',
                  color: '#F5313F',
                  fontWeight: '900',
                  letterSpacing: 0.5,

                }}>
                <B>Deliver Address</B>
              </Text>
              <TouchableOpacity>
                <LinearGradient
                  useAngle={true}
                  angle={135}
                  angleCenter={{ x: 0.5, y: 0.6 }}
                  locations={[0.1, 0.6]}
                  colors={['#F5313F', '#FFAA6C']}
                  style={{
                    left: 38,
                    top: -21,
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                  }}>
                  <Image
                    source={pencil}
                    style={{
                      width: 15,
                      opacity: 1.2,
                      height: 15,
                      left: 6.88,
                      top: 6.88,
                    }}>
                  </Image></LinearGradient>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'column',
                width: '80%',
                marginTop: -30,
                padding: 5,
              }}>
              <Text
                style={{
                  fontSize: 22,
                  letterSpacing: 1,
                  fontWeight: 'bold',
                  fontFamily: 'Roboto',
                  color: '#6D6E9C',
                }}>
                Home
              </Text>
              <Text
                style={{
                  top: -5,
                  fontSize: 17,
                  fontWeight: '300',
                  letterSpacing: 0.8,
                  color: '#6D6E9C',
                }}>
                3728 Brand Road, Swift Current
              </Text>
            </View>
            <View
              style={{
                borderColor: '#DADAE5',
                borderTopWidth: 0.6,
                flexDirection: 'column',
                width: '100%',
                marginTop: 7,
                padding: 5,
              }}>
              <Text
                style={{
                  top: 6,
                  width: '100%',
                  marginLeft: 32,
                  fontSize: 21,
                  letterSpacing: 0.3,
                  fontWeight: '700',
                  fontFamily: 'Roboto',
                  color: '#6D6E9C',
                }}>
                + Add delivery instructions
              </Text>
            </View>
            <View
              style={{
                borderColor: '#DADAE5',
                borderTopWidth: 0.6,
                flexDirection: 'column',
                width: '100%',
                marginTop: 13,
                padding: 5,
              }}>
              <Text
                style={{
                  top: 6,
                  width: '100%',
                  marginLeft: 32,
                  fontSize: 21,
                  letterSpacing: 0.3,
                  fontWeight: '700',
                  fontFamily: 'Roboto',
                  color: '#6D6E9C',
                }}>
                Contactless Delivery:
              </Text>

              <LinearGradient
                useAngle={true}
                angle={135}
                angleCenter={{ x: 0.5, y: 0.6 }}
                locations={[0.1, 0.6]}
                colors={['#F5313F', '#FFAA6C']}
                style={{
                  opacity: 0.4,
                  left: 244,
                  top: -21,
                  width: 58,
                  height: 28,
                  borderRadius: 15,

                }}>
              </LinearGradient>
              <TouchableOpacity>
                <LinearGradient
                  useAngle={true}
                  angle={135}
                  angleCenter={{ x: 0.5, y: 0.6 }}
                  locations={[0.1, 0.6]}
                  colors={['#F5313F', '#FFAA6C']}
                  style={{
                    // opacity: 0.3,
                    left: 272,
                    // right: -246,
                    top: -48,
                    width: 28,
                    height: 26,
                    borderRadius: 15,
                  }}>
                </LinearGradient>
              </TouchableOpacity>

              <Text
                style={{
                  top: -56,
                  left: 35,
                  fontSize: 15,
                  letterSpacing: 0.1,
                  color: '#6D6E9C',
                }}>
                Rider will place order at your door
              </Text>
            </View>
          </View>
          <View
            style={{
              elevation: 2,
              shadowColor: '#000',
              shadowOpacity: 0.7,
              backgroundColor: '#ffffff',
              width: '90%',
              alignSelf: 'center',
              height: '46%',
              marginTop: 20,
              marginBottom: 10,
              borderRadius: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                padding: 2,
                width: '80%',
                marginTop: 20,
              }}>
              <TouchableOpacity>
                <Image
                  source={pcard}
                  style={{
                    top: 2,
                    width: 24,
                    left: 4,
                    height: 22,
                    color: '#F5313F',
                  }}>
                </Image>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 25,
                  left: 14,
                  bottom: 5,
                  fontFamily: 'Roboto',
                  color: '#F5313F',
                  fontWeight: '900',
                  letterSpacing: -0.3,

                }}>
                <B>Payment method</B>
              </Text>
              <TouchableOpacity>
                <LinearGradient
                  useAngle={true}
                  angle={135}
                  angleCenter={{ x: 0.5, y: 0.6 }}
                  locations={[0.1, 0.6]}
                  colors={['#F5313F', '#FFAA6C']}
                  style={{
                    left: 65,
                    width: 30,
                    top: -1,
                    height: 30,
                    borderRadius: 15,
                  }}>
                  <Image
                    source={pencil}
                    style={{
                      width: 15,
                      opacity: 1.2,
                      height: 15,
                      left: 6.88,
                      top: 6.88,
                    }}>
                  </Image></LinearGradient>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '85%',
                marginTop: 20,
                padding: 2,
                alignSelf: 'center',
                alignItems: 'center'
              }}>
              <Image
                source={visa}
                style={{
                  left: 16,
                  top: -23,
                  width: 38,
                  height: 44,
                }}>
              </Image>
              <Text
                style={{
                  textTransform: 'uppercase',
                  top: -35,
                  left: 25,
                  fontSize: 13,
                  fontFamily: 'Roboto',
                  fontWeight: '900',
                  letterSpacing: 1,
                  color: '#6D6E9C',
                }}>
                visa
              </Text>
              <Text
                style={{
                  textTransform: 'uppercase',
                  top: -13,
                  left: -5,
                  fontSize: 15,
                  fontFamily: 'Roboto',
                  fontWeight: '700',
                  letterSpacing: 1,
                  color: '#A0A8CC',
                }}>
                ....0145
              </Text>
              <Text
                style={{
                  textTransform: 'uppercase',
                  top: -15,
                  left: 103,
                  fontSize: 20,
                  fontFamily: 'Roboto',
                  fontWeight: '900',
                  // letterSpacing:1,
                  color: '#6D6E9C',
                }}>
                $ 14.50
              </Text>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  width: 190,
                  left: 36,
                  top: -20,
                  borderRadius: 10,
                  height: 28,
                  backgroundColor: '#DEF3E1',
                }}>
                <Text
                  style={{
                    top: 0.5,
                    letterSpacing: 1,
                    left: 13,
                    padding: 2,
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    fontSize: 14,
                    color: '#57C168',
                  }}>
                  10% cashback applied
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View>
              <LinearGradient
                useAngle={true}
                angle={108}
                angleCenter={{ x: 0.7, y: 0.6 }}
                locations={[0, 0.6]}
                colors={['#F5313F', '#FFAA6C']}
                style={{
                  width: '100%',
                  height: '100%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  // marginTop: -,
                }}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    padding: 5,
                  }}>
                  <Text
                    onPress={() => navigation.navigate('History')}
                    style={{
                      top: 4,
                      fontSize: 28,
                      color: '#ffffff',
                      fontFamily: 'Roboto',
                      fontWeight: '900',
                      textAlign: 'center',
                      letterSpacing: 1.5,
                    }}>
                    Place Order
                  </Text>
                </View>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
