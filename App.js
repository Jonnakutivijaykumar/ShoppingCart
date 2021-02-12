import React from 'react';
import { StyleSheet, View } from 'react-native';
import ShoppingCartPage from './src/containers/shoppingCartPage';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <ShoppingCartPage />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"rgb(242, 242, 242)"
  },
});
