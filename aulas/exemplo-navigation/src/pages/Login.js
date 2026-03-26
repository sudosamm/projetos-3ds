import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useState } from 'react';

export default function Login({ navigation }){
    const [user, setUser] = useState("");
    function entrar() {
        if(user === "Aluno"){
            navigation.navigate("Pages", {usuario: user});
        } else {
            alert("O usuário está incorreto");
        }
    }
    return(
        <View>
            <Text>Insira o nome de usuário:</Text>
            <TextInput 
                placeholder='Usuario'
                value={user}
                onChangeText={setUser}
            />
            <TouchableOpacity onPress={entrar}>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}