import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeModules } from 'react-native';

const { Hyperpay } = NativeModules;
 
oncheckoutReadyUI = async()=> {

  const paymentParams = {
    checkoutID: "1F07A84F28D4949D90AE5308F5230CEB.uat01-vm-tx03",
    paymentType: "credit_card"
};

  NativeModules.Hyperpay.ReadyUI(paymentParams.checkoutID,paymentParams.paymentType)
}

const PaymentScreen = ({ navigation }) => {
  return (
    <View >
      <Text>Payment Screen</Text>
      <View style={style.ButtonView1}>
        <Button
          title="CustomUI"
          onPress={() => navigation.navigate('CustomUI')}
        />
        </View>
        <View style={style.ButtonView2}>
        <Button
          title="Ready UI"
          onPress={() => oncheckoutReadyUI()}
        />
      </View>
    </View>
  );
};

export default PaymentScreen;

const style = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 16
  },
  ButtonView1: {
    marginTop:20,

  },
  ButtonView2: {
    marginTop:20,

  }
  
  

})