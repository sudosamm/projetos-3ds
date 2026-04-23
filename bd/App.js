import { useState, useEffect } from 'react';
import { Text, View, Button, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { supabase } from './Supabase';

export default function App() {
    const [user, setUser] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() =>{
        checkUser()
    })

    return (
        <View>
            
        </View>
    )
}