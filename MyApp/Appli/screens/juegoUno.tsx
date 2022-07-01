import { NavigationContainer } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, View, ImageBackground, TouchableOpacity, Button, SafeAreaView, TouchableHighlight } from 'react-native';
import { GradientBackground } from '../componentes/GradientBackground';
import Sound from 'react-native-sound';
import {useState} from 'react';
import Voice from '@react-native-voice/voice';

interface Props extends StackScreenProps<any,any>{};





const juegoUno = ({navigation}: Props) => {
   
  
  Sound.setCategory('Playback');
    
  var whoosh = new Sound('repite_sonido.mp3', null, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
  
    // Play the sound with an onEnd callback
    /*whoosh.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });*/
  });



  const [pitch, setPitch] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);

  useEffect(() => {
    //Setting callbacks for the process status
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e) => {
    //Invoked when .start() is called without error
    console.log('onSpeechStart: ', e);
    setStarted('√');
  };

  const onSpeechEnd = (e) => {
    //Invoked when SpeechRecognizer stops recognition
    console.log('onSpeechEnd: ', e);
    setEnd('√');
  };

  const onSpeechError = (e) => {
    //Invoked when an error occurs.
    console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));
  };

  const onSpeechResults = (e) => {
    //Invoked when SpeechRecognizer is finished recognizing
    console.log('onSpeechResults: ', e);
    setResults(e.value);
  };

  const onSpeechPartialResults = (e) => {
    //Invoked when any results are computed
    console.log('onSpeechPartialResults: ', e);
    setPartialResults(e.value);
  };

  const onSpeechVolumeChanged = (e) => {
    //Invoked when pitch that is recognized changed
    console.log('onSpeechVolumeChanged: ', e);
    setPitch(e.value);
  };

  const startRecognizing = async () => {
    //Starts listening for speech for a specific locale
    try {
      await Voice.start('es-CL');   
      setPitch('');
      setError('');
      setStarted('');
      setResults([]);
      setPartialResults([]);
      setEnd('');

      
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const stopRecognizing = async () => {
    //Stops listening for speech
    try {
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const destroyRecognizer = async () => {
    //Destroys the current SpeechRecognizer instance
    try {
      await Voice.destroy();
      setPitch('');
      setError('');
      setStarted('');
      setResults([]);
      setPartialResults([]);
      setEnd('');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };


  const render = (e: never[]) => {
    //Invoked when pitch that is recognized changed

    if(e[0] == 'room room room Room')
      return (<><Text style={mainStyles.titleText}> ¡¡Muy bien!!</Text>
      <Image source={require('@recursos/images/puduBuenResultado.png')}
        style={loginStyles.logoPudu}  /> 
        </>);
    if(e[0] != undefined)
      return (<><Text style={mainStyles.sigueIntentando}> Sigue intentándolo</Text><Image source={require('@recursos/images/puduMalResultado.png')}
      style={loginStyles.logoPudu} /></>);
   return;
    
  };

  return (

    
    <GradientBackground>


        <TouchableOpacity onPress={ () => navigation.navigate('juegoCara') }>

        <Image source={require('@recursos/images/flecha.png')}
          style={loginStyles.flecha} />

        </TouchableOpacity>

        <View style={loginStyles.container } >


        

        
        <TouchableOpacity onPress={ () => navigation.navigate('vistaVacia') }>

            <Image source={require('@recursos/images/monoMoto.png')}
            style={loginStyles.logo}/>

        </TouchableOpacity>

        </View>

        
        <Text style={styles.textStyle}>
          Repetir Audio               Click en Micrófono
        </Text>
        <View style={iconStyles.container} >
        
        
        <TouchableHighlight onPress={() => { whoosh.play()}}>
        
          <Image
            style={loginStyles.replay}
            source={require('@recursos/images/repetir.png')}
          />
        </TouchableHighlight>

        
        
        
        <TouchableHighlight onPress={startRecognizing}>
          <Image
            style={styles.imageButton}
            source={require('@recursos/images/button.png')}
          />
        </TouchableHighlight>

        </View>

    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        
        <ScrollView>
          {partialResults.map((result, index) => {
            return (
              <Text
                key={`partial-result-${index}`}
                style={styles.titleText}>
                {result}
              </Text>

            ); 
          })}
          
          {render(results)}
        </ScrollView>
        
        <View style={styles.horizontalView}>
          <TouchableHighlight
            onPress={stopRecognizing}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>
              Parar
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={destroyRecognizer}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>
              Reiniciar
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
    </GradientBackground>
  );
    
};
export default juegoUno;


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
        height:250, 
        width:250, 
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
        flexDirection: 'row'
      },
    });

