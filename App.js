import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// -- Components -- 
// stack navigator for app navigation 
const Stack = createStackNavigator(); 

// --- Main screens ---
// Tab Navigator is the main screen 
// it will have 4 tabs, Home, Feed, Catalog, and Account
const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Catalog" component={CatalogScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  )
}

// HomeScreen 
const HomeScreen = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
};
// FeedScreen 
const FeedScreen = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Feed Screen</Text>
    </View>
  );
};
// CatalogScreen 
const CatalogScreen = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Catalog Screen</Text>
    </View>
  );
};
// AccountScreen
const AccountScreen = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Account Screen</Text>
    </View>
  );
};


// --- Onboarding screens ---
// when pushing button on sign in screen, move to sign up screen 
// when pushing button on sign up screen, move to sign in screen 
const SignInScreen = () => {
  const navigation = useNavigation();
  return (
  <View style={styles.layout}>
    <Text style={styles.title}>Sign In Screen</Text>
    <Button onPress={() => navigation.navigate('SignUp')} title={'Sign Up Instead'} />
    <Button onPress={() => navigation.navigate('Main')} title={'Go to Main App (for testing)'} />
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

// Authentication flow 
// boolean for signed in
let isSignedIn = false; 

// --- App ---

const App = () => (
    <NavigationContainer>
      {/* App navigation structure goes here */}
      <Stack.Navigator headerMode='none' initialRouteName='SignIn'>
        {isSignedIn ? (
          <Stack.Screen name="Main" component={MainNavigator}></Stack.Screen>
        ) : (
          <Stack.Screen name="SignIn" component={SignInScreen} options={{title: "Sign In"}}></Stack.Screen>
        )}
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
