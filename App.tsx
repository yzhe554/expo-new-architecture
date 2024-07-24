import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text style={{fontSize: 24}}>RN 24 Label Testing!!!</Text>
      <Text style={{fontSize: 18}}>RN  18 Label Testing!!!</Text>
      <Text style={{fontSize: 16}}>RN 16 Label Testing!!!</Text>
      < StatusBar style="auto" />
    </View>
  );
}
