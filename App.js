import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// -- Components -- 
const Stack = createStackNavigator(); 

// --- Main screens ---

// --- Onboarding screens ---
// when pushing button on sign in screen, move to sign up screen 
// when pushing button on sign up screen, move to sign in screen 
const SignInScreen = () => {
  const navigation = useNavigation();
  return (
  <View style={styles.layout}>
    <Text style={styles.title}>Sign In Screen</Text>
    <Button onPress={() => navigation.navigate('SignUp')} title={'Sign Up Instead'} /> 
  </View> 
  ); 
}; 
const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
  <View style={styles.layout}>
    <Text style={styles.title}>Sign Up Screen</Text>
    <Button onPress={() => navigation.navigate('SignIn')} title={'Sign In Instead'} /> 
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
