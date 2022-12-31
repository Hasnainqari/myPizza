import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
      <Text style={{fontSize: 20}}>Hello World</Text>
       <Text style={{fontSize: 20}}>Hello World with navigation</Text>
       <Text style={{fontSize: 20}}>Hello World with drawer</Text>
    </View>
    
  );
}


export default App;