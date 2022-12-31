import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import { Image } from 'react-native';
const HomeScreen = () => {
  // var pizzaImg = require('../assest/Card/'); 
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
            fontSize: 14,
            color: '#ffffff',
          }}>Hi Jackey !!!
          </Text>
          <Text style={{
            color: '#ffffff',
            fontSize: 25,
          }}>What <B>pizza</B> do you
          </Text>
          <Text style={{
            fontSize: 25,
            color: '#ffffff',
          }}>want to try today?
          </Text>
        </View>
      </LinearGradient>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Text >
            {/* <Image source={pizzaImg} style={{width: 180, height: 200}}></Image> */}
          </Text>
        </View>
      </View>
    </View>

  );
}

export default HomeScreen;