import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Button } from 'react-native';
import {CartContext} from '../context/cart';

export default function HomeScreen(props) {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const {sign, register, user} = useContext(CartContext) 

  function handleLogin(email, password){
      if(!email && !password){
        alert("Email e senha não informados!")
        return
      }else if(!email && password){
        alert("Email não informado!")
        setPassword('')
        return
      }else if(email && !password){
        alert("Senha não informada!")
        setEmail('')
        return
      }
     const bool = sign(email, password)
      if(bool){
        setEmail('')
        setPassword('')
        props.navigation.navigate('User')
      }else{
        setEmail('')
        setPassword('')
      }
  }
  function handleRegister(email, password){
      register(email, password)
  }

  function handleGoRegister(){
    props.navigation.navigate('Register')
  }

  console.log(user)
  return (
    <View style={styles.container} >
      <ImageBackground source={require('../assets/images/img.jpg')} style={styles.imageBackground}>
        <Text style={styles.textHeader}>Tela de Login</Text>
        <TextInput 
          style={styles.input} 
          placeholder='Digite seu Email...' 
          placeholderTextColor={'#FFF'} 
          value={email}
          onChange={e=>setEmail(e.target.value)}
          />
        <TextInput 
          style={styles.input} 
          placeholder='Digite sua Senha...' 
          placeholderTextColor={'#FFF'} 
          secureTextEntry={true}
          value={password}
          onChange={e=>setPassword(e.target.value)}
          />
        <Button title='Entrar' onPress={()=>handleLogin(email, password)}/>
        <Text style={styles.textCadastro} onPress={handleGoRegister}>Cadastrar</Text>
      </ImageBackground>
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
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width:'100%',
    height:'100%'
  },
  textHeader:{
    fontSize: 26,
    marginBottom:20,
    color: '#FFF',
  },  
  input:{
    paddingHorizontal:10,
    borderColor: '#FFF',
    borderBottomWidth: 1,
    width:'60%',
    marginBottom:10,
    height:40 ,
    fontSize: 16,
    color:'#FFF'
  },
  textCadastro: {
    color: 'red',
    borderBottomWidth: 1,
    borderColor: 'red',
    fontSize: 15,
    marginTop: 15,
  },
  textEntrar:{
    fontSize:20,
    color: '#fff'
  },
  touchArea:{
    paddingHorizontal: 12,
    paddingVertical:5,
    backgroundColor: 'red',
    borderRadius:6,
    marginBottom:10,
    marginTop: 15,
  }
});
