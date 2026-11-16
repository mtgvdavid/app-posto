// src/components/index.tsx
import { useState } from 'react';
import {
  StatusBar,
  useColorScheme,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  Alert,
  ScrollView,
  Keyboard,
} from 'react-native';
import { styles } from './styles';
import { ModalResultado } from './modal';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [valor, setValor] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function filtrarValor(texto: string) {
    const limpo = texto.replace(/[^0-9.,]/g, '').replace(',', '.');
    const partes = limpo.split('.');
    if (partes.length > 2) {
      return partes[0] + '.' + partes.slice(1).join('');
    }
    return limpo;
  }

  function calcular() {
    Keyboard.dismiss();

    const precoAlcool = parseFloat(alcool.replace(',', '.'));
    const precoGasolina = parseFloat(gasolina.replace(',', '.'));

    if (
      isNaN(precoAlcool) ||
      isNaN(precoGasolina) ||
      precoAlcool <= 0 ||
      precoGasolina <= 0
    ) {
      Alert.alert('Atenção', 'Preencha os dois valores corretamente.');
      return;
    }

    const divisao = Number((precoAlcool / precoGasolina).toFixed(4));

    if (divisao > 0.7) {
      setValor('Compensa usar Gasolina');
    } else {
      setValor('Compensa usar Álcool');
    }

    setModalVisible(true);
  }

  function calcularNovamente() {
    setModalVisible(false);
    setAlcool('');
    setGasolina('');
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#212121' }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.image}
        />

        <Text style={styles.title}>Qual a melhor opção?</Text>

        <View style={styles.inputs}>
          <Text style={styles.subtitle}>Álcool (preço por litro)</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Digite o valor"
            placeholderTextColor="#888888"
            keyboardType="decimal-pad"
            value={alcool}
            onChangeText={(texto) => setAlcool(filtrarValor(texto))}
          />

          <Text style={styles.subtitle}>Gasolina (preço por litro)</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Digite o valor"
            placeholderTextColor="#888888"
            keyboardType="decimal-pad"
            value={gasolina}
            onChangeText={(texto) => setGasolina(filtrarValor(texto))}
          />

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && { opacity: 0.75 },
            ]}
            onPress={calcular}
          >
            <Text style={styles.buttonText}>Calcular</Text>
          </Pressable>
        </View>
      </ScrollView>

      <ModalResultado
        modalVisible={modalVisible}
        onClose={calcularNovamente}
        resultado={valor}
        alcool={alcool}
        gasolina={gasolina}
      />
    </View>
  );
}