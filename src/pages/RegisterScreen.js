import { useContext, useState } from "react";
import { View, StyleSheet, Text, TextInput, ImageBackground, Button } from "react-native";
import { CartContext } from "../context/cart";

export default function RegisterScreen(props){
    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()

    const {register} = useContext(CartContext)
    
    function handleRegister(email, password, password2){
        if(email && (password == password2)){
            register(email, password)
            props.navigation.navigate('Home')
        }else if(!email){
            alert("Email não informado!")
            return
        }else if(password != password2){
            alert("Senhas Diferentes!")
            setPassword('')
            setPassword2('')
        }
    }

    return(
        <View style={styles.container}>
            <ImageBackground
             source={require('../assets/images/img.jpg')}
             style={styles.backgorund}
            >
                <Text style={styles.textTitle}>Cadastro</Text>
                <TextInput
                placeholder="Digite o seu Email..."
                placeholderTextColor={'#FFF'}
                style={styles.input}
                value={email}
                onChange={e=>setEmail(e.target.value)}
                />
                <TextInput
                placeholder="Digite uma Senha..."
                secureTextEntry={true}
                style={styles.input}
                value={password}
                onChange={e=>setPassword(e.target.value)}
                />
                <TextInput
                placeholder="Digite novamente a Senha..."
                secureTextEntry={true}
                style={styles.input}
                value={password2}
                onChange={e=>setPassword2(e.target.value)}
                />
                <Button title="Cadastrar" onPress={()=>handleRegister(email, password, password2)} />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: 'center',
    },
    backgorund:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        width:'100%',
        height:'100%'
    },
    textTitle:{
        fontSize: 30,
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
})