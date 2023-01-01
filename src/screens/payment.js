import { View, Text, Image, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default function PaymentMethod({ navigation }) {

  const B = props => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
  var cart = require('../assest/Icon/cartImage.png');
  var location = require('../assest/drawerIcon/Location.png');
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
          <Image
            source={cart}
            style={{
              width: 30,
              left: -6,
              top: 10,
              height: 28,
            }}>
          </Image>
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
              <Image
                source={location}
                style={{
                  top:-20,
                  left: 10,
                  width: 23,
                  height: 25,
                  color: '#F5313F',
                }}>
              </Image>
              <Text>
                    
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
