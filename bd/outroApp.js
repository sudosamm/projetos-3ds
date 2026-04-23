import { 
  Text, 
  View, 
  TouchableOpacity, 
  TextInput, 
  FlatList, 
} from 'react-native';
import { supabase } from './supabaseClient'
import { useEffect, useState } from 'react';

export default function App() {
  const[titulo, setTitulo] = useState('');
  const[descricao, setDescricao] = useState('');
  const[lista, setLista] = useState([]);
  const[tarefaId, setTarefaId] = useState(null);

  async function buscarTarefas(){
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
    if(error){
      console.log(error)
      return;
    }
    setLista(data)
  }

  async function adicionarTarefa(){
    if(tarefaId) {
      const { error } = await supabase
        .from('tasks')
        .update({title: titulo, description:descricao})
        .eq('id', tarefaId)
      if(error){
        console.log(error);
        return;
      }
      setTarefaId(null);
    }
    else {
      const {error} = await supabase
        .from('tasks')
        .insert({title:titulo, description:descricao})
      if(error){
        console.log(error);
        return;
      }
    } 

    setTitulo('');
    setDescricao('');
    buscarTarefas();
  }

  async function removerTarefa(){
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id)
    if(error) {
      console.log(error);
      return;
    }
    buscarTarefas();
  }

  function editarTarefa(item){
    setTarefaId(item.id);
    setTitulo(item.title);
    setDescricao(item.description);
  }

  useEffect(() => {
    buscarTarefas();
  }, []);

  return (
    <View>
      <Text>Olá, diaxo</Text>
      <TextInput 
        placeholder='insira o titulo'
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput 
        placeholder='insira a descrição'
        value={descricao}
        onChangeText={setDescricao}
      />
      <TouchableOpacity
        onPress={adicionarTarefa}>
        <Text>{tarefaId ? 'Salvar alterações' : 'Salvar'}</Text>
      </TouchableOpacity>
      <FlatList 
        data={lista}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <TouchableOpacity onPress={() => editarTarefa(item)
            }>
              <Text>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>removerTarefa(item.id)}>
              <Text>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />

    </View>
  );
}
