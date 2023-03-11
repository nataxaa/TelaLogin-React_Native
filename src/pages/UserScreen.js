import { View , StyleSheet, Text} from "react-native";


export default function UserScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.TextUser}>Tela User</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },  
    TextUser:{
        fontSize: 30,
        color: 'red',
    }
})