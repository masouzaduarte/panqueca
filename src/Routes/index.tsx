import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TelaInicial from '../TelaInicial';
import Chat from '../Chat';


const AppStack = createNativeStackNavigator();



const AppRoutes: React.FC = () => {




  return (
    <AppStack.Navigator  screenOptions={{
        headerStyle: {
          backgroundColor: '#000000', // Defina a cor desejada aqui
        },
        headerTintColor: '#FFF', // Define a cor do texto do cabeçalho
        headerTitleStyle: {
           
          fontWeight: 'bold',
        },
      }}>
      <AppStack.Screen
        name="TelaInicial"
        options={{ title: 'Fale com o panqueca!' }}
        component={TelaInicial}
      />
      <AppStack.Screen name="ConversePanqueca"  options={{ title: 'Pergunte tudo!' }} component={Chat} />
     
    </AppStack.Navigator>
  );
};

export default AppRoutes;
