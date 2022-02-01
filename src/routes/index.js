import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Search from "../pages/Search";
import Withdraw from '../pages/WithdrawScreen';
const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Withdraw" component={Withdraw} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;
