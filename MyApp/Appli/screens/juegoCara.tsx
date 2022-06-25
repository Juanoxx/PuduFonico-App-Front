import { NavigationContainer } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View, ImageBackground, TouchableOpacity, Button } from 'react-native';
import { GradientBackground } from '../componentes/GradientBackground';
import Sound from 'react-native-sound';
import {useState} from 'react';

interface Props extends StackScreenProps<any,any>{};

const juegoCara = ({navigation}: Props) => {
    
    // Enable playback in silence mode
    Sound.setCategory('Playback');

    // Load the sound file 'whoosh.mp3' from the app bundle
    // See notes below about preloading sounds within initialization code below.
    
    var whoosh = new Sound('tutor_imita.mp3', null, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
  
    // Play the sound with an onEnd callback
    whoosh.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
    return (
        <GradientBackground>
            
            <View style={loginStyles.container}>

                
                <TouchableOpacity onPress={ () => navigation.navigate('vistaVacia')}>

                    <Image source={require('@recursos/images/juegoDos.png')}
                    style={loginStyles.logo}/>

                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => { whoosh.play()}}>

                <Text style = {mainStyles.titleText}>Repetir audio</Text>

                </TouchableOpacity>
            </View>
            
        </GradientBackground>
    )
    
};
export default juegoCara;


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
        fontSize: 35,
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
        marginTop: 100,
      },

    logo: {
        height:350, 
        width:350, 
        marginRight: 10, resizeMode: 'stretch',
        display:"flex",
        borderRadius:3,
    },
})