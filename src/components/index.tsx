import { useState } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, Text, TextInput, Image, TouchableOpacity, Modal  } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { styles } from './styles';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')}
        style={styles.image} />

      <Text style={styles.title} >Qual a melhor opção?</Text>

      <View style={styles.inputs}>

        <Text style={styles.subtitle}>Álcool (preço por litro)</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Digite o valor"
          keyboardType="numeric"
        />

        <Text style={styles.subtitle}>Gasolina (preço por litro)</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Digite o valor"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;
