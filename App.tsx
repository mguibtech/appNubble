import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Button title="Teste" mb="s10" preset="primary" disabled />
        <Button title="Teste" preset="outline" loading />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
