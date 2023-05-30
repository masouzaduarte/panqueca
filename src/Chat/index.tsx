import React, { useState, useRef } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';
import * as gpt from '../Servico/gpt';

interface ChatPayload {
  model: string;
  messages: ChatMessage[];
}

interface ChatMessage {
  role: string;
  content: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [messageText, setMessageText] = useState('');

  const flatListRef = useRef<FlatList>(null);

  const handleSendMessage = async () => {
    
    if (inputText.trim() !== '') {
      const chatPayload: ChatPayload = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: inputText
          }
        ]
      };

      const response = await gpt.obterChat(chatPayload);
  
      const answer = response?.choices?.[0]?.message?.content || '';
      
      const userMessage: ChatMessage = {
        role: 'user',
        content: inputText + ' '
      };

      const botMessage: ChatMessage = {
        role: 'bot',
        content: answer + ' '
      };

      console.log(messages,'mensagem ');
      setMessages([...messages, userMessage, botMessage]);
      setInputText('');

   
      // Rolar automaticamente para a última mensagem

      flatListRef.current?.scrollToEnd();
    }
  };

  return (
    <ImageBackground source={require('../../assets/fundo.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={[styles.messageContainer, item.role === 'bot' && styles.userMessageContainer]}>
              <Text style={[styles.messageText, item.role === 'bot' && styles.userMessageText]}>
                {item.content}
              </Text>
            </View>
          )}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Digite sua mensagem..."
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
            <Text style={styles.sendButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  messageContainer: {
    backgroundColor: '#000000',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    alignSelf: 'flex-end',
  },
  userMessageContainer: {
    alignSelf: 'flex-start', // Para a mensagem do bot ficar à esquerda
    backgroundColor: '#2dbf28', // Cor da mensagem do bot
  },
  messageText: {
    fontSize: 16,
    color: '#ffffff',
  },
  userMessageText: {
    color: '#ffffff', // Cor do texto da mensagem do bot
  },
  inputContainer:
 {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
    color: '#ffffff'
  },
  sendButton: {
    backgroundColor: '#2dbf28',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  sendButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Chat;
