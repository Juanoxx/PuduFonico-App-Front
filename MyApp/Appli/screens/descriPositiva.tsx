import { NavigationContainer } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View, ImageBackground, TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import { GradientBackground } from '../componentes/GradientBackground';
import Sound from 'react-native-sound';
import {useState} from 'react';

interface Props extends StackScreenProps<any,any>{};

const discriPositiva = ({navigation}: Props) => {
    

    // Enable playback in silence mode
    Sound.setCategory('Playback');

    // Load the sound file 'whoosh.mp3' from the app bundle
    // See notes below about preloading sounds within initialization code below.
    
    var whoosh = new Sound('selec_loro.mp3', null, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
    
  });
    return (
        <GradientBackground>
            
            <TouchableOpacity onPress={ () => navigation.navigate('discriminacionAuditiva') }>

        <Image source={require('@recursos/images/flecha.png')}
          style={loginStyles.flecha} />

        </TouchableOpacity>
            
        <Text style={mainStyles.titleText}> ¿Cúal es el correcto?</Text>


            <View style={iconStyles.container} >

            <TouchableOpacity onPress={ () => navigation.navigate('discriminacionAuditiva')}>
            
            <Image source={require('@recursos/images/loro.png')}
            style={loginStyles.logo}/>

            </TouchableOpacity>
            
            <TouchableOpacity onPress={ () => navigation.navigate('discriminacionAuditiva')}>

            <Image source={require('@recursos/images/lodo.png')}
            style={loginStyles.logo}/>

            </TouchableOpacity>
        </View>
                  
        <View style={loginStyles.container}>


        <Text> Repetir Audio</Text>
            <TouchableHighlight onPress={() => { whoosh.play()}}>


            <Image
                    style={loginStyles.replay}
                        source={require('@recursos/images/repetir.png')}
                            />
                </TouchableHighlight>
            </View>
            <Text style={mainStyles.titleText}> ¡¡Muy bien!!</Text>
      <Image source={require('@recursos/images/puduBuenResultado.png')}
        style={loginStyles.logoPudu}  /> 
        </GradientBackground>
    )

    
    
};
export default discriPositiva


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

  sigueIntentando: {
    fontSize: 35,
    marginTop: 15,
    marginBottom: 15,
    fontFamily: "roboto-medium",
    color: '#A18A25',
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
        height:150, 
        width:150, 
        marginRight: 10, resizeMode: 'stretch',
        display:"flex",
        borderRadius:3,
    },

    logoPudu: {
      height:80, 
      width:80, 
      marginRight: 10, resizeMode: 'stretch',
      display:"flex",
      borderRadius:3,
      marginLeft:180,},

      flecha: {
        height:50, 
        width:50, 
        marginRight: 10, resizeMode: 'stretch',
        display:"flex",
        borderRadius:3,
        marginLeft:330,
  },

    replay: {
        height:50, 
        width:80, resizeMode: 'stretch',
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
      backgroundColor: '#046F4F',
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
        flexDirection: 'row',
        marginTop:30      },
    });

