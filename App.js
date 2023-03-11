import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';
import {CartContextProvider} from './src/context/cart'

 export default function App(){
    return(
      <NavigationContainer>
       <CartContextProvider>
          <MainStack/>
       </CartContextProvider>
      </NavigationContainer>
    )

 } 