import { View, Text, Image, TouchableOpacity, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default function PaymentMethod({ navigation }) {

  const B = props => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
  var cart = require('../assest/Icon/cartImage.png');
  var location = require('../assest/drawerIcon/Location.png');
  var pencil = require('../assest/drawerIcon/Pencil.png');
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
            paddingLeft: 40,
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
                    // left: ,
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
              <Text
                style={{
                  top: 3,
                  left: 35,
                  fontSize: 17,
                  // fontWeight:'100',
                  letterSpacing: 0.5,
                  color: '#6D6E9C',
                }}>
                Rider will place order at your door
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
