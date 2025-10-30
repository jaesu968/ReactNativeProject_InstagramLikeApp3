import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// -- Components -- 
const Stack = createStackNavigator(); 

// --- Main screens ---

// --- Onboarding screens ---
const SignInScreen = () => {
  return (
  <View style={styles.layout}>
    <Text style={styles.title}>Sign In Screen</Text>
  </View> 
  ); 
}; 
const SignUpScreen = () => {
  return (
  <View style={styles.layout}>
    <Text style={styles.title}>Sign Up Screen</Text>
  </View>
  ); 
}; 

// --- App ---

const App = () => (
    <NavigationContainer>
      {/* App navigation structure goes here */}
      <Stack.Navigator>
        <Stack.Screen 
        component={SignInScreen} 
        name="SignIn" 
        options={{title: "Sign In"}}></Stack.Screen>
        <Stack.Screen 
        component={SignUpScreen} 
        name="SignUp" 
        options={{title:"Sign Up"}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
