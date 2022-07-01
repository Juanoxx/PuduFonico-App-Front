import { NavigationContainer } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { GradientBackground } from '../componentes/GradientBackground';


interface Props extends StackScreenProps<any,any>{};


const temporizador = ({navigation}: Props) => {
   
    const [contador,setContador] = useState(3);

    setTimeout(function(){
        setContador(contador - 1);

        if(contador == 1)
        return navigation.navigate('juegoUnoPrev');
    }, 1000);

    return (
        <GradientBackground>
            
            <View style={loginStyles.container}>
                    <Text style = {mainStyles.titleText}>{contador}</Text>
                
            </View>

            
        </GradientBackground>
    )
    
};
export default temporizador;


const mainStyles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'linear-gradient(180deg, #FF814B 0%, #FAC3AC 100%)',
    },

    containerCenter: {
        paddingTop: 10,
        alignItems: 'center',
        marginBottom: 25,
    },

    titleText: {
        fontSize: 195,
        marginTop: 15,
        marginBottom: 15,
        fontFamily: "roboto-medium",
        color: '#458C4C',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    descriptionText: {
        fontSize: 15,
        marginTop: 130,
        marginBottom: 15,
        fontFamily: "Poppins-SemiBold",
        color: '#FFFF',
        fontWeight: 'bold',
    },
    btnMain: {
        width: 280,
        marginTop: 40,
        marginBottom: 20,
        alignItems: 'center',
        borderRadius: 60
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 15,
        fontFamily: 'Poppins-Bold',
    },

    txtTransparent: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
    },
    
})

  const loginStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
      },

    logo: {
        height:150, 
        width:150, 
        marginRight: 10, resizeMode: 'stretch',
        display:"flex",
        borderRadius:3,
    },
})