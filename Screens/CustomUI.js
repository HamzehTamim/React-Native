import React from 'react';
import { View, Text, Button } from 'react-native';

const CustomUIScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Custom UI</Text>
      {/* <Button
        title="Go to PaymentUI"
        onPress={() => navigation.navigate('PaymentUI')}
      /> */}
      <View style={{marginTop:20}}>
        <Button
        title="CC/DC Payment"
        onPress={() => navigation.navigate('DC_CC_Pay')}
      />
      </View>
      <View style={{marginTop:20}}>
        <Button
        title="STC Payment"
        onPress={() => navigation.navigate('Stc_Pay')}
      />
      </View>
    </View>
  );
};

export default CustomUIScreen;