import React, { useState, useRef } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { block } from "react-native-reanimated";

const StopWatch = () => {
  const [timer, setTimer] = useState(700);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const increment = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(increment.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(increment.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return `${getMinutes} : ${getSeconds}`;
  };

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.normalText}>{formatTime()}</Text>
      {!isActive && !isPaused ? (
        <Button title="Start" onPress={handleStart}></Button>
      ) : isPaused ? (
        <Button title="Pause" onPress={handlePause}></Button>
      ) : (
        <Button title="Resume " onPress={handleResume}></Button>
      )}
      <Button title="Reset" onPress={handleReset} disabled={!isActive}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  normalText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginLeft: "auto",
    marginRight: "auto",
  },

  teststyles: {
    fontSize: 40,
  },
});

export default StopWatch;
