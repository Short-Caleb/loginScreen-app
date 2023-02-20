import React, {useEffect, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text, View, StyleSheet, Button, TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = () => {
    
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
        if (permaInfo === null) return { FName: '', LName: '', Email: '', Password: ''};
        
        setProfileInfo(permaInfo);
        console.log(permaInfo)
    }
    
    restoreInfo();
 })
 
 
 const addProfile = () => {
    setProfileInfo({ FName: userFName, LName: userLName, Email: userEmail, Password: userPassword});

    console.log(profileInfo.FName)
    console.log(profileInfo.LName)
    console.log(profileInfo.Email)
    console.log(profileInfo.Password)
    storeInfo();
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
     
            const jsonValue = JSON.stringify(seedInfo)
            console.log(jsonValue)
            await AsyncStorage.setItem('@storage_Key', jsonValue)
            return seedInfo;
        }
    };



    return (
    <View>
        <Text>is anything working </Text>
        <TextInput
            style={styles.inputs}
            editable
            onChangeText={setUserFName}
            value={userFName}
            />
        <TextInput
            style={styles.inputs}
            editable
            onChangeText={setUserLName}
            value={userLName}
            />
        <TextInput
            style={styles.inputs}
            editable
            onChangeText={setUserEmail}
            value={userEmail}
            />
        <TextInput
            style={styles.inputs}
            editable
            onChangeText={setUserPassword}
            value={userPassword}
            />

        <Button
              title='Create Account'
              onPress={addProfile}      /> 
    </View>
  )
}

export default Login


const styles = StyleSheet.create({
    inputs: {
        margin: 12,
        borderWidth: 1,
        padding: 5,
        height: 24,
        fontSize:16,
    
    }
})