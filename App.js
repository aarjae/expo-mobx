import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import store from "./store";
import Requests from "./Requests";


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Requests store={store}/>
        <Button
            title={"Add Item"}
            onPress={() => {
              store.add(store.requests.length + 1)
            }}
        />

        <Button
            title={"Remove Item"}
            onPress={() => {
              store.remove();
            }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
