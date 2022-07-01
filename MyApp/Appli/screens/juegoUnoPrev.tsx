import { NavigationContainer } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, View, ImageBackground, TouchableOpacity, Button, SafeAreaView, TouchableHighlight } from 'react-native';
import { GradientBackground } from '../componentes/GradientBackground';
import Sound from 'react-native-sound';
import {useState} from 'react';
import Voice from '@react-native-voice/voice';

interface Props extends StackScreenProps<any,any>{};





const juegoUnoPrev = ({navigation}: Props) => {
   
  
  Sound.setCategory('Playback');
    
  var whoosh = new Sound('repite_sonido.mp3', null, (error) => {
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
        navigation.navigate('juegoUno')
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });



  
  return (

    
    <GradientBackground>

        <View style={loginStyles.container } >

                
        <TouchableOpacity>

            <Image source={require('@recursos/images/monoMoto.png')}
            style={loginStyles.logo}/>

        </TouchableOpacity>


        <TouchableOpacity>

            <Image source={require('@recursos/images/ondaSonido.png')}
            style={loginStyles.logo}/>

        </TouchableOpacity>

        </View>

        
    </GradientBackground>
  );
    /*// Enable playback in silence mode
    Sound.setCategory('Playback');
    
    var whoosh = new Sound('repite_sonido.mp3', null, (error) => {
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

                    <Image source={require('@recursos/images/monoMoto.png')}
                    style={loginStyles.logo}/>

                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => { whoosh.play()}}>

                <Text style = {mainStyles.titleText}>Repetir audio</Text>

                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('juegoCara')}>

                <Text style = {mainStyles.titleText}>Grabar audio</Text>

                </TouchableOpacity>
            </View>
            
        </GradientBackground>
    )*/
    
};
export default juegoUnoPrev;


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
        marginTop: 80,
      },

    logo: {
        height:250, 
        width:250, 
        marginRight: 10, resizeMode: 'stretch',
        display:"flex",
        borderRadius:3,
    },

    replay: {
        height:50, 
        width:80, 
        marginRight: 90, resizeMode: 'stretch',
        display:"flex",
        borderRadius:3,
    },
})

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      padding: 5,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
    },
    titleText: {
      fontSize: 22,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    buttonStyle: {
      flex: 1,
      justifyContent: 'center',
      marginTop: 15,
      padding: 10,
      backgroundColor: '#000',
      marginRight: 2,
      marginLeft: 2,
    },
    buttonTextStyle: {
      color: '#fff',
      textAlign: 'center',
    },
    horizontalView: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
    },
    textStyle: {
      textAlign: 'center',
      padding: 12,
    },
    imageButton: {
      width: 50,
      height: 50,
      marginRight:10,
    },
    textWithSpaceStyle: {
      flex: 1,
      textAlign: 'center',
      color: '#B0171F',
    },
  });

  const iconStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      },
    });