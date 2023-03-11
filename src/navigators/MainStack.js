import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../pages/HomeScreen"
import UserScreen from '../pages/UserScreen';
import RegisterScreen from '../pages/RegisterScreen';

const MainStack = createStackNavigator()

export default () => (
        
    <MainStack.Navigator>
        <MainStack.Screen name='Home' component={HomeScreen}/>
        <MainStack.Screen name='User' component={UserScreen}/>
        <MainStack.Screen name='Register' component={RegisterScreen}/>
    </MainStack.Navigator>
        
)