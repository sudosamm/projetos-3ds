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
        checkUser();
        fetchTasks();
    }, []);

    async function checkUser() {
        const { data } = await supabase.auth.getUser()
        setUser(data.user)
    }

    async function fetchTasks() {
        const { data } = await supabase
            .from('tasks')
            .select('*')
        setTasks(data);
    }
    async function login() {
        const { data } = await supabase
            .auth.signInWithPassword({
                email,
                password
            })
        setUser(data.user);
    }
    async function addTask(){
        const { data } = await supabase
            .from('tasks')
            .insert([
                title,
                user_id=user?.id
            ]);
        fetchTasks();
    }
    async function logout() {
        await supabase.auth.signOut();
        setUser(null);
    }

    return (
        <View>
            <Text>
                {user ? 'Logado' : 'Deslogado'}
            </Text>
            {!user && (
                <>
                    
                </>
            )}
        </View>
    )
}
