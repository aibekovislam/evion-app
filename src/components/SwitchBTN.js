import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Animated, PanResponder } from 'react-native';

export const CustomSwitch = ({ isOn, handleToggle, colorOne, colorTwo }) => {
    const animateCircle = useRef(new Animated.Value(isOn ? 130 : 10)).current;
    const animateTextOpacity = useRef(new Animated.Value(isOn ? 0 : 1)).current;
    const [active, setActive] = useState(isOn);
    const swipeEnded = useRef(false);

    useEffect(() => {
        Animated.parallel([
            Animated.spring(animateCircle, {
                toValue: active ? 120 : 10,
                useNativeDriver: false,
            }),
            Animated.timing(animateTextOpacity, {
                toValue: active ? 0 : 1,
                duration: 200,
                useNativeDriver: false,
            })
        ]).start();
    }, [active]);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
            if (Math.abs(gestureState.dx) > 50) {
                swipeEnded.current = true;
            }
        },
        onPanResponderRelease: (evt, gestureState) => {
            if (swipeEnded.current) { 
                if (gestureState.dx > 50) {
                    setActive(true);
                } else if (gestureState.dx < -50) {
                    setActive(false);
                }
                handleToggle();
            }
            swipeEnded.current = false; 
        }
    });

    return (
        <Animated.View
            {...panResponder.panHandlers}
            style={[styles.container, { backgroundColor: active ? colorTwo : colorOne }]}
        >
            <Animated.Text style={[styles.textStyles, { left: 70, opacity: animateTextOpacity }]}>ПОЕХАЛИ</Animated.Text>
            <Animated.View style={[styles.circle, { left: animateCircle }]} />
            <Animated.Text style={[styles.textStyles, { right: 70, opacity: animateTextOpacity.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0]
            }) }]}>ЗАВЕРШИТЬ</Animated.Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 165,
        height: 50,
        borderRadius: 100,
        borderColor: '#FFF',
        borderWidth: 1,
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    textStyles: {
        fontSize: 14,
        color: 'white',
        position: 'absolute',
    },
    circle: {
        width: 30,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 15,
        position: 'absolute',
    }
});
