import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Button title="Teste" mb="s10" backgroundColor="error" />
        <Button title="Teste" loading />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
