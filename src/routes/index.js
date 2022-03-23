import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Header, HeaderBackButton } from '@react-navigation/elements';

import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Search from "../pages/Search";
import Withdraw from '../pages/WithdrawScreen';
import Dispatch from "../pages/Dispatch";
const Stack = createNativeStackNavigator();

function Routes() {
    function customPropsScreen(navigation, title, textColor, barColor) {
        const defaultPropsScreenStyles = {
            headerTitleStyle: {
                color: "#ff0000",
            },
            header: () => (
                <Header
                    headerTitle=""
                    title={title ? title : "Título da barra"}
                    headerTintColor={textColor ? textColor : "#777"}
                    headerTitleAlign="center"
                    headerStyle={{
                        backgroundColor: barColor ? barColor : '#000'
                    }}
                    headerLeft={() => (
                        <HeaderBackButton
                            canGoBack
                            tintColor={textColor ? textColor : "#FF0000"}
                            onPress={() => navigation.goBack()}
                        />
                    )}
                />
            ),
            animationEnabled: true,
        };

        return defaultPropsScreenStyles;
    }

    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName='Home'>

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Controle Patrimonial',                        
                        headerTitleAlign: 'center',
                        headerTintColor: '#FFF',
                        headerStyle: {   
                                  
                            backgroundColor: '#299FCE'                            
                        },

                    }}
                />

                <Stack.Screen
                    name="Registration"
                    component={Registration}
                    options={({ navigation }) => ({
                        ...customPropsScreen(navigation, "Cadastro", "#FFF", "#299FCE"),
                    })}
                />
                <Stack.Screen name="Search" component={Search}
                    name="Search"
                    component={Search}
                    options={({ navigation }) => ({
                        ...customPropsScreen(navigation, "Pesquisar", "#FFF", "#299FCE"),
                    })}
                />
                <Stack.Screen
                    name="Withdraw"
                    component={Withdraw}
                    options={({ navigation }) => ({
                        ...customPropsScreen(navigation, "Retirada", "#FFF", "#299FCE"),
                    })}

                />
                <Stack.Screen
                    name="Dispatch"
                    component={Dispatch}
                    options={({ navigation }) => ({
                        ...customPropsScreen(navigation, "Despacho", "#FFF", "#F82949"),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;
