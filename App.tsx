import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="paragraphCaption" style={{color: 'red'}}>
        Testando novo componente
      </Text>
      <Text preset="headingLarge" style={{fontFamily: 'Panchang-Light'}}>
        Testando novo componente
      </Text>
      <Text preset="headingLarge" style={{fontFamily: 'Panchang-Extralight'}}>
        Testando novo componente
      </Text>
    </SafeAreaView>
  );
}

export default App;
