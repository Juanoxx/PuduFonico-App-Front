import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LogoRight } from './LogoRight';
import vistaVacia from '../screens/vistaVacia';
import iniciarJuego from '../screens/iniciarJuego';
import temporizador from '../screens/temporizador';
import juegoUno from '../screens/juegoUno';
import juegoCara from '../screens/juegoCara';
import juegoUnoPrev from '../screens/juegoUnoPrev';
import discriminacionAuditiva from '../screens/discriminacionAuditiva';
import discriPositiva from '../screens/descriPositiva';
import discriNegativa from '../screens/discriNegativa';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        
        initialRouteName='vistaVacia' //Indica la ventana con la cual inicia la aplicación

      >
        
      <Stack.Screen name='iniciarJuego' component={iniciarJuego} options={{headerStyle: {
          backgroundColor: '#3E8E7E',
        },
        headerTitle: (props)  => <LogoRight {...props} />,
        
        headerShown: true,}}/>

      <Stack.Screen name='temporizador' component={temporizador} options={{headerStyle: {
          backgroundColor: '#3E8E7E',
        },
        headerTitle: (props)  => <LogoRight {...props} />,
        
        headerShown: true,}}/>

      <Stack.Screen name='juegoUno' component={juegoUno} options={{headerStyle: {
          backgroundColor: '#3E8E7E',
        },
        headerTitle: (props)  => <LogoRight {...props} />,
        
        headerShown: true,}}/>

      <Stack.Screen name='juegoUnoPrev' component={juegoUnoPrev} options={{headerStyle: {
          backgroundColor: '#3E8E7E',
        },
        headerTitle: (props)  => <LogoRight {...props} />,
        
        headerShown: true,}}/>

      <Stack.Screen name='juegoCara' component={juegoCara} options={{headerStyle: {
          backgroundColor: '#3E8E7E',
        },
        headerTitle: (props)  => <LogoRight {...props} />,
        
        headerShown: true,}}/>

      <Stack.Screen name='discriminacionAuditiva' component={discriminacionAuditiva} options={{headerStyle: {
          backgroundColor: '#3E8E7E',
        },
        headerTitle: (props)  => <LogoRight {...props} />,
        
        headerShown: true,}}/>

      <Stack.Screen name='discriPositiva' component={discriPositiva} options={{headerStyle: {
          backgroundColor: '#3E8E7E',
        },
        headerTitle: (props)  => <LogoRight {...props} />,
        
        headerShown: true,}}/>

      <Stack.Screen name='discriNegativa' component={discriNegativa} options={{headerStyle: {
          backgroundColor: '#3E8E7E',
        },
        headerTitle: (props)  => <LogoRight {...props} />,
        
        headerShown: true,}}/>


    <Stack.Screen name='vistaVacia' component={vistaVacia} options={{
          headerShown: false, //para ocultar la barra superior que indica la pestaña en la que nos encontramos
      }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}