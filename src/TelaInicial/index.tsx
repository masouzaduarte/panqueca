import React from 'react';
import { View, Image, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

const TelaInicial = ({navigation}) => {
  const handleStart = () => {
    // Lógica para o botão "Iniciar"
  };

  return (
    <View style={styles.container}>
        
        <View style={styles.containerImagem}>
        
        <Image
          source={require('../../assets/logo.png')} // Substitua o caminho pelo caminho da sua imagem de logotipo
          style={styles.logo}
        />
     </View>
     <View  style={styles.containerBotao}>
        <TouchableOpacity style={styles.botao}  onPress={()=>{ navigation.navigate("ConversePanqueca")}}>
                            <Text style={styles.textoBotao}>Conversar com ele!</Text>
        </TouchableOpacity>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#000000'
  },
  logo: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
   containerBotao: {
    flex:1,
    alignItems: 'center',
    width: '100%'
  },
  containerImagem:{
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding:'20%'
  },
  botao:{
    width:'50%',
    backgroundColor: "#2dbf28",
    paddingVertical:16,
    borderRadius:6,
  },
  textoBotao:{
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 16,
    

},
});

export default TelaInicial;