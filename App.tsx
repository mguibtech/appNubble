import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="paragraphCaption">Testando novo componente</Text>
      <Text preset="headingLarge">Testando novo componente</Text>
      <Text preset="paragraphCaption">Testando novo componente</Text>
    </SafeAreaView>
  );
}

export default App;
