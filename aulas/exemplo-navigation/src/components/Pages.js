import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import Arquivo from "../pages/Arquivo";

const Drawer = createDrawerNavigator();

export default function Pages({route}) {
    const usuario = route.params?.usuario;
    return(
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#ffdfcf',
                },
                headerTintColor: '#168321',
                headerStyle:{
                    backgroundColor: '#067'
                },
                headerTintColor: '#698',
                drawerLabelStyle: {
                    color: '#123286'
                }
            }}
            >
            <Drawer.Screen 
                name="Home"
                component={Home}
                initialParams={{ usuario: usuario}}
            />
            <Drawer.Screen 
                name="Arquivo"
                component={Arquivo}
                options={{
                    title: "Tela extra que não serve pra nada",
                }}
            />
        </Drawer.Navigator>
    )
}