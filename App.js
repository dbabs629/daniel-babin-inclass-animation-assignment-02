import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';

export default class App extends Component {
  animation = new Animated.Value(0);
  theSize = new Animated.Value(10);
  theSpin = new Animated.Value(0);
//this. references the entire component- 

  componentDidMount(){
    Animated.timing(this.animation, {
      duration: 2000,
      toValue: 1
    }).start()

    Animated.timing(this.theSize, {
      duration: 2000,
      toValue: 40
    }).start()

    Animated.timing(this.theSpin, {
      duration: 4000,
      toValue: 1,
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    }).start()
  }

  render (){
    return(
      //left toValue = this.animation at left
    <View style={styles.container}>
      <Animated.Text style={{...styles.text, fontSize: this.theSize}}>Welcome to Humber!</Animated.Text>
      <Animated.View style={{...styles.box, opacity: this.animation}}>
      <Animated.Text style={{...styles.text, rotate: this.theSpin}}>Open Course Schedule Here!</Animated.Text>
        <Button
          title="View Schedule"
          onPress={() => Alert.alert('You must sign in first!')}/>
        </Animated.View>
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
  text: {
    fontSize: 20,
  },
  box: {
    width: 250,
    height: 150,
    marginTop: 50,
    backgroundColor: 'blue',
  },
  button: {
    width:200,
    height:100,
    marginTop: 150,
  },
});
