import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';

import './unistyles'
import { UnistylesRuntime, createStyleSheet, useStyles } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme, rt) => {
  console.log(`rt.contentSizeCategory: ${rt.contentSizeCategory}`)
  console.log(`rt.fontScale: ${rt.fontScale}`)
  
  // my styles
  return {
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    label: {
      fontSize: 20,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
});

export default function App() {
  const { styles } = useStyles(stylesheet)
  // console.log(`UnistylesRuntime.contentSizeCategory: ${UnistylesRuntime.contentSizeCategory}`)
  // console.log(`UnistylesRuntime.fontScale: ${UnistylesRuntime.fontScale}`)
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
       {/* <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
      /> */}

      < StatusBar style="auto" />
    </View>
  );
}
