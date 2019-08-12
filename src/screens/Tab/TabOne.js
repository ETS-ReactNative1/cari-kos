import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

class TabOne extends React.Component {
  render() {
    return(
      <View style={styles.containerHome}>
        <Text>Chat</Text>
      </View>
    )
  }
}

export default TabOne;

const styles = StyleSheet.create({
    containerHome: {
          flex: 1,
          backgroundColor:'#fff',
          alignItems: 'center',
          justifyContent: 'center',
      },
  })