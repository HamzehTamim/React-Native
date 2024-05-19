import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

const PaymentForm = () => {
  const [PhoneNumber, setPhoneNumber] = useState('');


  const handleSubmit = () => {
    // Add your payment processing logic here
    // For demonstration, we'll just show an alert
    Alert.alert("Payment Submitted", `Phone Number: ${PhoneNumber}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={setPhoneNumber}
        onChangeText={handleSubmit}
        placeholder="966 5021568254"
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