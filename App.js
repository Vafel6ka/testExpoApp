import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { createStore } from "redux";
import StateViewer from './scr/components/StateViewer';
import rootReducer from './scr/store/reducers/rootReducer';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store = {store}>
      <View style={styles.container}>
        <StateViewer/>
        <Text>Open up </Text>
        <StatusBar style="auto" />
      </View>
    </Provider>

  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
