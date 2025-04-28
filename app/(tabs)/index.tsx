import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import params from './params'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Mines!</Text>
      <Text style={styles.instructions}>Tamanho da grade: 
        {params.getRowsAmount()}x{params.getColumns()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF'
 },
 welcome: {
  fontSize: 20,
  textAlign: 'center',
  margin: 10,
 },
 instructions: {
  fontSize: 15,
  textAlign: 'center',
  margin: 10,
 }
});
