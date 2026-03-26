import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

export default function Home ({ navigation, route }){
    const usuario = route.params?.usuario;

    useEffect(
        () => {
            if(usuario) {
                navigation.setOptions({
                    title: 'Bem vindo ' + usuario
                })
            }
        }, [usuario]
    )

    return(
        <View>
            <Text>
                Olá, seja bem-vinda(o).
            </Text>
            <Button title='Voltar' onPress={() => {
                navigation.goBack();
            }}/>
            <Button title='Navegar' onPress={() => {
                navigation.navigate('Login')
            }}/>
            <Button title='Sair' onPress={() =>{
                navigation.reset({
                    index: 0,
                    routes: [{name:'Login'}],
            })
            }} />
        </View>
    )
}