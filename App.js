import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './screens/login';


   /*<NavigationContainer>
          
          </NavigationContainer>*/
export default function App() {
 
 
 
  return (
    <View style={styles.container}>
      <Text>
        build a login screen and an registration screen and a personal info 
        screen that will allow people to register for this app !!!!!!!
        </Text>

        <Login/>
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
});
