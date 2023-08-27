import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Guess a number between 1-100');
  const [guessCount, setGuessCount] = useState(0);

  const guessResult = () => {
    const userGuess = parseInt(guess, 10);
    if (userGuess < randomNum) {
      setMessage("Your guess " + userGuess + " is too low");
      setGuessCount(guessCount + 1);
    } else if (userGuess > randomNum) {
      setMessage("Your guess " + userGuess + " is too high");
      setGuessCount(guessCount + 1);
    } else {
      setMessage("You guessed the number in " + guessCount + " guesses");
      setGuessCount(0);
      setRandomNum(Math.floor(Math.random() * 100) + 1);
    }
    setGuess('');
  };

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <TextInput
        style={{ width: 50, marginTop: 10, borderColor: 'gray', borderWidth: 1, textAlign: 'center' }}
        onChangeText={(guess) => setGuess(guess)}
        keyboardType='numeric'
      />
      <Button style={styles.button} title="Make Guess" onPress={guessResult} />
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    color: 'white',
    backgroundColor: 'ocean blue',
  }

});

