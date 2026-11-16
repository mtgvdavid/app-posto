// src/components/modal.tsx
import { Modal, Text, Pressable, Image, View } from 'react-native';
import { styles } from './styles';

interface ModalResultadoProps {
  modalVisible: boolean;
  onClose: () => void;
  resultado: string;
  alcool: string;
  gasolina: string;
}

export function ModalResultado({
  modalVisible,
  onClose,
  resultado,
  alcool,
  gasolina,
}: ModalResultadoProps) {
  const alcoolFormatado = (parseFloat(alcool.replace(',', '.')) || 0).toFixed(2);
  const gasolinaFormatada = (parseFloat(gasolina.replace(',', '.')) || 0).toFixed(2);

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      statusBarTranslucent={true}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/images/gas.png')}
          style={styles.image}
        />

        <Text style={styles.titleModal}>{resultado}</Text>

        <Text style={styles.subtitle}>Com os preços:</Text>

        <Text style={styles.text}>Álcool: R$ {alcoolFormatado}</Text>

        <Text style={styles.text}>Gasolina: R$ {gasolinaFormatada}</Text>

        <Pressable
          style={({ pressed }) => [
            styles.buttonModal,
            pressed && { opacity: 0.75 },
          ]}
          onPress={onClose}
        >
          <Text style={styles.textButtonModal}>Calcular Novamente</Text>
        </Pressable>
      </View>
    </Modal>
  );
}