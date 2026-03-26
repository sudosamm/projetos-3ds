import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Importar as telas
import Login from './src/pages/Login';
import Pages from "./src/components/Pages";

// Define a criação do modo de navegação principal por meio de pilhas
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App () {
  return (
    // NavigationContainer será o cérebro da navegação
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{
            title: "Tela de Login",
            headerShown: true
          }}
        />
        <Stack.Screen
          name="Pages"
          component={Pages}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}