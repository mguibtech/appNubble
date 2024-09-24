import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Icon} from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Icon name="arrowRight" />
        <Icon name="eyeOn" color="buttonPrimary" size={50} />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
