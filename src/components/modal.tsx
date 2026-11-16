
import { Modal, Text, TouchableOpacity, Image, View } from 'react-native';
import { styles } from './styles.tsx';

export function modal() {
    <Modal >
        <View style={styles.container}>
            <Image source={require('../assets/images/gas.png')}
                style={styles.image} />
            
            <Text style={styles.titleModal}>
                Compensa usar Álcool
            </Text>
            
            <Text style={styles.subtitle}>
                Com os preços:
            </Text>

            <Text style={styles.text}>
                Álcool: R$4.60
            </Text>

            <Text style={styles.text}>
                Gasolina: R$7.60
            </Text>
            <TouchableOpacity style={styles.buttonModal}>
                <Text style={styles.textButtonModal}>
                    Calcular Novamente
                </Text>
            </TouchableOpacity>
        </View>
    </Modal>
}