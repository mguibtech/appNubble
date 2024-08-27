import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="paragraphCaption">Testando novo componente</Text>
        <Text preset="headingLarge">Testando novo componente</Text>
        <Text preset="paragraphCaption">Testando novo componente</Text>
        <Button title="Teste" />
        <Button title="Teste" loading />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
