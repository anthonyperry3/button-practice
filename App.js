import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>Press Me</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#023020',
    color: "#fff",
    width: 500,
    height: 250,
    fontSize: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
