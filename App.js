import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const plus = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum.toString());
  };
  const minus = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference.toString());
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput style={{ width: 200, borderColor: "gray", borderWidth: 1 }} onChangeText={num1 => setNum1(num1)} keyboardType='numeric' />
      <TextInput style={{ width: 200, borderColor: "gray", borderWidth: 1 }} onChangeText={num2 => setNum2(num2)} keyboardType='numeric' />
      <View style={styles.container2}>
        <Button style={styles.container2} onPress={plus} title=" + " />
        <Button style={styles.container2} onPress={minus} title=" - " />
      </View>
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
  container2: {
    flexDirection: 'row',
  }

});

