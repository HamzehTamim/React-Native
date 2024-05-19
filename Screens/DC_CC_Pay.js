import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert ,NativeModules  } from 'react-native';



const { Hyperpay } = NativeModules;

const PaymentForm = () => {


  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [Card_Holder, setHolder] = useState('');

  const handleSubmit = () => {
    // Add your payment processing logic here
    // For demonstration, we'll just show an alert

    NativeModules.Hyperpay.CustomUI();

    // Alert.alert("Payment Submitted", `Card Number: ${cardNumber}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Card Number</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
        placeholder="1234 5678 9101 1121"
      />

      <Text style={styles.label}>Expiry Date</Text>
      <TextInput
        style={styles.input}
        value={expiryDate}
        onChangeText={setExpiryDate}
        placeholder="MM/YY"
      />
   <Text style={styles.label}>Card Holder</Text>
      <TextInput
        style={styles.input}
        value={Card_Holder}
        onChangeText={setHolder}
        secureTextEntry
        placeholder="Holder NAME"
      />

      <Text style={styles.label}>CVV</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={cvv}
        onChangeText={setCvv}
        secureTextEntry
        placeholder="123"
      />
      

      <Button title="Submit Payment" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    color:'black'
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color:'black'
  }
});

export default PaymentForm;