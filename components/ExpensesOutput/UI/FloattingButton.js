import React from 'react';
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

export default class FloattingButton extends React.Component {
    animation = new Animated.Value(0)

    clickHandler = () => {
        const toValue = this.open ? 0 : 1;

        Animated.spring(this.animation, {
            toValue,
            friction: 5,
        }).start();

        this.open = !this.open;
       
    };

    render() {
        const rotation = {
            transform: [{
                rotate: this.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "45deg"]
                })
            }
            ]
        }
        return (
           <View style= {[styles.container, this.props.style]}>

           <TouchableWithoutFeedback onPress={this.clickHandler}>
                <Animated.View style = {[styles.button, styles.menu, rotation]}>
                    <AntDesign name="plus" size={24} color="#FFF" />
                </Animated.View>
           </TouchableWithoutFeedback>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      alignItems: 'center'
    },
    button: {
        position: 'relative',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: '#F02A4B',
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 },
        top: 650,
        right: 15
    },
    menu: {
        backgroundColor: '#00717f'
    }
  });