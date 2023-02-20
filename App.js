import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './screens/login';
import { SafeAreaView } from 'react-native-safe-area-context';


   /*<NavigationContainer>
          
          </NavigationContainer>*/
export default function App() {
 
     
  const [userFName, setUserFName] = useState('');
  const [userLName, setUserLName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [newUser, setNewUser] = useState(true)
  const [profileInfo, setProfileInfo] = useState({});
 
  useEffect(() => {
     async function restoreInfo() {
         let permaInfo;
         permaInfo = await getInfo();
         if (permaInfo === null || permaInfo === {}) return { FName: '', LName: '', Email: '', Password: ''};
         
         setProfileInfo(permaInfo);
         console.log(permaInfo)
     }
     
     restoreInfo();
  },  []);
  
  
  const addProfile = () => {
     setProfileInfo({ FName: userFName, LName: userLName, Email: userEmail, Password: userPassword});
 
     
     storeInfo();
     console.log(profileInfo.FName)
     console.log(profileInfo.LName)
     console.log(profileInfo.Email)
     console.log(profileInfo.Password)
  }
  
 
 
     const storeInfo = async () => {
         try{
             const jsonValue = JSON.stringify(profileInfo)
             await AsyncStorage.setItem('@storage_Key', jsonValue)
         } catch(e) {
             console.log(e)
         
         }
     }
 
     const getInfo = async () => {
         try { 
             const jsonValue = await AsyncStorage.getItem('@storage_Key');
             if (jsonValue === null)  return null;
             return jsonValue != null ? JSON.parse(jsonValue) : null;  
         } catch(e) {
             const seedInfo = { FName: '', LName: '', Email: '', Password: ''}
             const jsonValue = JSON.stringify(seedInfo)
             console.log(jsonValue)
             await AsyncStorage.setItem('@storage_Key', jsonValue)
             return seedInfo;
         }
     };
 
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrolling}>
      
      <View>
      <Text>
        build a login screen and an registration screen and a personal info 
        screen that will allow people to register for this app !!!!!!!
        </Text>
        </View>

        <View style={styles.scrolling}>
          <View> 
          <Text>is anything working </Text>
        <Text style={styles.labels}>FIRST NAME</Text>
        <TextInput
            style={styles.inputs}
            editable
            onChangeText={setUserFName}
            value={userFName}
            />
          </View>

       <View style={styles.scrolling}>
       <Text style={styles.labels}>LAST NAME</Text>
        <TextInput
            style={styles.inputs}
            editable
            onChangeText={setUserLName}
            value={userLName}
            />
       </View>

            <View style={styles.scrolling}>
            <Text style={styles.labels}>EMAIL</Text>
        <TextInput
            style={styles.inputs}
            editable
            onChangeText={setUserEmail}
            value={userEmail}
            />
            </View>

          <View style={styles.scrolling}>
          <Text style={styles.labels}>PASSWORD</Text>
        <TextInput
            style={styles.inputs}
            editable
            onChangeText={setUserPassword}
            value={userPassword}
            />
          </View>

        <Button 
              title='Create Account'
              onPress={addProfile}      /> 

        </View>
        
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    
    
  },
  scrolling: {
   padding: 12,
  
  },
  inputs: {
    margin: 12,
    borderWidth: 1,
    padding: 5,
    height: 24,
    fontSize:16,

},
  labels: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'darkblue',
  },
   button: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'darkgreen',
   }
});
