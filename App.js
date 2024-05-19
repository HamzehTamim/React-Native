import { StatusBar , Button ,alert } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PaymentUI from './Screens/PaymentUI';
import CustomUI from './Screens/CustomUI';
import DC_CC_Pay from './Screens/DC_CC_Pay';
import Stc_Pay from './Screens/Stc_Pay';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="PaymentUI" component={PaymentUI} />
        <Stack.Screen name="CustomUI" component={CustomUI} />
        <Stack.Screen name="DC_CC_Pay" component={DC_CC_Pay} />
        <Stack.Screen name="Stc_Pay" component={Stc_Pay} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const style = StyleSheet.create({
  Container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
