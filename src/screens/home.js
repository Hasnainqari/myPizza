import { Text, View, Image, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
const HomeScreen = () => {
  var pizzaImg = require('../assest/Card/crustone.png');

  const B = props => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>;
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#eae9ef',
      flexDirection: 'column',
    }}>
      <LinearGradient
        useAngle={true}
        angle={108}
        angleCenter={{ x: 0.7, y: 0.6 }}
        locations={[0, 0.5]}
        colors={['#F5313F', '#FFAA6C']}>
        <View style={{ padding: 25, marginLeft: 12, height: 170 }}>
          <Text style={{
            fontSize: 17,
            fontFamily: 'Roboto',
            color: '#ffffff',
          }}>Hi Jackey !
          </Text>
          <Text style={{
            color: '#ffffff',
            fontFamily: 'Roboto',
            fontSize: 25,
            left: 10,
          }}>What <B>pizza</B> do you
          </Text>
          <Text style={{
            left: 10,
            fontFamily: 'Roboto',
            fontSize: 25,
            color: '#ffffff',
          }}>want to try today?
          </Text>
        </View>
      </LinearGradient>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: 20,
          width: 328,
          height: 238,
          marginTop: -325,
          flexDirection: 'row',
        }}>
          <View>
            <Image source={pizzaImg} style={{
              width: 200,
              height: 200,
              marginTop: 18,
            }}></Image>
          </View>
          <View style={{
            display: 'flex',
            marginTop: 45,
          }}>
            <View style={{
              padding: 5,
              marginLeft: -45,
            }}>
              <Text style={{
                fontSize: 25,
                fontFamily: 'Roboto',
                fontWeight: '900',
                color: '#F5313F',
                letterSpacing: 0.3,
              }}>
                Reorder again ?
              </Text>
              <Text style={{
                fontWeight: '700',
                fontSize: 14,
                fontFamily: 'Roboto',
                textTransform: 'uppercase',
                color: '#6D6E9C',
              }}>
                Small, thin crust,

              </Text>
              <Text style={{
                fontWeight: '700',
                fontSize: 14,
                lineHeight: 14,
                fontFamily: 'Roboto',
                textTransform: 'uppercase',
                color: '#6D6E9C',
              }}>
                tomatoes, basil, cheese

              </Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 30,
                fontFamily: 'Roboto',
                textTransform: 'uppercase',
                color: '#6D6E9C',
              }}>
                $12
              </Text>
              <TouchableOpacity>
                <LinearGradient
                  useAngle={true}
                  angle={135}
                  angleCenter={{ x: 0.5, y: 0.6 }}
                  locations={[0.1, 0.6]}
                  colors={['#F5313F', '#FFAA6C']}
                  style={{
                    borderRadius: 20,
                    marginTop: 3,
                    padding: 8,
                    width: 123,
                    height: 38,
                    marginRight: 5,

                  }}>
                  <Text
                    style={{
                      borderRadius: 20,
                      lineHeight: 23,
                      fontSize: 17,
                      fontWeight: '900',
                      color: '#ffffff',
                      textAlign: 'center'
                    }}>
                    Add to Cart
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>

  );
}

export default HomeScreen;